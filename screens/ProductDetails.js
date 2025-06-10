import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react"; // ✅ Correcte import
import ProductCard from "../components/ProductCard"; 
import { Image } from "react-native"; // Voeg dit toe bovenaan



const ProductDetails = ({ route, navigation }) => {
  const { title, description, price, image } = route.params; 
  const [quantity, setQuantity] = useState(1); 

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const totalPrice = price * quantity;

  return (
<View style={styles.container}>
  <ScrollView contentContainerStyle={styles.scrollContainer}>
    <Text style={styles.title}>{title}</Text>
    <Image source={image} style={styles.image} />
    <Text style={styles.description}>{description}</Text>
    <Text style={styles.price}>€{price}</Text>

    <View style={styles.quantityContainer}>
      <TouchableOpacity onPress={decreaseQuantity} style={styles.quantityButton}>
        <Text style={styles.quantityText}>-</Text>
      </TouchableOpacity>

      <Text style={styles.quantity}>{quantity}</Text>

      <TouchableOpacity onPress={increaseQuantity} style={styles.quantityButton}>
        <Text style={styles.quantityText}>+</Text>
      </TouchableOpacity>

 
    </View>    
        <Text style={styles.totalPrice}>Total: €{totalPrice.toFixed(2)}</Text>

    <TouchableOpacity style={styles.addToCartButton} onPress={() =>
      navigation.navigate("Cart", {
        cartItem: {
          id: route.params.id,
          title,
          image,
          quantity,
          price,
        },
      })
    }>
       <Text style={styles.addToCartButtonText}>Add to Cart</Text>
      </TouchableOpacity>
  </ScrollView>

  <StatusBar style="auto" />
</View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f3f1",
    paddingTop: 20,
  },

  scrollContainer: {
    backgroundColor: "#f5f3f1",
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 80,
    
    },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#796f62",
    marginTop: 10,
    marginBottom: 50,
  },

  image: {
    width: "80%",     // of een andere breedte die past
    height: 400,      // of een andere hoogte
    borderRadius: 10,
    marginBottom: 15,
  },
  
  description: {
    fontSize: 16,
    color: "#666",
    width: "80%", // Zorg ervoor dat de beschrijving niet te breed is
    marginVertical: 5,
  },
  price: {
    marginTop: 20,
    marginBottom: 20,
    fontSize: 18,
    fontWeight: "bold",
    color: "#3e2d22",
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    gap: 10,
  },
  quantityButton: {
    backgroundColor: "#796f62",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 50,
  },
  quantityText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  quantity: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#3e2d22",
  },
  totalPrice: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#3e2d22",
    marginVertical: 50,

  },
  addToCartButton: {
    backgroundColor: "#796f62",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 30,
    width: "80%", // consistent met je image/description breedte
    alignItems: "center",
  },
  addToCartButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  
});

export default ProductDetails;
