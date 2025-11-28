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
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f6f7fb" }}>
      <ScrollView contentContainerStyle={styles.container} style={{ flex: 1 }}>
        <Text style={styles.title}>Bem-vindo 👋</Text>

        <Text style={styles.description}>
          Esta landing page foi criada para apresentar, de forma simples e visual,
          tudo o que você precisa saber sobre carros, Fórmula 1 e muito mais.
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

        {/* ESPAÇO PARA TAB BAR */}
        <View style={{ height: 120 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 25,
    alignItems: "center",
  },

  title: {
    fontSize: 36,
    fontWeight: "800",
    marginBottom: 12,
    color: "#1a1a1a",
    textAlign: "center",
  },

  description: {
    fontSize: 15,
    textAlign: "center",
    lineHeight: 22,
    marginBottom: 28,
    color: "#444",
    paddingHorizontal: 8,
  },

  card: {
    width: "100%",
    backgroundColor: "#ffffff",
    padding: 22,
    borderRadius: 22,
    marginBottom: 22,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    elevation: 4,
  },

  cardHeader: {
    width: "100%",
    marginBottom: 12,
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#2a3d78",
  },

  cardText: {
    textAlign: "left",
    fontSize: 14,
    marginBottom: 18,
    color: "#555",
    lineHeight: 20,
  },

  button: {
    alignSelf: "center",
    width: "75%",
    backgroundColor: "#ff4141",
    paddingVertical: 12,
    borderRadius: 30,
    elevation: 3,
  },

  buttonText: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },
});
