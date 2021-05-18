import type { DashProps } from "@egvelho/next-material/components/dash";
import { createContext } from "@egvelho/next-material/utils/create-context";

export type ContextProps = {
  loading: boolean;
  snackbarContent: DashProps["snackbarContent"];
  drawerOpen: boolean;
};

const initialContext: ContextProps = {
  loading: false,
  drawerOpen: false,
  snackbarContent: {
    message: undefined,
    severity: undefined,
  },
};

export const {
  Context,
  ContextProvider,
  getContext,
  useContext,
} = createContext(initialContext);
