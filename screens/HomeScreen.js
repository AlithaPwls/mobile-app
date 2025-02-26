import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import ProductCard from "../components/ProductCard"; 

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>The Collection</Text>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.row}>
          <ProductCard
            title="hallo lamp"
            description="een sfeervol lampje voor in de living"
            price="90"
            image={require("../images/lamp.jpg")}
            onPress={() => navigation.navigate("ProductDetails", {
              title: "hallo lamp",
              description: "een sfeervol lampje voor in de living",
              price: "90",
              image: require("../images/lamp.jpg"),
            })}
          />
          <ProductCard
            title="moderne stoel"
            description="comfortabele stoel"
            price="99"
            image={require("../images/lamp.jpg")}
            onPress={() => navigation.navigate("ProductDetails", {
              title: "moderne stoel",
              description: "comfortabele stoel",
              price: "99",
              image: require("../images/lamp.jpg"),
            })}
          />
          <ProductCard
            title="stijlvolle vaas"
            description="perfect voor decoratie"
            price="19"
            image={require("../images/lamp.jpg")}
            onPress={() => navigation.navigate("ProductDetails", {
              title: "stijlvolle vaas",
              description: "perfect voor decoratie",
              price: "19",
              image: require("../images/lamp.jpg"),
            })}
          />
          <ProductCard
            title="houten tafel"
            description="duurzame eettafel"
            price="550"
            image={require("../images/lamp.jpg")}
            onPress={() => navigation.navigate("ProductDetails", {
              title: "houten tafel",
              description: "duurzame eettafel",
              price: "550",
              image: require("../images/lamp.jpg"),
            })}
          />
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
