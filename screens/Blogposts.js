import React, { useEffect, useState } from "react"; // Import React en useEffect, useState hooks
import { StyleSheet, View, ScrollView, Text, TextInput } from "react-native";
import BlogPostCard from "../components/BlogPostCard"; //importeren van blogpostcard component

const Blogposts = ({ navigation }) => { // Blogposts component
  const [blogPosts, setBlogPosts] = useState([]); // State voor blogposts
  const [searchQuery, setSearchQuery] = useState(""); // State voor zoekopdracht

  useEffect(() => { // useEffect om data op te halen bij het laden van de component
    fetch(
      "https://api.webflow.com/v2/sites/67a51acd25ca407c212b08fe/collections/67c048dba622c5bc02bfb659/items",
      { // API endpoint voor blogposts
        headers: {
          Authorization:
            "Bearer a7adff386b5cecfe1a0c9e0edc9fb88910f70f91b9bd6a18d522b8988546c0c5",
        }, // Authenticatie header met API sleutel
      }
    )
      .then((res) => res.json()) // Response omzetten naar JSON
      .then((data) => { // Data verwerken
        console.log("Volledige API Data:", JSON.stringify(data, null, 2));// Log de volledige data voor debugging

        setBlogPosts( // Zet de blogposts in de state
          data.items.map((item) => ({   // Map de items naar een bruikbaar formaat
            id: item._id || item.id, // Gebruik _id of id als unieke identifier
            title: item.fieldData?.name || "Untitled", // Titel van de blogpost, standaard "Untitled" als niet beschikbaar
            excerpt: // Samenvatting van de blogpost, standaard tekst als niet beschikbaar
              item.fieldData?.["post-summary"] || "No excerpt available.",
            body: item.fieldData?.["post-body"] || "No post body available.",
            image: {
              uri:
                item.fieldData?.["main-image"]?.url || // URL van de afbeelding, standaard placeholder als niet beschikbaar
                "https://via.placeholder.com/300",
            },
          }))
        );
      })
      .catch((err) => console.error("Error:", err));
  }, []);

  // Filter blogposts op zoekopdracht (in titel of excerpt)
  const filteredPosts = blogPosts.filter((post) => //zoek de blogposts die overeenkomen met de zoekopdracht
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) || // Controleer of de titel overeenkomt met de zoekopdracht
    post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) // Controleer of de excerpt (of samenvatting) overeenkomt met de zoekopdracht
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Blogposts</Text>

      <TextInput
        style={styles.searchInput}
        placeholder="Search blogposts..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {filteredPosts.map((post) => (
          <BlogPostCard
            key={post.id}
            title={post.title}
            excerpt={post.excerpt}
            body={post.body}
            image={post.image}
            onPress={() => // Navigeren naar de details van de blogpost
              navigation.navigate("BlogDetails", { 
                title: post.title, //geef de titel van de blogpost door
                excerpt: post.excerpt, //geef de samenvatting van de blogpost door
                image: post.image,  //geef de afbeelding van de blogpost door
                body: post.body,  //geef de inhoud van de blogpost door
              })
            }
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f3f1",
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 60,
  },
  heading: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#3e2d22",
    marginBottom: 16,
    textAlign: "center",
  },
  searchInput: {
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 10,
    fontSize: 16,
    color: "#000",
    marginBottom: 16,
    width: "90%",
    alignSelf: "center",
  },
  scrollContainer: {
    alignItems: "center",
  },
});

export default Blogposts; // Export de Blogposts component zodat deze gebruikt kan worden in andere delen van de app
