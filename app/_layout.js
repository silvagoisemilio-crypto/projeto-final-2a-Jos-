import {Tabs} from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';
export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "black", // cor de fundo do tab bar 
          borderTopColor: "transparent", // remove a borda superior
          elevation: 10, // adiciona sombra no Android
          heigth: 60, // altura do tab bar
          paddinBottom: 5, // espaçamento inferior
        },
        tabBarActiveTintColor: "#ff6600b4", // cor dos ícones ativos
        tabBarInactiveTintColor: "#ffffff60", // cor dos ícones inativos
      }
        }>
      <Tabs.Screen
      name="index" 
      options={{title:"Inicio", headerShown: false,tabBarIcon: ({color}) => <FontAwesome name="home" size={24} color={color}/> }} />
      <Tabs.Screen name="home" options={{title:"Inicio", headerShown: false,tabBarIcon: ({color}) => <FontAwesome name="home" size={24} color={color}/> }} 
      />
      <Tabs.Screen 
      name="page1" 
      options={{title:"obrigatorio", headerShown: false,tabBarIcon: ({color}) => <FontAwesome name="car" size={24} color={color}/> }}
      />
      <Tabs.Screen 
      name="page2" 
      options={{title:"livre", headerShown: false,tabBarIcon: ({color}) => <Ionicons name="car-sport-sharp" size={24} color={color}/> }} 
      />
      <Tabs.Screen 
      name="aboutme" 
      options={{title:"sobre mim", headerShown: false,tabBarIcon: ({color}) => <FontAwesome name="user" size={24} color={color}/> }} 
      />
    </Tabs>
  );
}