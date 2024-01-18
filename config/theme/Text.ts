import { createStyle } from "@gluestack-style/react";

export const Text = createStyle({
  color: "$neutral800",
  _dark: {
    color: "$neutral400"
  },
  fontWeight: "$normal",
  fontFamily: "$body",
  fontStyle: "normal",
  letterSpacing: "$md",

  variants: {
    isTruncated: {
      true: {
        props: {
          // @ts-ignore
          numberOfLines: 1,
          ellipsizeMode: "tail"
        }
      }
    },
    bold: {
      true: {
        fontWeight: "$bold"
      }
    },
    underline: {
      true: {
        textDecorationLine: "underline"
      }
    },
    strikeThrough: {
      true: {
        textDecorationLine: "line-through"
      }
    },
    sub: {
      true: {
        fontSize: "$xs",
        lineHeight: "$xs"
      }
    },
    italic: {
      true: {
        fontStyle: "italic"
      }
    },
    highlight: {
      true: {
        bg: "$yellow500"
      }
    },
    size: {
      "2xs": {
        fontSize: "$2xs",
        lineHeight: "$xs"
      },
      xs: {
        fontSize: "$xs",
        lineHeight: "$xs"
      },
      sm: {
        fontSize: "$sm",
        lineHeight: "$sm"
      },
      md: {
        fontSize: "$md",
        lineHeight: "$md"
      },
      lg: {
        fontSize: "$lg",
        lineHeight: "$lg"
      },
      xl: {
        fontSize: "$xl",
        lineHeight: "$lg"
      },
      "2xl": {
        fontSize: "$2xl",
        lineHeight: "$xl"
      },
      "3xl": {
        fontSize: "$3xl",
        lineHeight: "$2xl"
      },
      "4xl": {
        fontSize: "$4xl",
        lineHeight: "$3xl",
        letterSpacing: "$sm"
      },
      "5xl": {
        fontSize: "$5xl",
        lineHeight: "$full",
        letterSpacing: "$sm"
      },
      "6xl": {
        fontSize: "$6xl",
        lineHeight: "$full",
        letterSpacing: "$md"
      },
      "7xl": {
        fontSize: "$7xl",
        lineHeight: "$full",
        letterSpacing: "$lg"
      },
      "8xl": {
        fontSize: "$8xl",
        lineHeight: "$full",
        letterSpacing: "$xl"
      },
      "9xl": {
        fontSize: "$9xl",
        lineHeight: "$full",
        letterSpacing: "$2xl"
      }
    }
  },

  defaultProps: {
    size: "md"
  }
});
