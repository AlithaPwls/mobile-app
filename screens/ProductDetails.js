import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from "react-native";

const ProductDetails = ({ route, navigation, addToCart }) => {
  const { product } = route.params;
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    const productWithQuantity = { ...product, quantity };
    addToCart(productWithQuantity);
    navigation.navigate("Cart");
  };

  const totalPrice = (product.price * quantity).toFixed(2);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{product.title}</Text>
      <Image source={product.image} style={styles.image} />

      <Text style={styles.price}>€{product.price}</Text>

      {/* Description */}
      <Text style={styles.description}>{product.description || "No description available."}</Text>

      {/* Aantal selector */}
      <View style={styles.quantityContainer}>
        <TouchableOpacity onPress={() => setQuantity(Math.max(1, quantity - 1))} style={styles.quantityButton}>
          <Text style={styles.quantityText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.quantity}>{quantity}</Text>
        <TouchableOpacity onPress={() => setQuantity(quantity + 1)} style={styles.quantityButton}>
          <Text style={styles.quantityText}>+</Text>
        </TouchableOpacity>
      </View>

      {/* Totaalprijs */}
      <Text style={styles.totalPrice}>Total: €{totalPrice}</Text>

      {/* Add to Cart knop */}
      <TouchableOpacity style={styles.button} onPress={handleAddToCart}>
        <Text style={styles.buttonText}>Add to Cart</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { 
    flexGrow: 1, 
    padding: 20,  
    paddingBottom: 100, // To ensure content is not cut off
    backgroundColor: "#f5f3f1",
  },
  image: { 
    width: "100%", 
    height: 300, 
    marginBottom: 20,
    borderRadius: 10,
  },
  title: { 
    fontSize: 24, 
    fontWeight: "bold", 
    marginBottom: 10, 
    textAlign: "center", 
    color: "#796f62",
  },
  price: { 
    fontSize: 20, 
    color: "#3e2d22", 
    marginBottom: 10 
  },
  description: {
    fontSize: 16,
    color: "#555",
    marginBottom: 20,
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  quantityButton: {
    backgroundColor: "#796f62",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 50,
  },
  quantityText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  quantity: {
    fontSize: 18,
    marginHorizontal: 20,
  },
  totalPrice: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#3e2d22",
  },
  button: {
    backgroundColor: "#796f62",
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ProductDetails;
