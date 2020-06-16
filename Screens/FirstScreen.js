import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Picker } from '@react-native-community/picker';

class FirstScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            language: 'java',
        };
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>First Screen</Text>
                <Picker
                    selectedValue={this.state.language}
                    style={styles.picker}
                    onValueChange={(itemValue, itemIndex) =>
                        this.setState({language: itemValue})
                    }>
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js" />
                </Picker>
                <Button
                    title="Go to Second Screen"
                    onPress={() => this.props.navigation.navigate('Second Screen')}
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
    picker: {
        height: 50,
        width: 150,
    },
});

export default FirstScreen;