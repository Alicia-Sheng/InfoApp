import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

class ThirdScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Third Screen</Text>
                <Button
                    title="Go to First Screen"
                    onPress={() => this.props.navigation.navigate('First Screen')}
                />
            </View>
        )
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default ThirdScreen;