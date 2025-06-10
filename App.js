import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen.js";
import Products from "./screens/Products.js";
import ProductDetails from "./screens/ProductDetails.js";
import Blogposts from "./screens/Blogposts.js";
import Cart from "./screens/Cart.js";
import Contact from "./screens/Contact.js"; // Ensure this import is correct
import BlogDetails from "./screens/BlogDetails.js";


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Homescreen" component={HomeScreen} />
        <Stack.Screen name="Products" component={Products} />
        <Stack.Screen name="ProductDetails" component={ProductDetails} />
        <Stack.Screen name='Blogposts' component={Blogposts} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="Contact" component={Contact} />
        <Stack.Screen name="BlogDetails" component={BlogDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );

}


