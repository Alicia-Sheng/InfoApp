import React from 'react';
import { Button, StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';
import { Picker } from '@react-native-community/picker';
import data from '../data.js';

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
                    <View style={styles.questions}>
                        <ScrollView>
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
                                {/*{data.map((month) => {if (month.type === 'month') {return (<Picker.Item key={month.id} label={month.label} value={month.value} />)}})}*/}
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
                                {/*{data.map((date) => {if (date.type === 'date') {return (<Picker.Item key={date.id} label={date.label} value={date.value} />)}})}*/}
                                <Picker.Item label='1' value='1st' />
                                <Picker.Item label='2' value='2nd' />
                                <Picker.Item label='3' value='3rd' />
                                <Picker.Item label='4' value='4th' />
                                <Picker.Item label='5' value='5th' />
                                <Picker.Item label='6' value='6th' />
                                <Picker.Item label='7' value='7th' />
                                <Picker.Item label='8' value='8th' />
                                <Picker.Item label='9' value='9th' />
                                <Picker.Item label='10' value='10th' />
                                <Picker.Item label='11' value='11th' />
                                <Picker.Item label='12' value='12th' />
                                <Picker.Item label='13' value='13th' />
                                <Picker.Item label='14' value='14th' />
                                <Picker.Item label='15' value='15th' />
                                <Picker.Item label='16' value='16th' />
                                <Picker.Item label='17' value='17th' />
                                <Picker.Item label='18' value='18th' />
                                <Picker.Item label='19' value='19th' />
                                <Picker.Item label='20' value='20th' />
                                <Picker.Item label='21' value='21st' />
                                <Picker.Item label='22' value='22nd' />
                                <Picker.Item label='23' value='23rd' />
                                <Picker.Item label='24' value='24th' />
                                <Picker.Item label='25' value='25th' />
                                <Picker.Item label='26' value='26th' />
                                <Picker.Item label='27' value='27th' />
                                <Picker.Item label='28' value='28th' />
                                <Picker.Item label='29' value='29th' />
                                <Picker.Item label='30' value='30th' />
                                <Picker.Item label='31' value='31st' />
                            </Picker>
                            <TextInput
                                placeholder='Favorite Food'
                                style={styles.input}
                                onChangeText={this.foodInputHandler}  
                                value={this.state.food}              
                            />
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
        flex: 0.8,
        width: 300,
        backgroundColor: '#fff',
        padding: 30,
    },
    questions: {
        flex: 1,
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