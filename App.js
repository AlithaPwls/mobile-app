import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import Blogposts from "./screens/Blogposts";
import BlogDetails from "./screens/BlogDetails";
import Contact from "./screens/Contact";
import Products from "./screens/Products";
import ProductDetails from "./screens/ProductDetails";
import Cart from "./screens/Cart";
import Confirmation from "./screens/Confirmation";
import OrderHistory from "./screens/OrderHistory";

const Stack = createStackNavigator();

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [orders, setOrders] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  const clearCart = () => setCartItems([]);

  const addOrder = (order) => {
    setOrders((prevOrders) => [...prevOrders, order]);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="HomeScreen" 
          component={HomeScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Blogposts" 
          component={Blogposts}
          options={{ headerShown: true, title: "Blogposts" }}
        />
        <Stack.Screen
          name="Contact" 
          component={Contact}
          options={{ headerShown: true, title: "Contact" }}
        />
        <Stack.Screen name="Products">
          {(props) => (
            <Products {...props} />
          )}
        </Stack.Screen>
        <Stack.Screen
        name="BlogDetails"
        component={BlogDetails}
        />
        <Stack.Screen name="ProductDetails">
          {(props) => (
            <ProductDetails {...props} addToCart={addToCart} />
          )}
        </Stack.Screen>
        <Stack.Screen name="Cart">
          {(props) => (
            <Cart
              {...props}
              cartItems={cartItems}
              clearCart={clearCart}
              addOrder={addOrder}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="Confirmation" component={Confirmation} />
        <Stack.Screen name="OrderHistory">
          {(props) => (
            <OrderHistory {...props} orders={orders} />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
