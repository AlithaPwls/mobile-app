import React from "react";
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from "react-native";

const Cart = ({ route, navigation }) => {
  const { cartItem } = route.params || {}; 

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Your Cart</Text>
      <ScrollView contentContainerStyle={styles.cartList}>
        {cartItem ? (
          <View style={styles.cartItem}>
            <Image source={cartItem.image} style={styles.image} />
            <View style={styles.itemInfo}>
              <Text style={styles.title}>{cartItem.title}</Text>
              <Text style={styles.quantity}>Quantity: {cartItem.quantity}</Text>
              <Text style={styles.price}>Price per item: €{cartItem.price}</Text>
              <Text style={styles.totalPrice}>
                Total: €{(cartItem.quantity * cartItem.price).toFixed(2)}
              </Text>
            </View>
          </View>
        ) : (
          <Text style={styles.emptyText}>Your cart is empty.</Text>
        )}
      </ScrollView>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Products")}
      >
        <Text style={styles.buttonText}>Check out here</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dad3c5",
    padding: 20,
  },
  heading: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#3e2d22",
    marginBottom: 20,
    textAlign: "center",
  },
  cartList: {
    alignItems: "center",
  },
  emptyText: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
  },
  cartItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f5f3f1",
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#796f62",
    marginBottom: 15,
    width: "90%",
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 15,
  },
  itemInfo: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#3e2d22",
  },
  quantity: {
    fontSize: 14,
    color: "#666",
  },
  price: {
    fontSize: 14,
    color: "#666",
  },
  totalPrice: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#3e2d22",
    marginTop: 5,
  },
  buttonText: {
    backgroundColor: "#796f62",
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    paddingVertical: 20,
    borderRadius: 10,
    textAlign: "center",
    marginBottom: 20,
  },
});

export default Cart;
