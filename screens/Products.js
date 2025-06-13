import React, { useEffect, useState } from "react"; //useEffect nodig om iets uit te voeren als het scherm opent (dus data (producten) ophalen, useState om data op te slaan (zoals producten, zoekterm, categorie, sortering)
import { View, Text, TextInput, StyleSheet, FlatList } from "react-native"; //flatlist is nodig om een lijst van producten te tonen, textinput voor de zoekbalk
import { Picker } from "@react-native-picker/picker"; //Dropdownmenu (of carousel) voor catgorieen of sorteren importen
import ProductCard from "../components/ProductCard"; //productcard importen

const categoryNames = {
  "6845a9bbfa46f59ea747b4ec": "Small decorations", //ID's van categorieen en de naam van de categorie
  "6845a9d8b0467674094d1c07": "Ceramic",
  "6845aa11c123c7673859c5a8": "Textile",
  "6845a9fc5235a28c3a321503": "Art",
};

const Products = ({ navigation }) => { //scherm products maken, nav wordt meegegeven om te kunnen navigeren naar andere schermen
  const [products, setProducts] = useState([]); //lijst van producten ophalen uit API en opslaan in state
  const [searchQuery, setSearchQuery] = useState(""); //zoekterm opslaan in state
  const [selectedCategory, setSelectedCategory] = useState(""); //categorie opslaan in state, standaard is leeg (dus alle categorieen)
  const [sortOption, setSortOption] = useState("price-asc"); //standaard sortering is prijs oplopend

  useEffect(() => {
    fetch("https://api.webflow.com/v2/sites/67a51acd25ca407c212b08fe/products?", { //link vd website
      headers: {
        Authorization:
          "Bearer a7adff386b5cecfe1a0c9e0edc9fb88910f70f91b9bd6a18d522b8988546c0c5", //API sleutel voor authenticatie
      },
    })
      .then((res) => res.json())
      .then((data) => {
        const mapped = data.items.map((item) => ({ //elk product uit de API wordt omgezet (gemapt) naar een bruikbaar product
          id: item.product.id, //ID van het product
          title: item.product.fieldData.name, //titel vh product uit het veld 'name'
          description: item.product.fieldData.description || "No description available.", //beschrijving uit het veld 'description', als die er niet is dan standaard tekst
          image: {
            uri:
              item.skus[0]?.fieldData["main-image"]?.url ||
              "https://via.placeholder.com/150",
          },
          price: (item.skus[0]?.fieldData.price.value || 0) / 100, //api geeft prijs in centen, dus delen door 100 om euro's te krijgen
          categoryId:
            Array.isArray(item.product.fieldData.category) && //controleer of category een array is
            item.product.fieldData.category.length > 0 //controleer of er categorieen zijn
              ? item.product.fieldData.category[0] //controleert of er minstens 1 categorie is
              : "",
        }));
        setProducts(mapped); //lijst met producten opslaan in de state (na filter)
      })
      .catch(console.error); //vangt fouten op
  }, []);

  // Filter producten op categorie en zoekterm
  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "" || product.categoryId === selectedCategory; //producten tonen die matchen met de gekozen categorie of alle producten als geen categorie is gekozen
    const matchesSearch = product.title //producten tonen die matchen met de zoekterm
      .toLowerCase() //omzetten naar kleine letters
      .includes(searchQuery.toLowerCase()); //zoekterm omzetten naar kleine letters en kijken of die voorkomt in de titel van het product
    return matchesCategory && matchesSearch;
  });

  // Sorteer producten op basis van sortOption
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortOption) {
      case "price-asc":
        return a.price - b.price; //sorteren op prijs oplopend
      case "price-desc":
        return b.price - a.price; //sorteren op prijs aflopend
      case "name-asc":
        return a.title.localeCompare(b.title);  //sorteren op naam A-Z
      case "name-desc":
        return b.title.localeCompare(a.title); //sorteren op naam Z-A
      default:
        return 0; //geen sortering
    }
  });

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Products</Text>

   
      <TextInput //zoekbalk
        style={styles.searchInput}
        placeholder="Search products..." //Tekstje in de zoekbalk
        value={searchQuery}  //waarde van de zoekbalk is de zoekterm uit de state
        onChangeText={setSearchQuery} //zet de zoekterm in de state als de gebruiker iets typt
      />

      {/* Categorie filter */}
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={selectedCategory} //waarde van de gekozen categorie is de categorie uit de state
          onValueChange={(value) => setSelectedCategory(value)} //zet de gekozen categorie in de state als de gebruiker iets kiest
          style={styles.picker}
          dropdownIconColor="#796f62"
        >
          <Picker.Item label="All categories" value="" />
          {Object.entries(categoryNames).map(([id, name]) => ( //loop door de categorieen en maak een item voor elke categorie
            <Picker.Item key={id} label={name} value={id} />
          ))}
        </Picker>
      </View>

      {/* Sorteeropties */}
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={sortOption}
          onValueChange={(value) => setSortOption(value)}
          style={styles.picker}
          dropdownIconColor="#796f62"
        >
          <Picker.Item label="Price (low to high)" value="price-asc" />
          <Picker.Item label="Price (high to low)" value="price-desc" />
          <Picker.Item label="Name (A-Z)" value="name-asc" />
          <Picker.Item label="Name (Z-A)" value="name-desc" />
        </Picker>
      </View>

      <FlatList //lijst van producten tonen
        data={sortedProducts} //gebruik de gesorteerde en gefilterde producten
        keyExtractor={(item) => item.id} //unieke ID van elk product
        numColumns={2} //twee kolommen voor de producten
        contentContainerStyle={styles.listContainer}
        renderItem={({ item }) => ( //render elk product als een ProductCard
          <ProductCard
            title={item.title}
            image={item.image}
            price={item.price}  //geef props mee aan productcard
            onPress={() =>
              navigation.navigate("ProductDetails", { product: item })
            } 
          />
        )}
        columnWrapperStyle={{ justifyContent: "space-between" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f3f1",
    padding: 16,
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
    backgroundColor: "#fff",
    borderRadius: 8,
    elevation: 3,
    marginBottom: 16,
    overflow: "hidden",
  },
  picker: {
    width: "100%",
    height: 135,
    color: "#796f62",
    backgroundColor: "#fff",
  },
  listContainer: {
    paddingBottom: 80,
  },
});

export default Products; // Products scherm exporteren zodat het gebruikt kan worden in andere delen van de app, zoals in de navigatie stack of tab navigator.
