import { Link, useRouter } from "expo-router";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Image } from "expo-image";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function DetailScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <Pressable style={styles.backButton} onPress={() => router.back()}>
        <Text style={styles.backText}>Back</Text>
      </Pressable>

      <Link.AppleZoomTarget>
        <Image
          source={{ uri: "https://picsum.photos/seed/zoom/400/300" }}
          style={styles.hero}
          contentFit="cover"
        />
      </Link.AppleZoomTarget>

      <View style={styles.content}>
        <Text style={styles.title}>Detail Screen</Text>
        <Text style={styles.body}>
          On iOS 26, the home screen behind this detail view has sharp corners
          during the zoom pushback. Native iOS apps show rounded corners (or no
          pushback at all).
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  backButton: {
    padding: 16,
  },
  backText: {
    fontSize: 16,
    color: "#007AFF",
  },
  hero: {
    width: "100%",
    height: 300,
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 12,
  },
  body: {
    fontSize: 14,
    color: "#666",
    lineHeight: 20,
  },
});
