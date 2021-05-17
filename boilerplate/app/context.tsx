import type { DashProps } from "@egvelho/next-material-components";
import { createContext } from "@egvelho/next-metadata";

export type ContextProps = {
  loading: boolean;
  token: string | undefined;
  withNotifications: boolean;
  snackbarContent: DashProps["snackbarContent"];
  drawerOpen: boolean;
};

const initialContext: ContextProps = {
  loading: false,
  token: undefined,
  withNotifications: false,
  drawerOpen: false,
  snackbarContent: {
    message: undefined,
    severity: undefined,
  },
};

export const { Context, ContextProvider, getContext } = createContext(
  initialContext,
);
