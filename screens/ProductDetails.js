import React, { useState } from "react"; //om aantal stukken te kunnen bijhouden
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from "react-native";

const ProductDetails = ({ route, navigation, addToCart }) => { // Haal de route en navigation props op
  const { product } = route.params; // Haal het product op uit de route parameters
  const [quantity, setQuantity] = useState(1); // Stel de initiële hoeveelheid in op 1

  const handleAddToCart = () => { // Functie om het product toe te voegen aan de winkelwagen
    const productWithQuantity = { ...product, quantity }; // Voeg de hoeveelheid toe aan het product object
    addToCart(productWithQuantity); // Roep de addToCart functie aan die is doorgegeven als prop
    navigation.navigate("Cart"); // Navigeer naar het winkelwagen scherm na het toevoegen
  };

  const totalPrice = (product.price * quantity).toFixed(2); // Bereken de totale prijs op basis van de hoeveelheid en prijs van het product

  return (
    <ScrollView contentContainerStyle={styles.container}> 
<Text style={styles.title}>{String(product.title)}</Text>
{product.image?.uri ? (
  <Image source={{ uri: product.image.uri }} style={styles.image} />
) : (
  <Text style={{ color: "red" }}>Afbeelding niet beschikbaar</Text>
)}

<Text style={styles.price}>€{Number(product.price).toFixed(2)}</Text>

      <Text style={styles.description}>
  {typeof product.description === "string"
    ? product.description
    : "No description available."}
</Text>

      <View style={styles.quantityContainer}>
        <TouchableOpacity onPress={() => setQuantity(Math.max(1, quantity - 1))} style={styles.quantityButton}> 
          <Text style={styles.quantityText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.quantity}>{quantity}</Text>
        <TouchableOpacity onPress={() => setQuantity(quantity + 1)} style={styles.quantityButton}> 
          <Text style={styles.quantityText}>+</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.totalPrice}>Total: €{totalPrice}</Text>

      
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

export default ProductDetails; // Zorg ervoor dat dit bestand wordt geëxporteerd als de standaard export
