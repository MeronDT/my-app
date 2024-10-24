import {View, Text, StyleSheet } from 'react-native';
import React from 'react';

const Details = ({ route }) => {
    const { userEmail } = route.params;
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Details</Text>
            <Text style={styles.email}>User Email: {userEmail}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#c1c987',
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
    },
    email: {
        fontSize: 20,
        marginTop: 10,
    },
});

export default Details;