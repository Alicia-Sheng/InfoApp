import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Picker } from '@react-native-community/picker';

class SecondScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: this.props.route.params.name,
            month: this.props.route.params.month,
            date: this.props.route.params.date,
            food: this.props.route.params.food,
            color: 'color',
            meal: 'meal',
            year: 'year',
        };
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>What is your favorit color?</Text>
                <Picker
                    selectedValue={this.state.color}
                    style={styles.picker}
                    onValueChange={(itemValue, itemIndex) =>
                        this.setState({color: itemValue})
                    }>
                    <Picker.Item label="Red" value="red" />
                    <Picker.Item label="Orange" value="orange" />
                    <Picker.Item label="Yellow" value="yellow" />
                    <Picker.Item label="Green" value="green" />
                    <Picker.Item label="Blue" value="blue" />
                    <Picker.Item label="Purple" value="purple" />
                </Picker>
                <Text>Which meal of the day is your favorite?</Text>
                <Picker
                    selectedValue={this.state.meal}
                    style={styles.picker}
                    onValueChange={(itemValue, itemIndex) =>
                        this.setState({meal: itemValue})
                    }>
                    <Picker.Item label="Breakfast" value="breakfast" />
                    <Picker.Item label="Brunch" value="brunch" />
                    <Picker.Item label="Lunch" value="lunch" />
                    <Picker.Item label="Dinner" value="dinner" />
                    <Picker.Item label="Late Night" value="late night" />
                </Picker>
                <Text>Which year are you in college?</Text>
                <Picker
                    selectedValue={this.state.year}
                    style={styles.picker}
                    onValueChange={(itemValue, itemIndex) =>
                        this.setState({year: itemValue})
                    }>
                    <Picker.Item label="Freshman" value="freshman" />
                    <Picker.Item label="Sophomore" value="sohomore" />
                    <Picker.Item label="Junior" value="junior" />
                    <Picker.Item label="Senior" value="senior" />
                </Picker>
                <Button
                    title="Go to Summary Screen"
                    onPress={() => this.props.navigation.navigate('Third Screen', {
                        name: this.state.name,
                        month: this.state.month,
                        date: this.state.date,
                        food: this.state.food,
                        color: this.state.color,
                        meal: this.state.meal,
                        year: this.state.year,
                    })}
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

export default SecondScreen;