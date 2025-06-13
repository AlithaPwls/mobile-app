import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

const BlogPostCard = ({ title, excerpt, image, onPress }) => { //component aanmaken
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Image source={image} style={styles.image} />
      <Text style={styles.excerpt}>{excerpt}</Text>
      <TouchableOpacity onPress={onPress} style={styles.button}> 
        <Text style={{ color: "#fff" }}>Read More</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 25,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
  },
  excerpt: {
    fontSize: 12,
    color: "#555",
  },
  button: {
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: "#796f62",
    borderRadius: 5,
    alignItems: "center",
  },
});

export default BlogPostCard; //export default BlogPostCard;
