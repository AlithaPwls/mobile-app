import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, SafeAreaView } from 'react-native';

const BlogDetails = ({ route }) => {
  const { title, excerpt, image, body } = route.params; // Haal de parameters uit de route

  const cleanBody = body
    .replace(/<\/p>/gi, '\n\n') // Vervang </p> tags door nieuwe regels
    .replace(/<[^>]*>?/gm, ''); // Verwijder alle HTML tags

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}> 
      <ScrollView style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.excerpt}>{excerpt}</Text>
        <Image
          source={{ uri: image.uri }}
          style={{ width: '100%', height: 300, marginBottom: 16, borderRadius: 10 }}
        />
        <Text style={styles.body}>{cleanBody}</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingHorizontal: 26,
    backgroundColor: '#f5f3f1',
  },
  title: {
    fontSize: 24,
    fontWeight: '900',
    marginVertical: 29,
    color: '#796f62',
    textAlign: 'center',
  },
  excerpt: {
    fontSize: 16,
    lineHeight: 24,
    color: '#444',
    marginBottom: 16,
  },
  body: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
  },
});

export default BlogDetails;
