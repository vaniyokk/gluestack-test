import { Icon as GSIcon } from "@gluestack-ui/themed";
import { useMemo } from "react";
import { ColorValue } from "react-native";

import { Colors } from "~/config/gluestack-ui.config";
import { BaseIcon } from "~/config/theme/Icon";

import { IconVariantType } from "./declarations";
import { ICON_COMPONENTS } from "./generated";

type GSIconProps = typeof BaseIcon;

type Props = {
  variant: IconVariantType;
  color?: Colors;
  size?: keyof GSIconProps["theme"]["variants"]["size"];
};

const Icon = ({
  variant,
  color = "$neutral800",
  size = "md"
}: Props): JSX.Element => {
  const Component = useMemo(() => {
    const IconComponent = ICON_COMPONENTS[variant];

    return IconComponent;
  }, [variant]);

  return <GSIcon as={Component} size={size} fill={color as ColorValue} />;
};

export default Icon;
