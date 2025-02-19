import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const ProductCard = ({ navigation, showButton = true }) => {
  return (
    <View style={styles.card}>
      <Image source={require("../images/lamp.jpg")} style={styles.image} />
      <Text style={styles.title}>Beige Decoration Lamp</Text>
      <Text style={styles.description}>LED lights in one color</Text>
      
      {/* Knop alleen tonen als showButton true is */}
      {showButton && (
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("ProductDetails")}>
          <Text style={styles.buttonText}>Buy Now</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    width: "47%", 
    paddingVertical: 20,
    paddingHorizontal: 20,
    alignItems: "left",
    marginBottom: 15,
    marginRight: "1%",
  },
  image: {
    width: "100%",
    height: 150,
    borderRadius: 8,
  },
  title: {
    fontSize: 11,
    fontWeight: "bold",
    marginTop: 10,
    textAlign: "left",
  },
  description: {
    fontSize: 9,
    color: "#666",
    textAlign: "left",
    marginVertical: 5,
  },
  button: {
    backgroundColor: "#bea395",
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginTop: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default ProductCard;
