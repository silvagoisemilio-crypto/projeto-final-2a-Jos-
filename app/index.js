// app/index.js
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

export default function Index() {
  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Bem-vindo 👋</Text>

        <Text style={styles.description}>
          Esta landing page foi criada para apresentar, de forma simples e visual,
          tudo o que você precisa saber sobre carros, Fórmula 1 e muito mais de uma forma futuristica.
          Aproveite o conteúdo e navegue pelas páginas usando a barra inferior.
        </Text>

        {/* CARD 1 */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>Carro</Text>
          </View>

          <Text style={styles.cardText}>
            Nesta seção você vai descobrir como um carro realmente funciona.
            Vamos explorar estrutura, motor, transmissão, freios, suspensão,
            direção, sistema elétrico e muito mais — tudo explicado de forma
            simples e visual.
          </Text>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
        </View>

        {/* CARD 2 */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>F1</Text>
          </View>

          <Text style={styles.cardText}>
            Aqui você vai entrar no mundo da Fórmula 1: como funcionam os carros
            mais rápidos do planeta, curiosidades sobre aerodinâmica, estratégia,
            pneus, boxes, motores híbridos e tecnologias que nasceram nas pistas
            e vieram para os carros de rua.
          </Text>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
        </View>

        {/* Espaço para não cobrir a TabBar */}
        <View style={{ height: 120 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

/* ----------------  ESTILOS FUTURISTAS  ---------------- */

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#0a0f1f", // fundo futurista azul escuro
  },

  container: {
    paddingTop: 40,
    paddingHorizontal: 25,
    alignItems: "center",
  },

  title: {
    fontSize: 36,
    fontWeight: "800",
    marginBottom: 12,
    textAlign: "center",
    color: "#6bc1ff", // azul neon
    textShadowColor: "#00aaff",
    textShadowRadius: 12,
  },

  description: {
    fontSize: 15,
    textAlign: "center",
    lineHeight: 22,
    marginBottom: 28,
    paddingHorizontal: 8,
    color: "#b3d9ff",
  },

  card: {
    width: "100%",
    backgroundColor: "rgba(20, 25, 45, 0.7)",
    padding: 22,
    borderRadius: 22,
    marginBottom: 22,
    borderWidth: 1,
    borderColor: "rgba(0, 180, 255, 0.4)", // borda neon
    shadowColor: "#00c8ff",
    shadowOpacity: 0.3,
    shadowRadius: 15,
    shadowOffset: { width: 0, height: 0 },
  },

  cardHeader: {
    marginBottom: 12,
  },

  cardTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#7cd6ff",
    textShadowColor: "#009dff",
    textShadowRadius: 10,
  },

  cardText: {
    textAlign: "left",
    fontSize: 14,
    marginBottom: 18,
    color: "#d0e9ff",
    lineHeight: 20,
  },

  button: {
    alignSelf: "center",
    width: "75%",
    backgroundColor: "#ff0054",
    paddingVertical: 12,
    borderRadius: 30,
    shadowColor: "#ff2b75",
    shadowRadius: 12,
    shadowOpacity: 0.7,
    shadowOffset: { width: 0, height: 0 },
    borderWidth: 1,
    borderColor: "#ff4b8c",
  },

  buttonText: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "800",
    fontSize: 16,
  },
});
