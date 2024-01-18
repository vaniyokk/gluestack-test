import { NavigationContainer } from "@react-navigation/native";
// TODO: Replace @react-navigation/stack if more customization is needed
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Activity from "~/pages/Activity";
import Collectibles from "~/pages/Collectibles";
import Settings from "~/pages/Settings";

import { RootStackParamList, Route } from "./declarations";

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppRoutingProvider = (): JSX.Element => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Collectibles">
      {/* TODO Titles should be implemented separately for each screen */}
      <Stack.Screen
        name={Route.Collectibles}
        component={Collectibles}
        options={{
          title: "Collectibles"
        }}
      />
      <Stack.Screen
        name={Route.Activity}
        component={Activity}
        options={{ title: "Activity" }}
      />
      <Stack.Screen
        name={Route.Settings}
        component={Settings}
        options={{ title: "Settings" }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppRoutingProvider;
