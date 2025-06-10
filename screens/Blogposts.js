import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import BlogPostCard from "../components/BlogPostCard";

const Blogposts = ({ navigation }) => {
  const blogPosts = [
    {
      id: 1,
      title: "Post 1: Lorem Ipsum",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: { uri: "https://via.placeholder.com/300" },
    },
    {
      id: 2,
      title: "Post 2: Dolor Sit",
      excerpt: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: { uri: "https://via.placeholder.com/300" },
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {blogPosts.map((post) => (
        <BlogPostCard
          key={post.id}
          title={post.title}
          excerpt={post.excerpt}
          image={post.image}
          onPress={() => navigation.navigate("BlogDetails", post)}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    alignItems: "center",
  },
});

export default Blogposts;