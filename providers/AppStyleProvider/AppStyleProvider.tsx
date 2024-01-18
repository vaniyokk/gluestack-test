import { GluestackUIProvider } from "@gluestack-ui/themed";
import { ReactNode } from "react";

import { config } from "~/config/gluestack-ui.config";

export enum ThemeMode {
  light = "light",
  dark = "dark"
}

type Props = {
  children: ReactNode;
};

const AppStyleProvider = ({ children }: Props): JSX.Element => (
  <GluestackUIProvider config={config}>{children}</GluestackUIProvider>
);

export default AppStyleProvider;
