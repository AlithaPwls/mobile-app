import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

const BlogPostCard = ({ title, excerpt, image, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.excerpt}>{excerpt}</Text>
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={{ color: "#fff" }}>Read More</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
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
    marginBottom: 5,
  },
  excerpt: {
    fontSize: 16,
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

export default BlogPostCard;
