import { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList, TextInput } from "react-native";
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
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("price-asc");

  useEffect(() => {
    fetch("https://api.webflow.com/v2/sites/67a51acd25ca407c212b08fe/products?", {
      headers: {
        Authorization:
          "Bearer a7adff386b5cecfe1a0c9e0edc9fb88910f70f91b9bd6a18d522b8988546c0c5",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        const mapped = data.items.map((item) => {
          const categoryRaw = item.product.fieldData.category;
          const categoryId = Array.isArray(categoryRaw) && categoryRaw.length > 0 ? categoryRaw[0] : "";
          return {
            id: item.product.id,
            title: item.product.fieldData.name,
            description: item.product.fieldData.description,
            image: {
              uri: item.skus[0]?.fieldData["main-image"]?.url || "https://via.placeholder.com/150",
            },
            price: (item.skus[0]?.fieldData.price.value || 0) / 100,
            categoryId: categoryId,
            categoryName: categoryNames[categoryId] || "Unknown category",
          };
        });
        setProducts(mapped);
      })
      .catch(console.error);
  }, []);

  // Filteren
  const filteredProducts = products.filter((product) => {
    const categoryMatch = selectedCategory === "" || product.categoryId === selectedCategory;
    const searchMatch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
    return categoryMatch && searchMatch;
  });

  // Sorteren
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === "price-asc") return a.price - b.price;
    if (sortOption === "price-desc") return b.price - a.price;
    if (sortOption === "name-asc") return a.title.localeCompare(b.title);
    if (sortOption === "name-desc") return b.title.localeCompare(a.title);
    return 0;
  });

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Products</Text>

      <TextInput
        style={styles.searchInput}
        placeholder="Search products..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      {/* Categorie Picker */}
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={selectedCategory}
          onValueChange={setSelectedCategory}
          style={styles.picker}
          dropdownIconColor="#796f62"
        >
          <Picker.Item label="All categories" value="" />
          {Object.entries(categoryNames).map(([id, name]) => (
            <Picker.Item key={id} label={name} value={id} />
          ))}
        </Picker>
      </View>

      {/* Sorteer Picker */}
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={sortOption}
          onValueChange={setSortOption}
          style={styles.picker}
          dropdownIconColor="#796f62"
        >
          <Picker.Item label="Price (low to high)" value="price-asc" />
          <Picker.Item label="Price (high to low)" value="price-desc" />
          <Picker.Item label="Name (A-Z)" value="name-asc" />
          <Picker.Item label="Name (Z-A)" value="name-desc" />
        </Picker>
      </View>

      <FlatList
        data={sortedProducts}
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
    paddingHorizontal: 16,
  },
  heading: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 16,
    color: "#796f62",
  },
  searchInput: {
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    color: "#000",
    marginBottom: 16,
  },
  pickerContainer: {
    paddingVertical: "-100px",
    backgroundColor: "#fff",
    borderRadius: 8,
    height: 135,
    elevation: 3,
    marginBottom: 16,
    overflow: "hidden",
  },
  picker: {
    width: "100%",
    height: 50,
    color: "#796f62",
    backgroundColor: "#fff",
  },
  listContainer: {
    paddingBottom: 80,
  },
});

export default Products;
