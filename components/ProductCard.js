import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const ProductCard = ({ title, description, price, image, onPress, showButton = true }) => { //component aanmaken
  return ( //eigenschappen of props meegeven aan de productcard
    <View style={styles.card}>
            <Text style={styles.title}>{title}</Text>

      <Image source={image} style={styles.image} />
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.price}>€{price}</Text>

      {showButton && ( //toon knop enkel als showButton true is
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={styles.buttonText}>View details</Text> 
        </TouchableOpacity> //onpress in de functie die wordt uitgevoerd als je op de knop drukt
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    width: "45%",
    marginVertical: 10,
    padding: 20,
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 150,
    borderRadius: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 10,
    textAlign: "center",
  },
  description: {
    fontSize: 9,
    color: "#666",
    marginVertical: 5,
  },
  price: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#3e2d22",
  },
  button: {
    backgroundColor: "#796f62",
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

export default ProductCard; //maakt component beschikbaar voor andere bestanden
