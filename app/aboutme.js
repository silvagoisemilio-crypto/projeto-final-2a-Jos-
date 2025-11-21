import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View, ScrollView, Platform } from "react-native";
import foto from "../assets/foto.png";

export default function AboutMe() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      
      <View style={styles.photoContainer}>
        <View style={styles.backgroundCard} />
        <Image source={foto} style={styles.photo} />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.who}>Me chamo José</Text>

        <Text style={styles.hello}>
          Prazer <Text style={styles.highlight}> </Text>
        </Text>

        <Text style={styles.description}>
          Sou um cara que aprende fazendo. Sempre fui movido por curiosidade e pelo desejo de evoluir rápido, seja programando, estudando ou construindo projetos do zero. Gosto de desafios, gosto de entender como as coisas funcionam e não tenho medo de quebrar e refazer quantas vezes for preciso. Estou constantemente melhorando — tanto nas minhas habilidades quanto na pessoa que quero me tornar. Tudo o que faço hoje é parte do caminho para algo maior.
        </Text>
      </View>

      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#f2f2f2",
    alignItems: "center",
  },

  /* ÁREA DA FOTO */
  photoContainer: {
    marginTop: 40,
    width: Platform.OS === "web" ? 350 : "100%",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },

  backgroundCard: {
    width: 230,
    height: 260,
    backgroundColor: "#1d1d1d",
    position: "absolute",
    borderRadius: 6,
    zIndex: 0,

    /* Ajustes diferentes para cada plataforma */
    left: Platform.OS === "web" ? 0 : 20,
    top: Platform.OS === "web" ? 0 : 20,
  },

  photo: {
    width: 230,
    height: 260,
    resizeMode: "cover",
    zIndex: 2,
    borderRadius: 6,
  },

  /* TEXTOS */
  textContainer: {
    marginTop: 40,
    width: Platform.OS === "web" ? 500 : "90%",
    alignItems: Platform.OS === "web" ? "center" : "flex-start",
  },

  who: {
    fontSize: 16,
    color: "#333",
    textTransform: "lowercase",
  },

  hello: {
    fontSize: 40,
    fontWeight: "bold",
    marginTop: 5,
  },

  highlight: {
    backgroundColor: "#f6e312",
  },

  description: {
    marginTop: 15,
    fontSize: 15,
    lineHeight: 22,
    color: "#444",
    textAlign: Platform.OS === "web" ? "center" : "left",
  },
});
