import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';
import { Picker } from '@react-native-community/picker';
import { greaterThan } from 'react-native-reanimated';

class FirstScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            month: '',
            date: '',
            food: '',
            color: '',
            meal: '',
            year: '',
        };
    };

    componentDidMount() {
        this._unsubscribe = this.props.navigation.addListener('focus', () => {
            this.setState({
                name: '',
                month: '',
                date: '',
                food: '',
                color: '',
                meal: '',
                year: '',
            });
        });
    };
      
    nameInputHandler = (enteredText) => {
        this.setState({name: enteredText});
    };
    
    foodInputHandler = (enteredText) => {
        this.setState({food: enteredText});
    };

    monthChangeHandler = (val) => {
        this.setState({month: val});
    };

    dateChangeHandler = (val) => {
        this.setState({date: val});
    };

    onPressHandler = () => {
        if (this.state.name !== '' && this.state.month !== '' && this.state.date !== '' && this.state.food !== '') {
            this.props.navigation.navigate('Second Screen', {
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
                <TextInput
                    placeholder='Name'
                    style={styles.input}
                    onChangeText={this.nameInputHandler}
                    value={this.state.name}
                />
                <Picker
                    selectedValue={this.state.month}
                    style={styles.picker}
                    onValueChange={this.monthChangeHandler}
                >
                    <Picker.Item label='Month' value='' />
                    <Picker.Item label='January' value='Jan' />
                    <Picker.Item label='Feburary' value='Feb' />
                    <Picker.Item label='March' value='Mar' />
                    <Picker.Item label='April' value='Apr' />
                    <Picker.Item label='May' value='May' />
                    <Picker.Item label='June' value='Jun' />
                    <Picker.Item label='July' value='Jul' />
                    <Picker.Item label='August' value='Aug' />
                    <Picker.Item label='September' value='Sep' />
                    <Picker.Item label='Octobor' value='Oct' />
                    <Picker.Item label='November' value='Nov' />
                    <Picker.Item label='December' value='Dec' />
                </Picker>
                <Picker
                    selectedValue={this.state.date}
                    style={styles.picker}
                    onValueChange={this.dateChangeHandler}
                >
                    <Picker.Item label='Date' value='' />
                    <Picker.Item label='1' value='1' />
                    <Picker.Item label='2' value='2' />
                    <Picker.Item label='3' value='3' />
                    <Picker.Item label='4' value='4' />
                    <Picker.Item label='5' value='5' />
                    <Picker.Item label='6' value='6' />
                    <Picker.Item label='7' value='7' />
                    <Picker.Item label='8' value='8' />
                    <Picker.Item label='9' value='9' />
                    <Picker.Item label='10' value='10' />
                    <Picker.Item label='11' value='11' />
                    <Picker.Item label='12' value='12' />
                    <Picker.Item label='13' value='13' />
                    <Picker.Item label='14' value='14' />
                    <Picker.Item label='15' value='15' />
                    <Picker.Item label='16' value='16' />
                    <Picker.Item label='17' value='17' />
                    <Picker.Item label='18' value='18' />
                    <Picker.Item label='19' value='19' />
                    <Picker.Item label='20' value='20' />
                    <Picker.Item label='21' value='21' />
                    <Picker.Item label='22' value='22' />
                    <Picker.Item label='23' value='23' />
                    <Picker.Item label='24' value='24' />
                    <Picker.Item label='25' value='25' />
                    <Picker.Item label='26' value='26' />
                    <Picker.Item label='27' value='27' />
                    <Picker.Item label='28' value='28' />
                    <Picker.Item label='29' value='29' />
                    <Picker.Item label='30' value='30' />
                    <Picker.Item label='31' value='31' />
                </Picker>
                <TextInput
                    placeholder='Favorite Food'
                    style={styles.input}
                    onChangeText={this.foodInputHandler}  
                    value={this.state.food}              
                />
                <Button
                    title='Next'
                    color='green'
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
    input: {
        margin: 10,
    },
    picker: {
        height: 50,
        width: 150,
    },
});

export default FirstScreen;