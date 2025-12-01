// Page2.js
import React from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
  Platform,
} from "react-native";

// Importar imagens no topo para garantir carregamento correto no mobile
import drsImage from "../assets/drs.png";
import ftImage from "../assets/ft.jpg";
import pneuImage from "../assets/pneu.png";
import volanteImage from "../assets/volante.png";
import freioImage from "../assets/freio.png";

export default function Page2() {
  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView contentContainerStyle={styles.container}>
        
        {/* HEADER */}
        <View style={styles.header}>
          <Text style={styles.headline}>
            Curiosidades e tecnologia dos carros de Fórmula 1
          </Text>

          <Text style={styles.lead}>
            Entenda DRS, aerodinâmica, pneus, freios e a tecnologia por trás dos
            volantes — explicado com imagens e textos no estilo de uma matéria.
          </Text>
        </View>

        {/* SEÇÕES */}
        <ArticleSection
          title="O que é o DRS?"
          subtitle="Como e quando ele é usado nas corridas"
          image={drsImage}
          paragraphs={[
            "DRS (Drag Reduction System) é um sistema que altera a asa traseira para reduzir arrasto aerodinâmico e aumentar a velocidade em retas.",
            "Ele só pode ser acionado em zonas específicas da pista e quando o piloto está a menos de 1 segundo do carro à frente.",
            "O ganho pode variar entre 10 e 20 km/h dependendo do circuito.",
          ]}
        />

        <ArticleSection
          title="Aerodinâmica: como 'colar' o carro no chão"
          subtitle="Asas, difusores e o piso — o que realmente importa"
          image={ftImage}
          imageLeft={false}
          paragraphs={[
            "A aerodinâmica é essencial para gerar downforce e manter o carro grudado ao solo.",
            "Quanto mais downforce, mais rápida é a curva — mas menor é a velocidade de reta.",
            "Um carro de F1 gera tanta força aerodinâmica que poderia andar de cabeça para baixo em um túnel.",
          ]}
        />

        <ArticleSection
          title="Por que os pneus de F1 se desgastam tão rápido?"
          subtitle="Compostos, temperatura e estratégia"
          image={pneuImage}
          paragraphs={[
            "Os pneus têm compostos extremamente macios para gerar aderência máxima.",
            "Cada composto funciona melhor dentro de uma faixa de temperatura específica.",
            "A estratégia de corrida gira em torno do desgaste e gerenciamento de temperatura.",
          ]}
        />

        <ArticleSection
          title="O volante de F1: painel de controle completo"
          subtitle="Mais que direção — ajustes, telas e comunicação"
          image={volanteImage}
          imageLeft={false}
          paragraphs={[
            "Os volantes possuem dezenas de botões, seletores e modos de controle.",
            "Pilotos ajustam configurações enquanto aceleram a mais de 300 km/h.",
            "Cada volante é completamente personalizado para cada piloto.",
          ]}
        />

        <ArticleSection
          title="Freios: desaceleração brutal e controle térmico"
          subtitle="Discos de carbono e forças de mais de 5G"
          image={freioImage}
          paragraphs={[
            "Os freios operam acima de 1000°C usando discos de carbono.",
            "Um Fórmula 1 pode reduzir de 300 km/h para 0 em menos de 4 segundos.",
            "Superaquecimento pode causar perda de performance e até falha total.",
          ]}
        />

        <View style={{ height: 60 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

/* ---------------------- COMPONENTE ---------------------- */

function ArticleSection({ title, subtitle, image, imageLeft = true, paragraphs }) {
  const isWeb = Platform.OS === "web";

  return (
    <View
      style={[
        styles.section,

        // WEB → estilo notícia
        isWeb && { 
          backgroundColor: "transparent",
          borderWidth: 0,
          padding: 0,
          flexDirection: imageLeft ? "row" : "row-reverse",
        },

        // MOBILE → tudo vertical
        !isWeb && {
          flexDirection: "column",
          backgroundColor: "transparent",
          borderWidth: 0,
          paddingBottom: 0,
        }
      ]}
    >
      {/* TEXTO */}
      <View style={styles.sectionContent}>
        <Text style={styles.sectionTitle}>{title}</Text>
        <Text style={styles.sectionSubtitle}>{subtitle}</Text>

        {paragraphs.map((p, i) => (
          <Text key={i} style={styles.sectionParagraph}>
            {p}
          </Text>
        ))}
      </View>

      <Image
        source={image}
        style={isWeb ? styles.sectionImageWeb : styles.sectionImageMobile}
        resizeMode="cover"
      />
    </View>
  );
}

/* ---------------------- ESTILOS ---------------------- */

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#0a0f24",
  },

  container: {
    alignItems: "center",
    paddingVertical: 40,
    paddingHorizontal: Platform.OS === "web" ? 80 : 22,
    maxWidth: 1100,
    alignSelf: "center",
  },

  header: {
    width: "100%",
    marginBottom: 32,
  },

  headline: {
    fontSize: Platform.OS === "web" ? 52 : 30,
    fontWeight: "900",
    color: "#e2e8ff",
    textAlign: Platform.OS === "web" ? "left" : "center",
  },

  lead: {
    fontSize: Platform.OS === "web" ? 18 : 16,
    color: "#b8c0ff",
    textAlign: Platform.OS === "web" ? "left" : "center",
    marginBottom: 40,
  },

  /* SECTION */
  section: {
    width: "100%",
    marginBottom: 40,
  },

  /* WEB */
  sectionImageWeb: {
    width: 480,
    height: 300,
    borderRadius: 6,
    marginHorizontal: 20,
  },

  /* MOBILE — corrigido com tamanho fixo */
  sectionImageMobile: {
    width: 360,
    height: 240,
    alignSelf: "center",
    borderRadius: 8,
    marginTop: 10,
    marginBottom: 25,
  },

  sectionContent: {
    flex: 1,
    paddingHorizontal: 10,
  },

  sectionTitle: {
    fontSize: Platform.OS === "web" ? 26 : 22,
    fontWeight: "800",
    color: "#f0f4ff",
    marginBottom: 6,
  },

  sectionSubtitle: {
    fontSize: Platform.OS === "web" ? 18 : 15,
    color: "#8aa0ff",
    marginBottom: 12,
  },

  sectionParagraph: {
    fontSize: Platform.OS === "web" ? 16 : 15,
    color: "#d6d9ff",
    lineHeight: 22,
    marginBottom: 12,
  },
});

