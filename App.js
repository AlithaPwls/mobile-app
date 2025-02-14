import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import ProductCard from "./components/ProductCard";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>The Collection</Text>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.row}>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eae3c8", 
    alignItems: "center",
    paddingTop: 50,
  },
  header: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#3e2d22",
  },
  scrollContainer: {
    margin: "auto",
    paddingBottom: 50, 
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    width: "90%",
    gap: 7, 
  },
});
