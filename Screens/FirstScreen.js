import React from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import { Picker } from '@react-native-community/picker';
import data from '../data.js';
import { InfoContext } from '../provider/InfoProvider';
import { globalStyles } from '../globalStyles';

const PickerList = ({ item, changeHandler, type }) => {
    return (
        <Picker
            selectedValue={item}
            style={globalStyles.picker}
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

    this.onPressHandler = this.onPressHandler.bind(this);
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
                    <View style={[globalStyles.container, styles.container]}>
                        <View style={globalStyles.upContainer}>
                            <View style={globalStyles.body}>
                                <ScrollView>
                                    <View style={globalStyles.question}>
                                        <Text style={globalStyles.text}>Please enter your name here:</Text>
                                        <View style={globalStyles.inputContainer}>
                                            <TextInput
                                                placeholder='Name'
                                                style={globalStyles.input}
                                                onChangeText={info.setName}
                                                value={info.name}
                                            />
                                        </View>
                                    </View>
                                    <View style={globalStyles.question}>
                                        <Text style={globalStyles.text}>Please select your birth month and date:</Text>
                                        <Picker
                                            selectedValue={info.month}
                                            style={globalStyles.picker}
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
                                    <View style={globalStyles.question}>
                                        <Text style={globalStyles.text}>What is your favorite food?</Text>
                                        <View style={globalStyles.inputContainer}>
                                            <TextInput
                                                placeholder='Favorite Food'
                                                style={globalStyles.input}
                                                onChangeText={info.setFood}  
                                                value={info.food}              
                                            />
                                        </View>
                                    </View>
                                </ScrollView>
                            </View>
                            <Button
                                title='Next'
                                buttonStyle={styles.button}
                                raised
                                onPress={this.onPressHandler(info.firstNavigate())}
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
        backgroundColor: '#E3D8D3'
    },
    button: {
        backgroundColor: '#9CB2A5',
    }
});

export default FirstScreen;
