import React, { useState } from "react"; //useState is nodig om een stukje data te kunnen opslaan (voor winkelmandje)
import { NavigationContainer } from "@react-navigation/native"; //nodig om de navigatie te kunnen gebruiken 
import { createStackNavigator } from "@react-navigation/stack"; //voor navigatie tussen verschillende schermen
import HomeScreen from "./screens/HomeScreen"; 
import Blogposts from "./screens/Blogposts";
import BlogDetails from "./screens/BlogDetails";
import Contact from "./screens/Contact";
import Products from "./screens/Products";
import ProductDetails from "./screens/ProductDetails";
import Cart from "./screens/Cart";
import Confirmation from "./screens/Confirmation";
import OrderHistory from "./screens/OrderHistory"; //alle schermen die ik gemaakt heb importen voor de navigatie

const Stack = createStackNavigator(); //navigatie aanmaken

const App = () => { //component app aanmaken, is hoofddeel van de hele app
  const [cartItems, setCartItems] = useState([]); //data van winkelmandje opslaan
  const [orders, setOrders] = useState([]); //lijst van 'order' dus als het al besteld is

  const addToCart = (product) => { //functie om product toe te kunnen voegen aan winkelmandje
    setCartItems((prevItems) => [...prevItems, product]);
  };

  const clearCart = () => setCartItems([]); //maakt winkelmandje leeg na bestelling

  const addOrder = (order) => { //functie om een product toe te voegen aan de lijst van orders
    setOrders((prevOrders) => [...prevOrders, order]);
  };

  return ( //om de navigatie tussen de schermen mogelijk te maken, moet ik de navigatiecontainer gebruiken
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="HomeScreen" //naam van het scherm
          component={HomeScreen} //welk component er wordt getoond
          options={{ headerShown: false }} //kleine instelling bv de bovenbalk niet tonen
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
            <Products {...props} /> //...props is een korte manier om alle eigenschappen van een component door te geven aan een ander component
          )}
        </Stack.Screen>
        <Stack.Screen
        name="BlogDetails"
        component={BlogDetails}
        />
        <Stack.Screen name="ProductDetails">
          {(props) => (
            <ProductDetails {...props} addToCart={addToCart} /> //props zorg dat alle standaard navigatie blijft werken, add to cart is extra informatie meegeven voor scherm
          )}
        </Stack.Screen>
        <Stack.Screen name="Cart">
          {(props) => (
            <Cart
              {...props}
              cartItems={cartItems}
              clearCart={clearCart}
              addOrder={addOrder} // hier ook extra info voor scherm (wat er in het scherm gebeurd)
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

export default App; //app beschikbaar maken voor gebruik
