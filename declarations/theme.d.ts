import { Join } from "~/declarations/common";

enum ThemeMode {
  light = "light",
  dark = "dark"
}

export interface ThemeColorGradation {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
}

interface ThemePalette {
  mode: ThemeMode;
  common: {
    black: string;
    white: string;
  };
  text: {
    primary: string;
    secondary: string;
    tertiary: string;
    quaternary: string;
  };
  neutral: ThemeColorGradation;
  rose: ThemeColorGradation;
  violet: ThemeColorGradation;
  sky: ThemeColorGradation;
  orange: ThemeColorGradation;
  green: ThemeColorGradation;
  yellow: ThemeColorGradation;
}

export interface ShadowProps {
  shadowColor: string;
  shadowOffset: {
    width: number;
    height: number;
  };
  shadowOpacity: number;
  shadowRadius: number;
}

interface ThemeShadows {
  sm: ShadowProps;
  base: ShadowProps;
  md: ShadowProps;
  lg: ShadowProps;
  "2xl": ShadowProps;
}

interface ThemeBlurEffects {
  sm: string;
  base: string;
  md: string;
  lg: string;
  xl: string;
  "2xl": string;
  "3xl": string;
}

interface ThemeBorderRadius {
  xs: string;
  sm: string;
  base: string;
  lg: string;
  xl: string;
}

export enum ThemeTypographyVariant {
  "9xl" = "9xl",
  "8xl" = "8xl",
  "7xl" = "7xl",
  "6xl" = "6xl",
  "5xl" = "5xl",
  "4xl" = "4xl",
  "3xl" = "3xl",
  "2xl" = "2xl",
  "xl" = "xl",
  "lg" = "lg",
  "base" = "base",
  "sm" = "sm",
  "xs" = "xs",
  "9xl-regular" = "9xl-regular",
  "8xl-regular" = "8xl-regular",
  "7xl-regular" = "7xl-regular",
  "6xl-regular" = "6xl-regular",
  "5xl-regular" = "5xl-regular",
  "4xl-regular" = "4xl-regular",
  "3xl-regular" = "3xl-regular",
  "2xl-regular" = "2xl-regular",
  "xl-regular" = "xl-regular",
  "lg-regular" = "lg-regular",
  "base-regular" = "base-regular",
  "sm-regular" = "sm-regular",
  "xs-regular" = "xs-regular"
}

type ThemeTypography = Record<ThemeTypographyVariant, React.CSSProperties>;

interface CustomTheme {
  palette: ThemePalette;
  shadow: ThemeShadows;
  borderRadius: ThemeBorderRadius;
  typography: ThemeTypography;
}

declare module "@emotion/react" {
  export interface Theme extends CustomTheme {}
}

export type PickColorsFromPalette<T extends keyof ThemePalette> = Join<
  T,
  keyof ThemePalette[T]
>;

export type CSSInjection = ({
  theme
}: {
  theme: CustomTheme;
}) => CSSInterpolation;

export type ThemeColor =
  | PickColorsFromPalette<"common">
  | PickColorsFromPalette<"text">
  | PickColorsFromPalette<"neutral">
  | PickColorsFromPalette<"rose">
  | PickColorsFromPalette<"violet">
  | PickColorsFromPalette<"sky">
  | PickColorsFromPalette<"orange">
  | PickColorsFromPalette<"green">
  | PickColorsFromPalette<"yellow">;
