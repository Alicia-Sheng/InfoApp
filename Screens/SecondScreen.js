import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const SecondScreen = ({ navigation }) => (
    <View style={styles.container}>
        <Text>Second Screen</Text>
        <Button
            title="Go to Third Screen"
            onPress={() => navigation.navigate('Third Screen')}
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

export default SecondScreen;