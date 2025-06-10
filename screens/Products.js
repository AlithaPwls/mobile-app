import { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList } from "react-native";
import ProductCard from "../components/ProductCard";
import { Picker } from "@react-native-picker/picker";

const categoryNames = {
  "6845a9bbfa46f59ea747b4ec": "Small decorations",
  "6845a9d8b0467674094d1c07": "Ceramic",
  "6845aa11c123c7673859c5a8": "Textile",
  "6845a9fc5235a28c3a321503": "Art",
};

const Products = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    fetch("https://api.webflow.com/v2/sites/67a51acd25ca407c212b08fe/products?", {
      headers: {
        Authorization:
          "Bearer a7adff386b5cecfe1a0c9e0edc9fb88910f70f91b9bd6a18d522b8988546c0c5",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Volledige API Data:", JSON.stringify(data, null, 2));

        const mapped = data.items.map((item) => {
          const categoryRaw = item.product.fieldData.category;
          const categoryId = Array.isArray(categoryRaw) && categoryRaw.length > 0 ? categoryRaw[0] : "";
          console.log("Product:", item.product.fieldData.name, "Category ID:", categoryId);

          return {
            id: item.product.id,
            title: item.product.fieldData.name,
            description: item.product.fieldData.description,
            image: {
              uri:
                item.skus[0]?.fieldData["main-image"]?.url ||
                "https://via.placeholder.com/150",
            },
            price: (item.skus[0]?.fieldData.price.value || 0) / 100,
            categoryId: categoryId,
            categoryName: categoryNames[categoryId] || "Unknown category",
          };
        });

        setProducts(mapped);
      })
      .catch((err) => console.error("Error:", err));
  }, []);

  const filteredProducts = selectedCategory
    ? products.filter((product) => String(product.categoryId) === String(selectedCategory))
    : products;

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Products</Text>

      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={selectedCategory}
          onValueChange={(value) => {
            console.log("Selected Category ID:", value);
            setSelectedCategory(value);
          }}
          style={styles.picker}
        >
          <Picker.Item label="All categories" value="" />
          {Object.entries(categoryNames).map(([id, name]) => (
            <Picker.Item key={id} label={name} value={id} />
          ))}
        </Picker>
      </View>

      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.listContainer}
        renderItem={({ item }) => (
          <ProductCard
            title={item.title}
            image={item.image}
            price={item.price}
            onPress={() => navigation.navigate("ProductDetails", item)}
          />
        )}
        columnWrapperStyle={{ justifyContent: "space-between" }}
      />

      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f3f1",
    paddingTop: 20,
  },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
    alignSelf: "center",
    color: "#796f62",
  },
  pickerContainer: {
    width: "60%",
    height: "15%",
    alignSelf: "center",
    backgroundColor: "white",
    borderRadius: 8,
    marginBottom: 20,
    elevation: 3,
    overflow: "hidden",
    zIndex: 1000,
  },
  picker: {
    width: "100%",
    height: 40,
    color: "#fff",
    backgroundColor: "white",
    paddingHorizontal: 0,
  },
  listContainer: {
    paddingBottom: 80,
    paddingHorizontal: 20,
  },
});


export default Products;
