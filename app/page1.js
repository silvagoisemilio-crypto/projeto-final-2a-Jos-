import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  Image,
  TouchableOpacity,
  LayoutAnimation,
  Platform,
  UIManager,
} from "react-native";
import { useState } from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Ionicons from "@expo/vector-icons/Ionicons";

// Libera animações no Android
if (Platform.OS === "android") {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

export default function Page() {

  const [expanded, setExpanded] = useState({
    chassi: false,
    motor: false,
    transmissao: false,
    suspensao: false,
    direcao: false,
    freios: false,
    eletrico: false,
    rodas: false,
  });

  function toggle(cardName) {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded((prev) => ({ ...prev, [cardName]: !prev[cardName] }));
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#0b0f1a" }}>
      <ScrollView contentContainerStyle={styles.container}>

        {/* BANNER */}
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=60"
          }}
          style={styles.banner}
        />

        <Text style={styles.title}>Componentes de um Carro</Text>
        <Text style={styles.subtitle}>
          Uma visão moderna, técnica e detalhada da estrutura automotiva
        </Text>

        {/* ---------------- CARD 1 (CHASSI) ---------------- */}
        <TouchableOpacity onPress={() => toggle("chassi")} activeOpacity={0.8}>
          <View style={styles.card}>
            <MaterialCommunityIcons name="car-outline" size={32} color="#4da6ff" style={styles.icon} />
            <Text style={styles.cardTitle}>Chassi / Estrutura</Text>

            {expanded.chassi && (
              <View style={styles.contentRow}>
                <Image
                  source={require("../assets/chassi-gemini.png")}
                  style={styles.imageWeb}
                />

                <Text style={styles.cardText}>
                  O chassi é a base estrutural do veículo, garantindo rigidez,
                  segurança e suporte para todos os componentes.
                </Text>
              </View>
            )}
          </View>
        </TouchableOpacity>

        {/* ---------------- CARD 2 (MOTOR) ---------------- */}
        <TouchableOpacity onPress={() => toggle("motor")} activeOpacity={0.8}>
          <View style={styles.card}>
            <Ionicons name="speedometer-outline" size={32} color="#4da6ff" style={styles.icon} />
            <Text style={styles.cardTitle}>Motor</Text>

            {expanded.motor && (
              <View style={styles.contentRow}>
                <Image
                  source={require("../assets/motor-gemini.png")}
                  style={styles.imageWeb}
                />

                <Text style={styles.cardText}>
                  O motor transforma energia em movimento e define potência,
                  torque e desempenho do carro.
                </Text>
              </View>
            )}
          </View>
        </TouchableOpacity>

        {/* ---------------- CARD 3 (TRANSMISSÃO) ---------------- */}
        <TouchableOpacity onPress={() => toggle("transmissao")} activeOpacity={0.8}>
          <View style={styles.card}>
            <MaterialCommunityIcons name="cog-transfer-outline" size={32} color="#4da6ff" style={styles.icon} />
            <Text style={styles.cardTitle}>Transmissão</Text>

            {expanded.transmissao && (
              <View style={styles.contentRow}>
                <Image
                  source={require("../assets/Transmissao-gemini.png")}
                  style={styles.imageWeb}
                />

                <Text style={styles.cardText}>
                  Controla a força enviada para as rodas, permitindo aceleração
                  suave e controle de velocidade.
                </Text>
              </View>
            )}
          </View>
        </TouchableOpacity>

        {/* ---------------- CARD 4 (SUSPENSÃO) ---------------- */}
        <TouchableOpacity onPress={() => toggle("suspensao")} activeOpacity={0.8}>
          <View style={styles.card}>
            <MaterialCommunityIcons name="shock-absorber" size={32} color="#4da6ff" style={styles.icon} />
            <Text style={styles.cardTitle}>Suspensão</Text>

            {expanded.suspensao && (
              <View style={styles.contentRow}>
                <Image
                  source={require("../assets/Suspensao-gemini.png")}
                  style={styles.imageWeb}
                />

                <Text style={styles.cardText}>
                  Absorve impactos e mantém o carro estável em curvas e superfícies irregulares.
                </Text>
              </View>
            )}
          </View>
        </TouchableOpacity>

        <View style={{ height: 120 }} />

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 18,
    paddingTop: 25,
    backgroundColor: "#0b0f1a",
  },

  banner: {
    width: "100%",
    height: 180,
    borderRadius: 16,
    marginBottom: 24,
  },

  title: {
    color: "#e6f2ff",
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 6,
  },

  subtitle: {
    color: "#8aa5c7",
    fontSize: 14,
    textAlign: "center",
    marginBottom: 26,
  },

  card: {
    backgroundColor: "#141b2d",
    borderRadius: 16,
    padding: 18,
    marginBottom: 18,
    borderWidth: 1,
    borderColor: "#1e2a44",
    shadowColor: "#4da6ff",
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 5,
  },

  cardTitle: {
    color: "#d9ecff",
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 10,
  },

  cardText: {
    color: "#b3c7e6",
    fontSize: 14,
    lineHeight: 20,
    flexShrink: 1,
    marginLeft: Platform.OS === "web" ? 20 : 0,
    marginTop: Platform.OS === "web" ? 0 : 10,
  },

  icon: {
    marginBottom: 10,
  },

  // IMAGEM ADAPTADA PARA WEB
  imageWeb: {
    width: Platform.OS === "web" ? 260 : "100%",
    height: Platform.OS === "web" ? 200 : 310,
    borderRadius: 12,
    resizeMode: "contain",
    marginRight: Platform.OS === "web" ? 20 : 0,
    marginTop: 12,
  },

  // CONTAINER HORIZONTAL SOMENTE NA WEB
  contentRow: {
    flexDirection: Platform.OS === "web" ? "row" : "column",
    alignItems: Platform.OS === "web" ? "center" : "flex-start",
  },
});
