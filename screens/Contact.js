import React, { useState } from "react";
import { StyleSheet, View, ScrollView, Text, TextInput, TouchableOpacity } from "react-native";

const Contact = () => { // Contact component aanmaken
    const [email, setEmail] = useState(""); // State voor e-mail
    const [message, setMessage] = useState(""); // State voor bericht

    const handleSend = () => {
        // Logic to send the message
        console.log("Email:", email);
        console.log("Message:", message);
    };

    return (
        <View style={styles.outerContainer}>
            <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.heading}>Contact us via the form below & we'll get back to you as soon as we can.</Text>
                <Text style={styles.label}>Your e-mail address:</Text>
                <TextInput
                    style={styles.input}
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    placeholder="Enter your email"
                />
                <Text style={styles.label}>Message:</Text>
                <TextInput
                    style={[styles.input, styles.messageInput]}
                    value={message}
                    onChangeText={setMessage}
                    multiline // Toestaan voor meerdere regels
                    numberOfLines={4} // Aantal regels dat zichtbaar is
                    placeholder="Type your message here"
                />
                <TouchableOpacity style={styles.button} onPress={handleSend}>
                    <Text style={styles.buttonText}>Send</Text>
                </TouchableOpacity>

                <Text style={styles.bold}>E-mail:</Text>
                <Text style={styles.text}>Interiors@danainteriors.com</Text>


                <Text style={styles.bold}>Phone</Text>
                <Text style={styles.text}>+324 95 49 85 49</Text>

                <Text style={styles.bold}>Address</Text>
                <Text style={styles.text}>Mechelsesteenweg 425a</Text>
                <Text style={styles.text}>1800 Vilvoorde</Text>

            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    outerContainer: {
        flex: 1,
        backgroundColor: '#f5f3f1',
    },
    container: {
        padding: 20,
        padding: 16,
        paddingHorizontal: 26,
    },
    label: {
        marginBottom: 5,
        color: '#3e2d22',
    },
    heading: {  
        fontSize: 28,
        fontWeight: "bold",
        color: "#3e2d22",
        marginBottom: 20,
        textAlign: "center",
    },
    bold: { 
        fontSize: 16,
        fontWeight: "bold",
        color: "#3e2d22",
        marginTop: 30,
    },
    input: {
        backgroundColor: '#fff',
        height: 40,
        borderColor: '#796f62',
        borderWidth: 1,
        marginBottom: 15,
        paddingHorizontal: 10,
        borderRadius: 8,
    },
    messageInput: {
        height: 120,
        textAlignVertical: 'top',
    },
    button: {
        backgroundColor: "#796f62",
        paddingVertical: 15,
        borderRadius: 8,
        marginTop: 10,
        alignItems: "center",
    },
    buttonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    }
});

export default Contact;