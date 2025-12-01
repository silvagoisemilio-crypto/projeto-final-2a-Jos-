import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View, ScrollView, Platform } from "react-native";
import foto from "../assets/foto.jpg";

export default function AboutMe() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      
      <View style={styles.contentRow}>

        {/* FOTO */}
        <View style={styles.photoContainer}>
          <View style={styles.backgroundCard} />
          <Image source={foto} style={styles.photo} />
        </View>

        {/* TEXTOS */}
        <View style={styles.textContainer}>
          <Text style={styles.who}>Me chamo José</Text>

          <Text style={styles.hello}>
            Prazer <Text style={styles.highlight}></Text>
          </Text>

          <Text style={styles.description}>
            Sou um cara que aprende fazendo. Sempre fui movido por curiosidade e pelo desejo de evoluir rápido, 
            seja programando, estudando ou construindo projetos do zero. Gosto de desafios, gosto de entender 
            como as coisas funcionam e não tenho medo de quebrar e refazer quantas vezes for preciso. 
            Estou constantemente melhorando — tanto nas minhas habilidades quanto na pessoa que quero me tornar. 
            Tudo o que faço hoje é parte do caminho para algo maior.
          </Text>
        </View>

      </View>

      <StatusBar style="light" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: "100%",
    padding: 20,
    backgroundColor: "#0d0d0f", // fundo futurista escuro
    alignItems: "center",
    justifyContent: "center", // CENTRALIZA VERTICALMENTE
  },

  /** CONTAINER EM LINHA **/
  contentRow: {
    flexDirection: Platform.OS === "web" ? "row" : "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    gap: 50,
    marginTop: Platform.OS === "web" ? 0 : 40,
  },

  /** FOTO **/
  photoContainer: {
    width: Platform.OS === "web" ? 320 : "100%",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },

  backgroundCard: {
    width: 230,
    height: 260,
    backgroundColor: "#0a0a0c", // preto elegante
    borderRadius: 10,
    position: "absolute",
    zIndex: 0,
    left: 25,
    top: 25,
    borderWidth: 1,
    borderColor: "#00e1ff55", // borda neon suave
    shadowColor: "#00e1ff",
    shadowOpacity: 0.4,
    shadowRadius: 20,
  },

  photo: {
    width: 230,
    height: 260,
    borderRadius: 10,
    resizeMode: "cover",
    zIndex: 2,
  },

  /** TEXTOS **/
  textContainer: {
    maxWidth: 520,
    paddingHorizontal: 10,
    alignItems: Platform.OS === "web" ? "flex-start" : "center",
  },

  who: {
    fontSize: 18,
    color: "#8f9bb3", // cinza futurista
    letterSpacing: 1,
  },

  hello: {
    fontSize: 42,
    fontWeight: "bold",
    color: "#e6e6e6",
    marginTop: 5,
  },

  highlight: {
    backgroundColor: "#00e1ff", // neon azul
  },

  description: {
    marginTop: 15,
    fontSize: 16,
    lineHeight: 24,
    color: "#c7c7c7",
    textAlign: Platform.OS === "web" ? "left" : "center",
  },
});
