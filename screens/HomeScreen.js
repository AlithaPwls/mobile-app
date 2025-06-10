import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <ImageBackground 
      source={require("../images/ca5d84547a90bcb5b1be629b7a2cb85b.jpg")} 
      style={styles.container}
      resizeMode="cover"
    >
      <Text style={styles.heading}>Welcome</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Products")}
      >
        <Text style={styles.buttonText}>Products</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Blogposts")}
      >
        <Text style={styles.buttonText}>Blogposts</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Contact")}
      >
        <Text style={styles.buttonText}>Contact</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  heading: {
    fontSize: 45,
    fontWeight: "900",
    color: "#f5f3f1",
    marginBottom: 50,
    padding: 15,
    borderRadius: 8,
  },
  button: {
    backgroundColor: "#796f62",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 8,
    marginBottom: 20,
    alignItems: "center",
    width: "80%",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default HomeScreen;