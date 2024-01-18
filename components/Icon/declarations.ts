import { FC, SVGProps } from "react";

import { IconVariant } from "./generated";

export type ThemeIcons = {
  [variant in IconVariant]: FC<SVGProps<SVGSVGElement>>;
};

export type IconVariantType = keyof typeof IconVariant;
