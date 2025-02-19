import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from "react-native";
import ProductCard from "../components/ProductCard"; 



const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>The Collection</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("ProductDetails")}>
        <Text style={styles.buttonText}>Bekijk Details</Text>
      </TouchableOpacity>


      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.row}>
          {[...Array(8)].map((_, index) => (
            <ProductCard key={index} navigation={navigation} />
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

export default HomeScreen;
