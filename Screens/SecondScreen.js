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
            color: '',
            meal: '',
            year: '',
        };
    };

    colorChangeHandler = (val) => {
        this.setState({color: val});
    };

    mealChangeHandler = (val) => {
        this.setState({meal: val});
    };

    yearChangeHandler = (val) => {
        this.setState({year: val});
    };

    onPressHandler = () => {
        if (this.state.color !== '' && this.state.meal !== '' && this.state.year !== '') {
            this.props.navigation.navigate('Third Screen', {
                name: this.state.name,
                month: this.state.month,
                date: this.state.date,
                food: this.state.food,
                color: this.state.color,
                meal: this.state.meal,
                year: this.state.year,
            })
        } else {
            alert("Please answer the questions.")
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>What is your favorit color?</Text>
                <Picker
                    selectedValue={this.state.color}
                    style={styles.picker}
                    onValueChange={this.colorChangeHandler}
                >
                    <Picker.Item label='Color' value='' />
                    <Picker.Item label='Red' value='Red' />
                    <Picker.Item label='Orange' value='Orange' />
                    <Picker.Item label='Yellow' value='Yellow' />
                    <Picker.Item label='Green' value='Green' />
                    <Picker.Item label='Blue' value='Blue' />
                    <Picker.Item label='Purple' value='Purple' />
                </Picker>
                <Text>Which meal of the day is your favorite?</Text>
                <Picker
                    selectedValue={this.state.meal}
                    style={styles.picker}
                    onValueChange={this.mealChangeHandler}
                >
                    <Picker.Item label='Meal' value='' />
                    <Picker.Item label='Breakfast' value='Breakfast' />
                    <Picker.Item label='Brunch' value='Brunch' />
                    <Picker.Item label='Lunch' value='Lunch' />
                    <Picker.Item label='Dinner' value='Dinner' />
                    <Picker.Item label='Late Night' value='Late Night' />
                </Picker>
                <Text>Which year are you in college?</Text>
                <Picker
                    selectedValue={this.state.year}
                    style={styles.picker}
                    onValueChange={this.yearChangeHandler}
                >
                    <Picker.Item label='Year' value='' />
                    <Picker.Item label='Freshman' value='Freshman' />
                    <Picker.Item label='Sophomore' value='Sohomore' />
                    <Picker.Item label='Junior' value='Junior' />
                    <Picker.Item label='Senior' value='Senior' />
                </Picker>
                <Button
                    title='Go to Summary Screen'
                    color='pink'
                    onPress={this.onPressHandler}
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