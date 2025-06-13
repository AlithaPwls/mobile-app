import React from "react";
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from "react-native";

const OrderHistory = ({ orders, navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Order History</Text>
      {orders.length === 0 ? ( //kijk of er orders zijn
        <Text style={styles.empty}>No orders yet.</Text>
      ) : (
        <FlatList
          data={orders.flat()} // flatten array of arrays
          keyExtractor={(item, index) => item.id + "-" + index}
          renderItem={({ item }) => ( // render de items in de lijst
            <View style={styles.productCard}>
              <Image source={item.image} style={styles.image} />
              <View style={styles.info}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.price}>€{item.price}</Text>
              </View>
            </View>
          )}
        />
      )}
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
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#796f62",
    textAlign: "center",
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
    marginRight: 10,
  },
  info: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  price: {
    fontSize: 14,
    color: "#3e2d22",
  },
  empty: {
    fontSize: 16,
    color: "#999",
    textAlign: "center",
  },
  button: {
    backgroundColor: "#796f62",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 20,
    alignItems: "center",
  },
  buttonText: { 
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default OrderHistory;
