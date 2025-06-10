import React, { useEffect, useState } from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";
import BlogPostCard from "../components/BlogPostCard";

const Blogposts = ({ navigation }) => {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.webflow.com/v2/sites/67a51acd25ca407c212b08fe/collections/67c048dba622c5bc02bfb659/items",
      {
        headers: {
          Authorization:
            "Bearer a7adff386b5cecfe1a0c9e0edc9fb88910f70f91b9bd6a18d522b8988546c0c5",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("Volledige API Data:", JSON.stringify(data, null, 2));

        setBlogPosts(
          data.items.map((item) => ({
            id: item._id || item.id,
            title: item.fieldData?.name || "Untitled",
            excerpt:
              item.fieldData?.["post-summary"] || "No excerpt available.",
            body: item.fieldData?.["post-body"] || "No post body available.",
            image: {
              uri:
                item.fieldData?.["main-image"]?.url ||
                "https://via.placeholder.com/300",
            },
          }))
        );
      })
      .catch((err) => console.error("Error:", err));
  }, []);

  return (
    <View>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.heading}>Blogposts</Text>
        {blogPosts.map((post) => (
          <BlogPostCard
            key={post.id}
            title={post.title}
            excerpt={post.excerpt}
            body={post.body}
            image={post.image}
            onPress={() =>
              navigation.navigate("BlogDetails", {
                title: post.title,
                excerpt: post.excerpt,
                image: post.image,
                body: post.body,
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
    paddingVertical: 0,
    alignItems: "center",
    backgroundColor: "#f5f3f1",
    paddingBottom: 60,
  },
  heading: {
    marginVertical: 20,
    fontSize: 28,
    fontWeight: "bold",
    color: "#3e2d22",
  },
});

export default Blogposts;
