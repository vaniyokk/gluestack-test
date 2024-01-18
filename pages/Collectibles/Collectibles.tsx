import {
  Button,
  ButtonIcon,
  ButtonText,
  styled,
  Text,
  useToken,
  View
} from "@gluestack-ui/themed";
import { ColorValue } from "react-native";

import InformationCircle from "~/assets/icons/InformationCircle.svg";
import Icon from "~/components/Icon";
import {
  CollectiblesScreenProps,
  Route
} from "~/providers/AppRoutingProvider/declarations";

type Props = CollectiblesScreenProps;

const Collectibles = ({ navigation }: Props): JSX.Element => {
  const white = useToken("colors", "white");

  return (
    <View>
      <Icon variant="chat" color="$orange400" />
      <View bgColor="$white" rounded="$md" p="$10">
        <Button
          softShadow="lg"
          rounded="$full"
          variant="solid"
          action="emphasized"
          onPress={() => navigation.navigate(Route.Activity)}
        >
          <ButtonText>Go to activity</ButtonText>
          {/* @ts-ignore */}
          <ButtonIcon as={InformationCircle} fill={white as ColorValue} />
        </Button>
      </View>
      <Text size="4xl">Collectibles page</Text>
      <StyledText>Collectibles page</StyledText>
      <Text>Collectibles page</Text>
    </View>
  );
};

export default Collectibles;

const StyledText = styled(Text, {
  fontFamily: "$bodyRegular",
  defaultProps: {
    size: "4xl"
  }
});
