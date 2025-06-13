import React from "react";
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from "react-native";

const Cart = ({ cartItems, navigation, clearCart, addOrder }) => { 
  const updateQuantity = (productId, delta) => { // Verhoog of verlaag de hoeveelheid van een product in de winkelwagen
    const index = cartItems.findIndex((item) => item.id === productId); // Vind de index van het product in de winkelwagen
    if (index !== -1) { // Product gevonden
      const newQuantity = Math.max(1, cartItems[index].quantity + delta); // Zorg ervoor dat de hoeveelheid niet onder 1 gaat
      cartItems[index].quantity = newQuantity; // Update de hoeveelheid van het product
      navigation.setParams({}); // Forceer een refresh van het scherm om de bijgewerkte hoeveelheid weer te geven
    }
  };

  const totalCartPrice = cartItems // Bereken de totale prijs van alle producten in de winkelwagen
    .reduce((sum, item) => sum + item.price * item.quantity, 0) 
    .toFixed(2); // Formatteer de totale prijs naar 2 decimalen

  const handleCheckout = () => { // Verwerk de checkout
    addOrder(cartItems); // Voeg de huidige winkelwagen toe aan de lijst van bestellingen
    clearCart(); // Maak de winkelwagen leeg na de bestelling
    navigation.navigate("Confirmation", { orderedProducts: cartItems, total: totalCartPrice }); // Navigeer naar het bevestigingsscherm met de bestelde producten en totale prijs
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Your Cart</Text>
      {cartItems.length === 0 ? ( // Controleer of de winkelwagen leeg is
        <Text style={styles.empty}>Your cart is empty.</Text>
      ) : (
        <>
          <FlatList // Render de producten in de winkelwagen
            data={cartItems} // De lijst van producten in de winkelwagen
            keyExtractor={(item, index) => `${item.id}-${index}`} // Gebruik een unieke key voor elk item
            renderItem={({ item }) => ( // Render elk product als een kaart
              <View style={styles.productCard}>
                <Image source={item.image} style={styles.image} />
                <View style={styles.info}>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.price}>
                     €{item.price} x {item.quantity} = €{(item.price * item.quantity).toFixed(2)}
                  </Text>

                  <View style={styles.quantityContainer}>
                    <TouchableOpacity
                      onPress={() => updateQuantity(item.id, -1)}
                      style={styles.quantityButton}
                    >
                      <Text style={styles.quantityText}>-</Text>
                    </TouchableOpacity>
                    <Text style={styles.quantity}>{item.quantity}</Text>
                    <TouchableOpacity
                      onPress={() => updateQuantity(item.id, 1)}
                      style={styles.quantityButton}
                    >
                      <Text style={styles.quantityText}>+</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            )}
          />

          <Text style={styles.total}>Total: €{totalCartPrice}</Text>

          <TouchableOpacity
            style={[
              styles.button,
              cartItems.length === 0 && { opacity: 0.5 } // Maak de knop grijs als de winkelwagen leeg is
            ]}
            onPress={handleCheckout}
            disabled={cartItems.length === 0} // Deactiveer de knop als de winkelwagen leeg is
          >
            <Text style={styles.buttonText}>Check out here</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: "#f5f3f1", 
    padding: 20 
  },
  heading: { 
    fontSize: 24, 
    fontWeight: "bold", 
    marginBottom: 20, 
    color: "#796f62", 
    textAlign: "center"
  },
  productCard: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: "center",
  },
  image: { 
    width: 60, 
    height: 60, 
    borderRadius: 8, 
    marginRight: 10 
  },
  info: { 
    flex: 1 
  },
  title: { 
    fontSize: 16, 
    fontWeight: "bold" 
  },
  price: { 
    fontSize: 14, 
    color: "#3e2d22", 
    marginBottom: 5 
  },
  quantityContainer: { 
    flexDirection: "row", 
    alignItems: "center" 
  },
  quantityButton: {
    backgroundColor: "#796f62",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 50,
  },
  quantityText: { 
    color: "#fff", 
    fontSize: 18, 
    fontWeight: "bold" 
  },
  quantity: { 
    fontSize: 16, 
    marginHorizontal: 10 
  },
  total: { 
    fontSize: 20, 
    fontWeight: "bold", 
    marginVertical: 20, 
    color: "#3e2d22", 
    textAlign: "center" 
  },
  empty: { 
    fontSize: 16,
    color: "#999", 
    marginBottom: 20, 
    textAlign: "center" 
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

export default Cart;
