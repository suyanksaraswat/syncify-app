import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";

import TabBarIcon from "../components/TabBarIcon";
import Explore from "../screens/Explore";
import Podcasts from "../screens/Podcasts";
import Social from "../screens/Social";
import TopCharts from "../screens/TopCharts";

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = "Podcasts";

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Podcasts"
        component={Podcasts}
        options={{
          title: "Podcasts",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="playlist-play" />
          ),
        }}
      />
      <BottomTab.Screen
        name="TopCharts"
        component={TopCharts}
        options={{
          title: "Top Charts",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="star" />
          ),
        }}
      />
      <BottomTab.Screen
        name="Explore"
        component={Explore}
        options={{
          title: "Explore",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="magnify" />
          ),
        }}
      />
      <BottomTab.Screen
        name="Social"
        component={Social}
        options={{
          title: "Social",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="account-group" />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName =
    route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case "Home":
      return "How to get started";
    case "Links":
      return "Links to learn more";
  }
}
