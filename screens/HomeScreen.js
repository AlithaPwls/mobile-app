import { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import ProductCard from "../components/ProductCard"; 

const HomeScreen = ({ navigation }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.webflow.com/v2/sites/67a51acd25ca407c212b08fe/products?",
      {
        headers: {
          Authorization:
            "Bearer a7adff386b5cecfe1a0c9e0edc9fb88910f70f91b9bd6a18d522b8988546c0c5",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("Volledige API Data:", JSON.stringify(data, null, 2));
        setProducts(
          data.items.map((item) => ({
            id: item.product.id,
            title: item.product.fieldData.name,
            subtitle: item.product.fieldData.description,
            price: item.skus[0]?.fieldData["main-image"]?.url,
          }))
        );
      })
      .catch((err) => console.error("Error:", err));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Products</Text>
      <ScrollView style={styles.cardContainer}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            subtitle={product.subtitle}
            price={product.price}
            image={product.image}
            onPress={() => navigation.navigate("ProductDetails", product)}
          />
        ))}
      </ScrollView>
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
