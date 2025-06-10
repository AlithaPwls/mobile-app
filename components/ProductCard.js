import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const ProductCard = ({ title, description, price, image, onPress, showButton = true }) => {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.price}>{price}</Text>

      {showButton && (
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={styles.buttonText}>View details</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    width: "80%",
    paddingVertical: 20,
    paddingHorizontal: 20,
    alignItems: "flex-start",
    marginBottom: 15,
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
