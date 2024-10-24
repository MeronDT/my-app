import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import myImage from '../../assets/coco walk.png';

const ThirdPage = () => {
    return (
        <View style={styles.container}>
            <Image
                source={myImage}
                style={styles.image} 
                resizeMode="contain"                
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#b32e24',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    image: {
        width: 600,
        height: 400,
        marginBottom: 20,
    }
});

export default ThirdPage;