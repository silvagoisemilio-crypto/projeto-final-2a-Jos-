// app/global.js
import { StyleSheet } from "react-native";

// 🎨 PALETA FUTURISTA
export const Colors = {
  background: "#0A0F1F",       // Fundo escuro futurista
  card: "#1E293B",             // Card azul metálico
  cardBorder: "rgba(56,189,248,0.3)", // Borda neon suave
  textPrimary: "#E2E8F0",      // Texto branco suave
  textSecondary: "#94A3B8",    // Cinza moderno
  neon: "#38BDF8",             // Azul neon principal
  neonStrong: "#0EA5E9",       // Azul neon forte
  danger: "#ef4444",           // Vermelho futurista
};

export const GlobalStyles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingHorizontal: 22,
    paddingTop: 28,
  },

  title: {
    fontSize: 32,
    fontWeight: "700",
    color: Colors.neon,
    marginBottom: 10,
    textAlign: "center",
  },

  subtitle: {
    fontSize: 18,
    color: Colors.textSecondary,
    textAlign: "center",
    marginBottom: 20,
  },

  text: {
    fontSize: 15,
    color: Colors.textPrimary,
    lineHeight: 22,
    textAlign: "center",
  },

  card: {
    width: "100%",
    backgroundColor: Colors.card,
    borderRadius: 20,
    padding: 20,
    borderWidth: 1.5,
    borderColor: Colors.cardBorder,
    marginBottom: 20,
    alignSelf: "center",

    // Efeito leve de brilho
    shadowColor: Colors.neonStrong,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 8,
  },

  cardText: {
    fontSize: 14,
    color: Colors.textPrimary,
    marginBottom: 16,
    textAlign: "center",
  },

  button: {
    backgroundColor: Colors.neonStrong,
    paddingVertical: 12,
    borderRadius: 30,
    alignItems: "center",

    shadowColor: Colors.neon,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 6,
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
});
