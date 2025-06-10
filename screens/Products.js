import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import ProductCard from "../components/ProductCard";

const Products = ({ navigation }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://api.webflow.com/v2/sites/67a51acd25ca407c212b08fe/products?", {
      headers: {
        Authorization:
          "Bearer a7adff386b5cecfe1a0c9e0edc9fb88910f70f91b9bd6a18d522b8988546c0c5",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        const mapped = data.items.map((item) => ({
          id: item.product.id,
          title: item.product.fieldData.name,
          description: item.product.fieldData.description || "No description available.",
          image: {
            uri: item.skus[0]?.fieldData["main-image"]?.url || "https://via.placeholder.com/150",
          },
          price: (item.skus[0]?.fieldData.price.value || 0) / 100,
        }));
        setProducts(mapped);
      })
      .catch(console.error);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Products</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.listContainer}
        renderItem={({ item }) => (
          <ProductCard
            title={item.title}
            image={item.image}
            price={item.price}
            onPress={() => navigation.navigate("ProductDetails", { product: item })}
          />
        )}
        columnWrapperStyle={{ justifyContent: "space-between" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f3f1",
    padding: 16,
  },
  heading: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 16,
    color: "#796f62",
  },
  listContainer: {
    paddingBottom: 80,
  },
});

export default Products;
