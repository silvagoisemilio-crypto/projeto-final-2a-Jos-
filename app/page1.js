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
  });

  const [extra, setExtra] = useState({
    chassi: false,
    motor: false,
    transmissao: false,
    suspensao: false,
  });

  function toggle(cardName) {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded((prev) => ({ ...prev, [cardName]: !prev[cardName] }));
  }

  function toggleExtra(name) {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExtra((prev) => ({ ...prev, [name]: !prev[name] }));
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#0b0f1a" }}>
      <ScrollView contentContainerStyle={styles.container}>

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

        {/* WRAPPER DOS CARDS */}
        <View style={styles.cardsGrid}>

          {/* ==================== CHASSI ==================== */}
          <TouchableOpacity
            onPress={() => toggle("chassi")}
            activeOpacity={0.8}
            style={styles.cardWrapper}
          >
            <View style={styles.card}>
              <MaterialCommunityIcons name="car-outline" size={32} color="#4da6ff" style={styles.icon} />
              <Text style={styles.cardTitle}>Chassi / Estrutura</Text>

              {expanded.chassi && (
                <View style={styles.contentRow}>
                  
                  <Image
                    source={require("../assets/chassi-gemini.png")}
                    style={styles.imageWeb}
                  />

                  <View style={styles.textWrapper}>
                    <Text style={styles.cardText}>
                      O chassi funciona como a espinha dorsal do veículo.
                      Ele fornece rigidez estrutural, absorve cargas, sustenta o motor, suspensão,
                      transmissão e protege os ocupantes em caso de impacto.
                    </Text>

                    <TouchableOpacity onPress={() => toggleExtra("chassi")}>
                      <Text style={styles.moreBtn}>
                        {extra.chassi ? "Ver menos ▲" : "Veja mais ▼"}
                      </Text>
                    </TouchableOpacity>

                    {extra.chassi && (
                      <Text style={styles.cardText}>
                        O chassi é a estrutura principal do carro, como seu “esqueleto”. É nele que todos os componentes são fixados: motor, suspensão, transmissão, carroceria e interior. Ele precisa ser rígido para dar segurança e suportar impactos, mas também leve para melhorar desempenho e consumo. Existem diferentes tipos de chassi, como monobloco e longarinas, mas todos têm a função de garantir resistência, estabilidade e suporte para todo o veículo.
                      </Text>
                    )}
                  </View>

                </View>
              )}
            </View>
          </TouchableOpacity>

          {/* ==================== MOTOR ==================== */}
          <TouchableOpacity
            onPress={() => toggle("motor")}
            activeOpacity={0.8}
            style={styles.cardWrapper}
          >
            <View style={styles.card}>
              <Ionicons name="speedometer-outline" size={32} color="#4da6ff" style={styles.icon} />
              <Text style={styles.cardTitle}>Motor</Text>

              {expanded.motor && (
                <View style={styles.contentRow}>

                  <Image
                    source={require("../assets/motor-gemini.png")}
                    style={styles.imageWeb}
                  />

                  <View style={styles.textWrapper}>
                    <Text style={styles.cardText}>
                      O motor é o coração do carro, convertendo energia química em movimento.
                    </Text>

                    <TouchableOpacity onPress={() => toggleExtra("motor")}>
                      <Text style={styles.moreBtn}>
                        {extra.motor ? "Ver menos ▲" : "Veja mais ▼"}
                      </Text>
                    </TouchableOpacity>

                    {extra.motor && (
                      <Text style={styles.cardText}>
                        O motor é o coração do carro e transforma combustível em energia para mover o veículo. Ele funciona através de ciclos de combustão dentro dos cilindros, gerando força (torque) e velocidade (potência). Existem motores de diferentes tamanhos e tecnologias — como turbo, aspirado ou híbrido — mas todos cumprem o mesmo papel: fornecer energia de forma eficiente, controlada e confiável para que o carro acelere e mantenha movimento.
                      </Text>
                    )}
                  </View>

                </View>
              )}
            </View>
          </TouchableOpacity>

          {/* ==================== TRANSMISSÃO ==================== */}
          <TouchableOpacity
            onPress={() => toggle("transmissao")}
            activeOpacity={0.8}
            style={styles.cardWrapper}
          >
            <View style={styles.card}>
              <MaterialCommunityIcons name="cog-transfer-outline" size={32} color="#4da6ff" style={styles.icon} />
              <Text style={styles.cardTitle}>Transmissão</Text>

              {expanded.transmissao && (
                <View style={styles.contentRow}>

                  <Image
                    source={require("../assets/Transmissao-gemini.png")}
                    style={styles.imageWeb}
                  />

                  <View style={styles.textWrapper}>
                    <Text style={styles.cardText}>
                      A transmissão adapta a força do motor para as rodas.
                    </Text>

                    <TouchableOpacity onPress={() => toggleExtra("transmissao")}>
                      <Text style={styles.moreBtn}>
                        {extra.transmissao ? "Ver menos ▲" : "Veja mais ▼"}
                      </Text>
                    </TouchableOpacity>

                    {extra.transmissao && (
                      <Text style={styles.cardText}>
                        A transmissão é o sistema que conecta o motor às rodas e controla como a força chega até elas. Quando o carro está parado, ela usa marchas baixas para fornecer mais torque; conforme a velocidade aumenta, passa para marchas mais altas para reduzir o esforço do motor e economizar combustível. Existem vários tipos de transmissão — manual, automática, CVT e automatizada — mas todas têm o mesmo objetivo: ajustar a força do motor para garantir desempenho, eficiência e conforto durante a condução.
                      </Text>
                    )}
                  </View>

                </View>
              )}
            </View>
          </TouchableOpacity>

          {/* ==================== SUSPENSÃO ==================== */}
          <TouchableOpacity
            onPress={() => toggle("suspensao")}
            activeOpacity={0.8}
            style={styles.cardWrapper}
          >
            <View style={styles.card}>
              <MaterialCommunityIcons name="audio-input-rca" size={32} color="#4da6ff" style={styles.icon} />
              <Text style={styles.cardTitle}>Suspensão</Text>

              {expanded.suspensao && (
                <View style={styles.contentRow}>

                  <Image
                    source={require("../assets/Suspensao-gemini.png")}
                    style={styles.imageWeb}
                  />

                  <View style={styles.textWrapper}>
                    <Text style={styles.cardText}>
                      A suspensão mantém estabilidade e absorve impactos da estrada.
                    </Text>

                    <TouchableOpacity onPress={() => toggleExtra("suspensao")}>
                      <Text style={styles.moreBtn}>
                        {extra.suspensao ? "Ver menos ▲" : "Veja mais ▼"}
                      </Text>
                    </TouchableOpacity>

                    {extra.suspensao && (
                      <Text style={styles.cardText}>
                        A suspensão é o sistema que conecta as rodas ao chassi e tem a função de manter o carro estável, confortável e seguro. Ela absorve impactos de buracos e irregularidades do solo, evitando que vibrações cheguem diretamente ao interior do veículo. Além disso, garante que os pneus mantenham contato constante com o chão, o que melhora a aderência, a frenagem e o controle em curvas. Existem vários tipos de suspensão — como independente, McPherson e multilink — mas todas trabalham para equilibrar conforto, estabilidade e desempenho.
                      </Text>
                    )}
                  </View>

                </View>
              )}
            </View>
          </TouchableOpacity>

        </View>

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

  /* GRID DOS CARDS PARA WEB */
  cardsGrid: {
    width: "100%",
    flexDirection: Platform.OS === "web" ? "row" : "column",
    flexWrap: Platform.OS === "web" ? "wrap" : "nowrap",
    justifyContent: Platform.OS === "web" ? "space-between" : "center",
  },

  cardWrapper: {
    width: Platform.OS === "web" ? "48%" : "100%",
    marginBottom: 18,
  },

  card: {
    backgroundColor: "#141b2d",
    borderRadius: 16,
    padding: 18,
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
    fontSize: 15,
    lineHeight: 22,
    marginTop: 8,
    maxWidth: "100%",
  },

  moreBtn: {
    color: "#4da6ff",
    marginTop: 6,
    marginBottom: 10,
    fontWeight: "bold",
  },

  icon: {
    marginBottom: 10,
  },

  imageWeb: {
    width: Platform.OS === "web" ? 280 : "100%",
    height: Platform.OS === "web" ? 190 : 310,
    borderRadius: 14,
    resizeMode: "cover",
    marginRight: 16,
    marginTop: 12,
  },

  contentRow: {
    flexDirection: Platform.OS === "web" ? "row" : "column",
    gap: 20,
    alignItems: "flex-start",
    width: "100%",
  },

  textWrapper: {
    flex: 1,
    minWidth: 0,
  },

});
