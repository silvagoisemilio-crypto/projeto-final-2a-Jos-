import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from "react-native";

export default function Inicio() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 40 }}>
      
      {/* HERO */}
      <View style={styles.hero}>
        <Text style={styles.heroTitle}>Projeto de Desenvolvimento Web</Text>

        <Text style={styles.heroText}>
          Este projeto foi desenvolvido com o objetivo de criar uma experiência 
          interativa utilizando HTML, CSS e JavaScript. Ele aborda dois temas 
          complementares: Engenharia Automotiva (tema obrigatório) e a adrenalina 
          da Fórmula 1 (tema livre). O foco é apresentar conceitos, componentes 
          e curiosidades do universo automotivo de forma visual e acessível.
        </Text>
      </View>

      {/* CARDS */}
      <View style={styles.cardsContainer}>

        {/* CARD 1 */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Tema Obrigatório: Carros</Text>
          <Text style={styles.cardText}>
            Explore o funcionamento interno de um veículo: motor, suspensão, direção,
            eletrônica, carroceria e muito mais. Interaja com os componentes e veja
            informações detalhadas.
          </Text>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Explorar Engenharia Automotiva</Text>
          </TouchableOpacity>
        </View>   
        {/* CARD 2 */}
        <View style={[styles.card, styles.cardAccent]}>
          <Text style={[styles.cardTitle, styles.accentText]}>Tema Livre: Fórmula 1</Text>
          <Text style={styles.cardText}>
            A Fórmula 1 representa o ápice da velocidade, tecnologia e engenharia.
            Descubra aerodinâmica, pneus, estratégias de corrida e o que torna esses carros tão rápidos.
          </Text>

          <TouchableOpacity style={[styles.button, styles.buttonAccent]}>
            <Text style={[styles.buttonText, styles.accentText]}>Conhecer a Fórmula 1</Text>
          </TouchableOpacity>
        </View>

      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0A0A0A",
  },

  /* HERO */
  hero: {
    padding: 24,
    backgroundColor: "#111",
    marginBottom: 20,
  },
  heroTitle: {
    color: "#e8e8e8",
    fontSize: 26,
    fontWeight: "700",
    marginBottom: 10,
  },
  heroText: {
    color: "#c5c5c5",
    fontSize: 16,
    lineHeight: 22,
  },

  /* CARDS */
  cardsContainer: {
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: "#1a1a1a",
    padding: 18,
    borderRadius: 14,
    marginBottom: 20,
  },
  cardAccent: {
    borderColor: "#00A6FB",
    borderWidth: 2,
  },
  cardTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 8,
  },
  cardText: {
    color: "#cfcfcf",
    fontSize: 15,
    lineHeight: 20,
    marginBottom: 16,
  },

  /* BOTÕES */
  button: {
    borderWidth: 1,
    borderColor: "#fff",
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonAccent: {
    borderColor: "#00A6FB",
  },
  buttonText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "600",
  },

  /* TEXTOS ACENTUADOS */
  accentText: {
    color: "#00A6FB",
  },
});
