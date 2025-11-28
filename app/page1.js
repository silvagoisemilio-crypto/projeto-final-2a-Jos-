import { StyleSheet, Text, View, ScrollView, SafeAreaView } from "react-native";

export default function Page() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <ScrollView contentContainerStyle={styles.container}>

        <Text style={styles.title}>Componentes de um Carro</Text>
        <Text style={styles.subtitle}>
          Veja como cada parte funciona e por que é importante.
        </Text>

        {/* SEÇÃO 1 */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>1. Chassi / Estrutura</Text>
          <Text style={styles.sectionText}>
            O chassi é a “espinha dorsal” do veículo. Nos carros modernos, ele é
            integrado à carroceria no formato monobloco. Ele sustenta o peso,
            mantém o formato e protege os ocupantes.
          </Text>
        </View>

        {/* SEÇÃO 2 */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>2. Motor</Text>
          <Text style={styles.sectionText}>
            O motor é a fonte de energia do carro. Pode ser a combustão,
            elétrico ou híbrido. Ele transforma combustível em movimento para
            impulsionar o veículo.
          </Text>
        </View>

        {/* SEÇÃO 3 */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>3. Transmissão</Text>
          <Text style={styles.sectionText}>
            A transmissão (câmbio) envia a potência do motor para as rodas,
            ajustando velocidade e torque. Pode ser manual, automática ou CVT.
          </Text>
        </View>

        {/* SEÇÃO 4 */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>4. Suspensão</Text>
          <Text style={styles.sectionText}>
            A suspensão mantém o carro estável, absorve impactos da pista e
            garante conforto. Inclui molas, amortecedores e braços de ligação.
          </Text>
        </View>

        {/* SEÇÃO 5 */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>5. Sistema de Direção</Text>
          <Text style={styles.sectionText}>
            Permite o motorista controlar o carro. A direção move as rodas
            dianteiras para orientar o veículo nas curvas.
          </Text>
        </View>

        {/* SEÇÃO 6 */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>6. Sistema de Freios</Text>
          <Text style={styles.sectionText}>
            Essencial para segurança. Os freios, a disco ou tambor, usam fluido
            hidráulico para desacelerar ou parar o veículo.
          </Text>
        </View>

        {/* SEÇÃO 7 */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>7. Sistema Elétrico</Text>
          <Text style={styles.sectionText}>
            Inclui bateria, alternador, sensores e módulos de controle. Alimenta
            luzes, som, injeção eletrônica e segurança.
          </Text>
        </View>

        {/* SEÇÃO 8 */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>8. Rodas e Pneus</Text>
          <Text style={styles.sectionText}>
            São o ponto de contato do carro com o solo. Influenciam tração,
            segurança, frenagem e estabilidade.
          </Text>
        </View>

        {/* Espaço para não cobrir a TabBar */}
        <View style={{ height: 120 }} />

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 22,
    paddingTop: 40,
  },

  title: {
    fontSize: 32,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 6,
  },

  subtitle: {
    fontSize: 15,
    textAlign: "center",
    opacity: 0.7,
    marginBottom: 26,
  },

  section: {
    backgroundColor: "#f2f2f2",
    padding: 18,
    borderRadius: 16,
    marginBottom: 18,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 6,
  },

  sectionText: {
    fontSize: 14,
    lineHeight: 20,
    opacity: 0.8,
  },
});
