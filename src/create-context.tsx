import React from "react";

export function createContext<ContextProps extends Object>(
  initialContext: ContextProps,
  persistKeys: (keyof ContextProps)[] = []
) {
  const Context = React.createContext({
    context: { ...initialContext, ...retrieveStoredContext() },
    setContext(context: Partial<ContextProps>) {},
  });

  setWindowContext(initialContext);
  setWindowSetContext(() => {});

  return {
    Context,
    useContext() {
      return React.useContext(Context);
    },
    ContextProvider({ children }: { children: JSX.Element }) {
      const [partialContext, setPartialContext] = React.useState(
        initialContext as Partial<ContextProps>
      );

      const context = getWindowContext<ContextProps>() ?? {
        ...initialContext,
        ...partialContext,
      };

      const setContext = (context: Partial<ContextProps>) =>
        queuedSetContext(setPartialContext, context);

      React.useEffect(() => {
        const storedContext = retrieveStoredContext();
        const nextContext = { ...partialContext, ...storedContext };

        setWindowContext(nextContext);
        setWindowSetContext(setPartialContext);
        setContext(nextContext);
      }, []);

      React.useEffect(() => {
        setWindowSetContext(setPartialContext);
        queuedSetContext(setPartialContext);

        if (document.readyState !== "complete") {
          return;
        }

        storeContextOnPersistedKeysChange(partialContext, context, persistKeys);
      }, [partialContext]);

      return (
        <Context.Provider
          value={{
            context,
            setContext,
          }}
        >
          {children}
        </Context.Provider>
      );
    },
    getContext(): {
      context: ContextProps;
      setContext: (context: Partial<ContextProps>) => void;
    } {
      const setContext = getWindowSetContext();
      return {
        context: getWindowContext() ?? initialContext,
        setContext: setContext
          ? (context: Partial<ContextProps>) =>
              queuedSetContext(setContext, context)
          : () => {},
      };
    },
  };
}

function setWindowContext<ContextProps>(context: ContextProps) {
  if (typeof window === "undefined") {
    return;
  }
  (window as any)["__context"] = {
    ...((window as any)["__context"] ?? {}),
    ...context,
  };
}

function setWindowSetContext<ContextProps>(
  setContext: (context: ContextProps) => void
) {
  if (typeof window === "undefined") {
    return;
  }
  (window as any)["__setContext"] = setContext;
}

function getWindowContext<ContextProps>(): undefined | ContextProps {
  if (typeof window === "undefined") {
    return undefined;
  }
  return (window as any)["__context"];
}

function getWindowSetContext<ContextProps>():
  | undefined
  | ((context: ContextProps) => void) {
  if (typeof window === "undefined") {
    return undefined;
  }
  return (window as any)["__setContext"];
}

async function storeContextOnPersistedKeysChange<ContextProps>(
  partialContext: Partial<ContextProps>,
  context: ContextProps,
  persistKeys: (keyof ContextProps)[] = []
) {
  const partialContextKeys = Object.keys(partialContext);
  const persistedKeysChanged = partialContextKeys.some((key) =>
    persistKeys.includes(key as keyof ContextProps)
  );

  if (persistedKeysChanged) {
    const previousStoredContext = retrieveStoredContext();
    const nextContext = (partialContextKeys as (keyof ContextProps)[]).reduce(
      (partialContext, key) => ({
        ...partialContext,
        [key]: context[key as keyof ContextProps],
      }),
      {} as Partial<ContextProps>
    );

    const nextStoredContext = {
      ...previousStoredContext,
      ...nextContext,
    };

    storeContext(nextStoredContext);
  }
}

function storeContext<ContextProps>(context: ContextProps) {
  if (typeof window === "undefined") {
    return;
  }

  localStorage.setItem("context", JSON.stringify(context));
}

function retrieveStoredContext<ContextProps>(): Partial<ContextProps> {
  if (typeof window === "undefined") {
    return {};
  }

  const stringifiedContext = localStorage.getItem("context");

  if (stringifiedContext) {
    const context: Partial<ContextProps> = JSON.parse(stringifiedContext);
    return context;
  } else {
    return {};
  }
}

function popContextQueueAt<ContextProps>(
  at: number
): Partial<ContextProps> | undefined {
  const contextAt = (window as any).__contextQueue[at][1];
  (window as any).__contextQueue.splice(at, 1);
  return contextAt;
}

function lockContextQueueAt(at: number) {
  if ((window as any).__contextQueue[at][0] === true) {
    return false;
  } else {
    (window as any).__contextQueue[at][0] = true;
    return true;
  }
}

function getContextQueueItem<ContextProps>():
  | Partial<ContextProps>
  | undefined {
  if (lockContextQueueAt(0)) {
    return popContextQueueAt<ContextProps>(0);
  }

  return undefined;
}

function pushToContextQueue<ContextProps>(context: Partial<ContextProps>) {
  (window as any).__contextQueue.push([false, context]);
}

function startContextQueue() {
  if ((window as any).__contextQueue === undefined) {
    (window as any).__contextQueue = [];
  }
}

function contextQueueIsEmpty() {
  return (window as any).__contextQueue.length === 0;
}

function queuedSetContext<ContextProps>(
  setContext: (context: Partial<ContextProps>) => void,
  context?: Partial<ContextProps>
) {
  if (typeof window === "undefined") {
    return;
  }

  startContextQueue();

  if (context !== undefined) {
    pushToContextQueue(context);
  } else if (contextQueueIsEmpty()) {
    return;
  }

  const queuedContext = getContextQueueItem<ContextProps>();

  if (queuedContext !== undefined) {
    setWindowContext(queuedContext);
    setContext(queuedContext);
  }
}
