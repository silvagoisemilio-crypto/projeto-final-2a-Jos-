// app/_layout.js
import React from "react";
import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "black",
          borderTopColor: "transparent",
          elevation: 10,
          height: 60,
          paddingBottom: 5,
        },
        tabBarActiveTintColor: "#ff6600b4",
        tabBarInactiveTintColor: "#ffffff60",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Inicio",
          headerShown: false,
          tabBarIcon: ({ color }) => <FontAwesome name="home" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="home"
        options={{
          title: "Inicio",
          headerShown: false,
          tabBarIcon: ({ color }) => <FontAwesome name="home" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="page1"
        options={{
          title: "obrigatorio",
          headerShown: false,
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="engine" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="page2"
        options={{
          title: "livre",
          headerShown: false,
          tabBarIcon: ({ color }) => <FontAwesome name="car" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="aboutme"
        options={{
          title: "sobre mim",
          headerShown: false,
          tabBarIcon: ({ color }) => <FontAwesome name="user" size={24} color={color} />,
        }}
      />
    </Tabs>
  );
}
