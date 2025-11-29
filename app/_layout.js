// app/(tabs)/_layout.js
import React from "react";
import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,

        // --- NAVBAR FUTURISTA ---
        tabBarStyle: {
          backgroundColor: "#0A0F1F",
          borderTopColor: "rgba(56,189,248,0.4)",
          borderTopWidth: 1,
          height: 65,
          paddingBottom: 6,
          elevation: 15,
        },
        tabBarActiveTintColor: "#38BDF8",
        tabBarInactiveTintColor: "#94A3B8",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Inicio",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="home"
        options={{
          title: "Inicio",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="page1"
        options={{
          title: "Obrigatório",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="engine" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="page2"
        options={{
          title: "Livre",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="car" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="aboutme"
        options={{
          title: "Sobre mim",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
