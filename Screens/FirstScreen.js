import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const FirstScreen = ({ navigation }) => (
    <View style={styles.container}>
        <Text>First Screen</Text>
        <Button
            title="Go to Second Screen"
            onPress={() => navigation.navigate('Second Screen')}
        />
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default FirstScreen;