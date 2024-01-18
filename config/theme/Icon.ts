import { createStyle } from "@gluestack-style/react";

export const BaseIcon = createStyle({
  color: "$neutral800",
  _dark: {
    color: "$neutral400"
  },
  variants: {
    size: {
      "2xs": {
        h: "$4",
        w: "$4",
        props: {
          // @ts-ignore
          size: 16
        }
      },
      xs: {
        h: "$5",
        w: "$5",
        props: {
          //@ts-ignore
          size: 20
        }
      },
      sm: {
        h: "$6",
        w: "$6",
        props: {
          //@ts-ignore
          size: 24
        }
      },
      md: {
        h: "$8",
        w: "$8",
        props: {
          //@ts-ignore
          size: 32
        }
      },
      lg: {
        h: "$9",
        w: "$9",
        props: {
          //@ts-ignore
          size: 36
        }
      },
      xl: {
        h: "$12",
        w: "$12",
        props: {
          //@ts-ignore
          size: 48
        }
      }
    }
  }
  // defaultProps: {
  //   size: 'md',
  // },
});

export const Icon = createStyle({
  props: {
    size: "md",
    //@ts-ignore
    fill: "$neutral800"
  },
  color: "$neutral800",
  _dark: {
    //@ts-ignore
    color: "$neutral400"
  }
});
