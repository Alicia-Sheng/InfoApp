import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import {Picker} from '@react-native-community/picker';

const ThirdScreen = ({ navigation }) => (
    <View style={styles.container}>
        <Text>Third Screen</Text>
        <Button
            title="Go to First Screen"
            onPress={() => navigation.navigate('First Screen')}
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

export default ThirdScreen;