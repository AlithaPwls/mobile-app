import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from "react-native";
import ProductCard from "../components/ProductCard"; // Check of het pad klopt!

const ProductDetails = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Product Details</Text>

      <TouchableOpacity>
        onPress={() => navigation.navigate("HomeScreen")}
        <Text style={styles.buttonText}>HomeScreen lol</Text>
        </TouchableOpacity> 


      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.row}>
          {/* Meerdere ProductCards weergeven */}
          {[...Array(8)].map((_, index) => (
            <ProductCard key={index} />
          ))}
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eae3c8",
    alignItems: "center",
    paddingTop: 20,
  },
  header: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#3e2d22",
  },
  scrollContainer: {
    paddingBottom: 50,
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    width: "90%",
    gap: 7,
  },
});

export default ProductDetails;
