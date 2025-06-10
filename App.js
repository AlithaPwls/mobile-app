import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen.js";
import ProductDetails from "./screens/ProductDetails.js";
import Blogposts from "./screens/Blogposts.js";
import Cart from "./screens/Cart.js";
import { CartProvider } from "./contexts/CartContext";


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ProductDetails" component={ProductDetails} />
        <Stack.Screen name='Blogposts' component={Blogposts} />
        <Stack.Screen name="Cart" component={Cart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
return (
  <CartProvider>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ProductDetails" component={ProductDetails} />
        <Stack.Screen name='Blogposts' component={Blogposts} />
        <Stack.Screen name="Cart" component={Cart} />
      </Stack.Navigator>
    </NavigationContainer>
  </CartProvider>
);
}


