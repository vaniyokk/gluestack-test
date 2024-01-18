import { AnimationResolver } from "@gluestack-style/animation-resolver";
import { MotionAnimationDriver } from "@gluestack-style/legend-motion-animation-driver";
import { createComponents, createConfig } from "@gluestack-style/react";

import * as componentsTheme from "./theme";

export const gluestackUIConfig = createConfig({
  aliases: {
    bg: "backgroundColor",
    bgColor: "backgroundColor",
    h: "height",
    w: "width",
    p: "padding",
    px: "paddingHorizontal",
    py: "paddingVertical",
    pt: "paddingTop",
    pb: "paddingBottom",
    pr: "paddingRight",
    pl: "paddingLeft",
    m: "margin",
    mx: "marginHorizontal",
    my: "marginVertical",
    mt: "marginTop",
    mb: "marginBottom",
    mr: "marginRight",
    ml: "marginLeft",
    rounded: "borderRadius"
  } as const,
  tokens: {
    colors: {
      white: "#FFFFFF",
      black: "#000000",
      neutral50: "#FAFAFA",
      neutral100: "#F5F5F5",
      neutral200: "#E5E5E5",
      neutral300: "#D4D4D4",
      neutral400: "#A3A3A3",
      neutral500: "#737373",
      neutral600: "#525252",
      neutral700: "#404040",
      neutral800: "#262626",
      neutral900: "#171717",
      rose50: "#FFF1F2",
      rose100: "#FFE4E6",
      rose200: "#FECDD3",
      rose300: "#FDA4AF",
      rose400: "#FB7185",
      rose500: "#F43F5E",
      rose600: "#E11D48",
      rose700: "#BE123C",
      rose800: "#9F1239",
      rose900: "#881337",
      violet50: "#F5F3FF",
      violet100: "#EDE9FE",
      violet200: "#DDD6FE",
      violet300: "#C4B5FD",
      violet400: "#A78BFA",
      violet500: "#8B5CF6",
      violet600: "#7C3AED",
      violet700: "#6D28D9",
      violet800: "#5B21B6",
      violet900: "#4C1D95",
      sky50: "#F0F9FF",
      sky100: "#E0F2FE",
      sky200: "#BAE6FD",
      sky300: "#7DD3FC",
      sky400: "#38BDF8",
      sky500: "#0EA5E9",
      sky600: "#0284C7",
      sky700: "#0369A1",
      sky800: "#075985",
      sky900: "#0C4A6E",
      orange50: "#FFF7ED",
      orange100: "#FFEDD5",
      orange200: "#FED7AA",
      orange300: "#FDBA74",
      orange400: "#FB923C",
      orange500: "#F97316",
      orange600: "#EA580C",
      orange700: "#C2410C",
      orange800: "#9A3412",
      orange900: "#7C2D12",
      green50: "#F0FDF4",
      green100: "#DCFCE7",
      green200: "#BBF7D0",
      green300: "#86EFAC",
      green400: "#4ADE80",
      green500: "#22C55E",
      green600: "#16A34A",
      green700: "#15803D",
      green800: "#166534",
      green900: "#14532D",
      yellow50: "#FEFCE8",
      yellow100: "#FEF9C3",
      yellow200: "#FEF08A",
      yellow300: "#FDE047",
      yellow400: "#FACC15",
      yellow500: "#EAB308",
      yellow600: "#CA8A04",
      yellow700: "#A16207",
      yellow800: "#854D0E",
      yellow900: "#713F12"
    },
    space: {
      px: "1px",
      "0": 0,
      "0.5": 2,
      "1": 4,
      "1.5": 6,
      "2": 8,
      "2.5": 10,
      "3": 12,
      "3.5": 14,
      "4": 16,
      "4.5": 18,
      "5": 20,
      "6": 24,
      "7": 28,
      "8": 32,
      "9": 36,
      "10": 40,
      "11": 44,
      "12": 48,
      "16": 64,
      "20": 80,
      "24": 96,
      "32": 128,
      "40": 160,
      "48": 192,
      "56": 224,
      "64": 256,
      "72": 288,
      "80": 320,
      "96": 384,
      "1/2": "50%",
      "1/3": "33.333%",
      "2/3": "66.666%",
      "1/4": "25%",
      "2/4": "50%",
      "3/4": "75%",
      "1/5": "20%",
      "2/5": "40%",
      "3/5": "60%",
      "4/5": "80%",
      "1/6": "16.666%",
      "2/6": "33.333%",
      "3/6": "50%",
      "4/6": "66.666%",
      "5/6": "83.333%",
      full: "100%"
    },
    borderWidths: {
      "0": 0,
      "1": 1,
      "2": 2,
      "4": 4,
      "8": 8
    },
    radii: {
      none: 0,
      xs: 4,
      sm: 8,
      md: 12,
      lg: 24,
      xl: 99,
      full: 9999
    },
    breakpoints: {
      base: 0,
      sm: 480,
      md: 768,
      lg: 992,
      xl: 1280
    },
    mediaQueries: {
      base: "@media screen and (min-width: 0)",
      xs: "@media screen and (min-width: 400px)",
      sm: "@media screen and (min-width: 480px)",
      md: "@media screen and (min-width: 768px)",
      lg: "@media screen and (min-width: 992px)",
      xl: "@media screen and (min-width: 1280px)"
    },
    letterSpacings: {
      xs: -0.72,
      sm: -0.96,
      md: -1.2,
      lg: -1.44,
      xl: -1.92,
      "2xl": -2.56
    },
    lineHeights: {
      xs: 16,
      sm: 20,
      md: 24,
      lg: 28,
      xl: 32,
      "2xl": 36,
      "3xl": 40,
      full: "100%"
    },
    fontWeights: {
      hairline: "100",
      thin: "200",
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
      black: "900",
      extraBlack: "950"
    },
    fonts: {
      heading: undefined,
      body: "Figtree-SemiBold",
      bodyRegular: "Figtree-Regular",
      mono: undefined
    },
    fontSizes: {
      "2xs": 10,
      xs: 12,
      sm: 14,
      md: 16,
      lg: 18,
      xl: 20,
      "2xl": 24,
      "3xl": 30,
      "4xl": 36,
      "5xl": 48,
      "6xl": 60,
      "7xl": 72,
      "8xl": 96,
      "9xl": 128
    },
    opacity: {
      0: 0,
      5: 0.05,
      10: 0.1,
      20: 0.2,
      25: 0.25,
      30: 0.3,
      40: 0.4,
      50: 0.5,
      60: 0.6,
      70: 0.7,
      75: 0.75,
      80: 0.8,
      90: 0.9,
      95: 0.95,
      100: 1
    }
  } as const,
  globalStyle: {
    variants: {
      // TODO: Should be tested and fixed
      hardShadow: {
        xl: {
          shadowColor: "rgba(0, 0, 0, 0.10)",
          shadowOffset: {
            width: 0,
            height: 25
          },
          shadowRadius: 25,
          shadowOpacity: -5,
          elevation: 10
        },
        "2xl": {
          shadowColor: "rgba(0, 0, 0, 0.25)",
          shadowOffset: {
            width: 0,
            height: 25
          },
          shadowOpacity: 50,
          shadowRadius: -12,
          elevation: 10
        }
      },
      softShadow: {
        sm: {
          shadowColor: "rgba(0, 0, 0, 0.05)",
          shadowOffset: {
            width: 0,
            height: 1
          },
          shadowOpacity: 1,
          shadowRadius: 2,
          elevation: 5,
          _android: {
            shadowColor: "rgba(0, 0, 0, 0.05)",
            elevation: 5,
            shadowOpacity: 1
          }
        },
        base: {
          shadowColor: "rgba(0, 0, 0, 0.1)",
          shadowOffset: {
            width: 0,
            height: 1
          },
          shadowOpacity: 2,
          shadowRadius: -1,
          elevation: 3,
          _android: {
            shadowColor: "rgba(0, 0, 0, 0.1)",
            elevation: 10,
            shadowOpacity: 0.1
          }
        },
        md: {
          shadowColor: "rgba(0, 0, 0, 0.1)",
          shadowOffset: {
            width: 0,
            height: 2
          },
          shadowOpacity: 4,
          shadowRadius: -2,
          elevation: 4,
          _android: {
            shadowColor: "rgba(0, 0, 0, 0.1)",
            elevation: 15,
            shadowOpacity: 0.15
          }
        },
        lg: {
          shadowColor: "rgba(0, 0, 0, 0.1)",
          shadowOffset: {
            width: 0,
            height: 4
          },
          shadowOpacity: 6,
          shadowRadius: -4,
          elevation: 10,
          _android: {
            shadowColor: "rgba(0, 0, 0, 0.1)",
            elevation: 20,
            shadowOpacity: 0.2
          }
        }
      }
    }
  },
  plugins: [new AnimationResolver(MotionAnimationDriver)]
});

type Config = typeof gluestackUIConfig; // Assuming `config` is defined elsewhere

export type Colors = `$${keyof Config["tokens"]["colors"]}`;

type Components = typeof componentsConfig;

export const componentsConfig = createComponents(componentsTheme);

export type { UIComponents, UIConfig } from "@gluestack-ui/themed";

export interface IConfig {}
export interface IComponents {}

declare module "@gluestack-ui/themed" {
  interface UIConfig extends Omit<Config, keyof IConfig>, IConfig {}
  interface UIComponents
    extends Omit<Components, keyof IComponents>,
      IComponents {}
}

export const config = {
  ...gluestackUIConfig,
  components: componentsConfig
};
