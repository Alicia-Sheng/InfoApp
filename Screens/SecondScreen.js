import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import { Picker } from '@react-native-community/picker';
import { InfoContext } from '../provider/InfoProvider';
import { globalStyles } from '../globalStyles';

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
                    <View style={[globalStyles.container, styles.container]}>
                        <View style={globalStyles.upContainer}>
                            <View style={globalStyles.body}>
                                <View style={globalStyles.question}>
                                    <Text style={globalStyles.text}>What is your favorite color?</Text>
                                    <Picker
                                        selectedValue={info.color}
                                        style={globalStyles.picker}
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
                                <View style={globalStyles.question}>
                                    <Text style={globalStyles.text}>Which meal of the day is your favorite?</Text>
                                    <Picker
                                        selectedValue={info.meal}
                                        style={globalStyles.picker}
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
                                <View style={globalStyles.question}>
                                    <Text style={globalStyles.text}>Which year are you in college?</Text>
                                    <Picker
                                        selectedValue={info.year}
                                        style={globalStyles.picker}
                                        onValueChange={info.setYear}
                                    >
                                        <Picker.Item label='Year' value='' />
                                        <Picker.Item label='Freshman' value='Freshman' />
                                        <Picker.Item label='Sophomore' value='Sophomore' />
                                        <Picker.Item label='Junior' value='Junior' />
                                        <Picker.Item label='Senior' value='Senior' />
                                    </Picker>
                                </View>
                            </View>
                            <Button
                                title='Go to Summary Screen'
                                buttonStyle={styles.button}
                                raised
                                onPress={() => {this.onPressHandler(info.secondNavigate())}}
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
        backgroundColor: '#C1A4C3',
    },
    button: {
        backgroundColor: '#E48EAD',
    }
});

export default SecondScreen;