import { Link } from "expo-router";
import { View, Pressable, Text, StyleSheet } from "react-native";
import { Image } from "expo-image";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function HomeScreen() {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top + 20 }]}>
      <Text style={styles.title}>Zoom Transition Repro</Text>
      <Text style={styles.subtitle}>
        Tap the card below. On iOS 26, the source screen pushes back with sharp
        corners. In native iOS apps, zoom transitions do NOT push back the
        source screen.
      </Text>

      <Link href="/detail" asChild>
        <Link.AppleZoom>
          <Pressable style={styles.card}>
            <Image
              source={{ uri: "https://picsum.photos/seed/zoom/400/300" }}
              style={styles.image}
              contentFit="cover"
            />
            <Text style={styles.cardText}>Tap to zoom</Text>
          </Pressable>
        </Link.AppleZoom>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: "#666",
    marginBottom: 24,
    lineHeight: 20,
  },
  card: {
    borderRadius: 16,
    overflow: "hidden",
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  image: {
    width: "100%",
    height: 200,
  },
  cardText: {
    padding: 16,
    fontSize: 16,
    fontWeight: "600",
  },
});
