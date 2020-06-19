import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import { InfoContext } from '../provider/InfoProvider';
import { globalStyles } from '../globalStyles';

class ThirdScreen extends React.Component {

    constructor(props) {
        super(props);
    };

    onPressHandler = () => {
        this.props.navigation.navigate('First Screen');
    };

    textColor(color) {
        if (color === 'Red') {
            return globalStyles.redText;
        } else if (color === 'Orange') {
            return globalStyles.orangeText;
        } else if (color === 'Yellow') {
            return globalStyles.yellowText;
        } else if (color === 'Green') {
            return globalStyles.greenText;
        } else if (color === 'Blue') {
            return globalStyles.blueText;
        } else {
            return globalStyles.purpleText;
        }
    };

    backgroundColor(color) {
        if (color === 'Red') {
            return globalStyles.redBackground;
        } else if (color === 'Orange') {
            return globalStyles.orangeBackground;
        } else if (color === 'Yellow') {
            return globalStyles.yellowBackground;
        } else if (color === 'Green') {
            return globalStyles.greenBackground;
        } else if (color === 'Blue') {
            return globalStyles.blueBackground;
        } else {
            return globalStyles.purpleBackground;
        }
    };

    buttonColor(color) {
        if (color === 'Red') {
            return globalStyles.redButton;
        } else if (color === 'Orange') {
            return globalStyles.orangeButton;
        } else if (color === 'Yellow') {
            return globalStyles.yellowButton;
        } else if (color === 'Green') {
            return globalStyles.greenButton;
        } else if (color === 'Blue') {
            return globalStyles.blueButton;
        } else {
            return globalStyles.purpleButton;
        }
    };

    render() {
        return (
            <InfoContext.Consumer>
                {
                    info =>
                    <View style={[globalStyles.container, this.backgroundColor(info.color)]}>
                        <View style={globalStyles.upContainer}>
                            <View style={globalStyles.body}>
                                <Text style={[globalStyles.text, this.textColor(info.color)]}>Name: {info.name}</Text>
                                <Text style={[globalStyles.text, this.textColor(info.color)]}>Birthday: {info.month}, {info.date}</Text>
                                <Text style={[globalStyles.text, this.textColor(info.color)]}>Favorite Food: {info.food}</Text>
                                <Text style={[globalStyles.text, this.textColor(info.color)]}>Favorite Color: {info.color}</Text>
                                <Text style={[globalStyles.text, this.textColor(info.color)]}>Favorite Meal of Day: {info.meal}</Text>
                                <Text style={[globalStyles.text, this.textColor(info.color)]}>Year in College: {info.year}</Text>
                            </View>
                            <Button
                                title='Start Again'
                                buttonStyle={[globalStyles.button, this.buttonColor(info.color)]}
                                raised
                                onPress={() => { this.onPressHandler(); info.refresh(); }}
                            />
                        </View>
                    </View>
                }
            </InfoContext.Consumer>
        )
    }
};

const styles = StyleSheet.create({

});

export default ThirdScreen;