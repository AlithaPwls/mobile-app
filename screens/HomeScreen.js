import React from "react"; //om react componenten te kunnen gebruiken
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from "react-native"; //importeren van de nodige onderdelen

const HomeScreen = ({ navigation }) => { //navigation prop uit de standaardprops halen
  return (
    <ImageBackground 
      source={require("../images/ca5d84547a90bcb5b1be629b7a2cb85b.jpg")} 
      style={styles.container}
      resizeMode="cover" //bgi instellen
    >
      <Text style={styles.heading}>Welcome</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Products")} //navigate naar Products scherm
      >
        <Text style={styles.buttonText}>Products</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Blogposts")} //navigate naar Blogposts scherm
      >
        <Text style={styles.buttonText}>Blogposts</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Contact")} //navigate naar Contact scherm
      >
        <Text style={styles.buttonText}>Contact</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({ //stijlen of opmaak maken zoals css maar dan in javascript
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

export default HomeScreen; //zorg ervoor dat andere pagina's dit kunnen importeren