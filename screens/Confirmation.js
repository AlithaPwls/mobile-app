import React from "react";
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from "react-native";

const Confirmation = ({ route, navigation }) => {
  const { orderedProducts, total } = route.params; // Haal de bestelde producten en totale prijs op uit de route parameters

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Order Confirmation</Text>
      <Text style={styles.subtitle}>Thank you for your order!</Text>
      <FlatList
        data={orderedProducts} // De lijst van bestelde producten
        keyExtractor={(item, index) => `${item.id}-${index}`} // Gebruik een unieke key voor elk item
        renderItem={({ item }) => (
          <View style={styles.productCard}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.info}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.price}>
                €{item.price} x {item.quantity} = €{(item.price * item.quantity).toFixed(2)}
              </Text>
            </View>
          </View>
        )}
      />
      <Text style={styles.total}>Total: €{total}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("OrderHistory")}
      >
        <Text style={styles.buttonText}>order history</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Products")}
      >
        <Text style={styles.buttonText}>Back to Products</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: "#f5f3f1", 
    padding: 20 
},
  heading: { fontSize: 24, 
    fontWeight: "bold", 
    marginBottom: 20, 
    color: "#796f62", 
    textAlign: "center" 
},
  subtitle: { 
    fontSize: 16, 
    marginBottom: 20, 
    textAlign: "center", 
    color: "#3e2d22" 
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
  buttonText: { 
    color: "#fff", 
    fontSize: 16, 
    fontWeight: "bold", 
    textAlign: "center" 
},
  button: { 
    backgroundColor: "#796f62", 
    paddingVertical: 10, 
    paddingHorizontal: 20, 
    borderRadius: 5,
    marginTop: 20 
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
    color: "#3e2d22" 
},
  total: { 
    fontSize: 20, 
    fontWeight: "bold", 
    marginVertical: 20, 
    color: "#3e2d22", 
    textAlign: "center" 
},
});

export default Confirmation;
