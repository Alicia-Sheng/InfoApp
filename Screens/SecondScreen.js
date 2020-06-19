import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import { Picker } from '@react-native-community/picker';
import { InfoContext } from '../provider/InfoProvider';

class SecondScreen extends React.Component {

    constructor(props) {
        super(props);
    };

    onPressHandler = (navigate) => {
        if (navigate) {
            this.props.navigation.navigate('Third Screen')
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
                                <View style={styles.question}>
                                    <Text style={styles.text}>What is your favorite color?</Text>
                                    <Picker
                                        selectedValue={info.color}
                                        style={styles.picker}
                                        onValueChange={info.setColor}
                                    >
                                        <Picker.Item label='Color' value='' />
                                        <Picker.Item label='Red' value='Red' />
                                        <Picker.Item label='Orange' value='Orange' />
                                        <Picker.Item label='Yellow' value='Yellow' />
                                        <Picker.Item label='Green' value='Green' />
                                        <Picker.Item label='Blue' value='Blue' />
                                        <Picker.Item label='Purple' value='Purple' />
                                    </Picker>
                                </View>
                                <View style={styles.question}>
                                    <Text style={styles.text}>Which meal of the day is your favorite?</Text>
                                    <Picker
                                        selectedValue={info.meal}
                                        style={styles.picker}
                                        onValueChange={info.setMeal}
                                    >
                                        <Picker.Item label='Meal' value='' />
                                        <Picker.Item label='Breakfast' value='Breakfast' />
                                        <Picker.Item label='Brunch' value='Brunch' />
                                        <Picker.Item label='Lunch' value='Lunch' />
                                        <Picker.Item label='Dinner' value='Dinner' />
                                        <Picker.Item label='Late Night' value='Late Night' />
                                    </Picker>
                                </View>
                                <View style={styles.question}>
                                    <Text style={styles.text}>Which year are you in college?</Text>
                                    <Picker
                                        selectedValue={info.year}
                                        style={styles.picker}
                                        onValueChange={info.setYear}
                                    >
                                        <Picker.Item label='Year' value='' />
                                        <Picker.Item label='Freshman' value='Freshman' />
                                        <Picker.Item label='Sophomore' value='Sohomore' />
                                        <Picker.Item label='Junior' value='Junior' />
                                        <Picker.Item label='Senior' value='Senior' />
                                    </Picker>
                                </View>
                            </View>
                            <Button
                                title='Go to Summary Screen'
                                buttonStyle={{
                                    backgroundColor: '#E48EAD',
                                    borderRadius: 10,
                                }}
                                raised
                                onPress={() => {this.onPressHandler(info.color !== '' && info.meal !== '' && info.year !== '')}}
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
        backgroundColor: '#C1A4C3',
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
    picker: {
        width: 150,
    },
    question: {
        marginBottom: 25,
    },
    text: {
        fontWeight: 'bold',
        fontSize: 15,
        marginBottom: 5,
    },
});

export default SecondScreen;