import React from 'react';
import { Button, StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';
import { Picker } from '@react-native-community/picker';
import data from '../data.js';

const PickerList = ({ item, changeHandler, type }) => {
    return (
        <Picker
            selectedValue={item}
            style={styles.picker}
            onValueChange={changeHandler}
        >
            <Picker.Item label={type} value='' />
            {data.map((i) => {if (i.type === type) {return (<Picker.Item key={i.value} label={i.label} value={i.value} />)}})}
        </Picker>
    )
};

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
                        <View style={styles.upContainer}>
                            <View style={styles.body}>
                                <ScrollView>
                                    <View style={styles.question}>
                                        <Text style={styles.text}>Please enter your name here:</Text>
                                        <View style={styles.inputContainer}>
                                            <TextInput
                                                placeholder='Name'
                                                style={styles.input}
                                                onChangeText={this.nameInputHandler}
                                                value={this.state.name}
                                            />
                                        </View>
                                    </View>
                                    <View style={styles.question}>
                                        <Text style={styles.text}>Please select your birth month and date:</Text>
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
                                        <PickerList item={this.state.date} changeHandler={this.dateChangeHandler} type={'Date'} />
                                    </View>
                                    <View style={styles.question}>
                                        <Text style={styles.text}>What is your favorite food?</Text>
                                        <View style={styles.inputContainer}>
                                            <TextInput
                                                placeholder='Favorite Food'
                                                style={styles.input}
                                                onChangeText={this.foodInputHandler}  
                                                value={this.state.food}              
                                            />
                                        </View>
                                    </View>
                                </ScrollView>
                            </View>
                            <Button
                                title='Next'
                                color='#9CB2A5'
                                onPress={this.onPressHandler}
                            />
                        </View>
                    </View>
        )
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E3DBD3',
        alignItems: 'center',
        justifyContent: 'center',
    },
    upContainer: {
        height: '85%',
        width: '85%',
        backgroundColor: '#fff',
        padding: 30,
    },
    body: {
        flex: 1,
        paddingBottom: 20,
    },
    question: {
        marginBottom: 25,
    },
    input: {
        marginTop: 10,
        fontSize: 15,
    },
    picker: {
        width: 150,
    },
    inputContainer: {
        width: 200,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
    },
    text: {
        fontWeight: 'bold',
        fontSize: 15,
        marginBottom: 5,
    },
});

export default FirstScreen;