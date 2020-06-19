import React from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import { Picker } from '@react-native-community/picker';
import data from '../data.js';
import { InfoContext } from '../provider/InfoProvider';

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
    };

    onPressHandler = (navigate) => {
        if (navigate) {
            this.props.navigation.navigate('Second Screen')
        } else {
            alert("Please finish all the questions.")
        }
    };

    render() {
        return (
            <InfoContext.Consumer>
                {
                    info =>
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
                                                onChangeText={info.setName}
                                                value={info.name}
                                            />
                                        </View>
                                    </View>
                                    <View style={styles.question}>
                                        <Text style={styles.text}>Please select your birth month and date:</Text>
                                        <Picker
                                            selectedValue={info.month}
                                            style={styles.picker}
                                            onValueChange={info.setMonth}
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
                                        <PickerList item={info.date} changeHandler={info.setDate} type={'Date'} />
                                    </View>
                                    <View style={styles.question}>
                                        <Text style={styles.text}>What is your favorite food?</Text>
                                        <View style={styles.inputContainer}>
                                            <TextInput
                                                placeholder='Favorite Food'
                                                style={styles.input}
                                                onChangeText={info.setFood}  
                                                value={info.food}              
                                            />
                                        </View>
                                    </View>
                                </ScrollView>
                            </View>
                            <Button
                                title='Next'
                                buttonStyle={{
                                    backgroundColor: '#9CB2A5',
                                    borderRadius: 10,
                                }}
                                raised
                                onPress={() => {this.onPressHandler(info.name !== '' && info.month !== '' && info.date !== '' && info.food !== ''
                                )}}
                            />
                        </View>
                    </View>
                }
            </InfoContext.Consumer>
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
        borderRadius: 10,
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