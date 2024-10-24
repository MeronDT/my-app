import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import myGif from '../../assets/flighttongue.gif';

const ThirdPage = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Third Page</Text>
            <Image
                source={myGif}
                style={styles.image} 
                resizeMode="contain"                
            />
            <Text style={styles.caption}>FlightReacts 1996-2024</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000000',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#f0f0f0',
    },
    image: {
        width: 600,
        height: 400,
        marginBottom: 20,
    },
    caption: {
        fontSize: 14,
        color: '#f0f0f0'
    }
});

export default ThirdPage;