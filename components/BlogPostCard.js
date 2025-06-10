import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const BlogPostCard = ({ title, excerpt, image, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      {image && (
        <Image source={image} style={styles.image} />
      )}
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.excerpt}>{excerpt}</Text>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>Read More</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    width: "90%",
    padding: 20,
    marginBottom: 15,
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  image: {
    width: "100%",
    height: 150,
    borderRadius: 8,
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#3e2d22",
  },
  excerpt: {
    fontSize: 14,
    color: "#666",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#bea395",
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 5,
    alignItems: "center",
    alignSelf: "flex-start",
  },
  buttonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default BlogPostCard;
