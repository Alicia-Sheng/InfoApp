import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import { InfoContext } from '../provider/InfoProvider';

class ThirdScreen extends React.Component {

    constructor(props) {
        super(props);
    };

    onPressHandler = () => {
        this.props.navigation.navigate('First Screen');
    };

    render() {
        return (
            <InfoContext.Consumer>
                {
                    info =>
                    <View style={styles.container}>
                        <View style={styles.upContainer}>
                            <View style={styles.body}>
                                <Text style={styles.text}>Name: {info.name}</Text>
                                <Text style={styles.text}>Birthday: {info.month}, {info.date}</Text>
                                <Text style={styles.text}>Favorite Food: {info.food}</Text>
                                <Text style={styles.text}>Favorite Color: {info.color}</Text>
                                <Text style={styles.text}>Favorite Meal of Day: {info.meal}</Text>
                                <Text style={styles.text}>Year in College: {info.year}</Text>
                            </View>
                            <Button
                                title='Start Again'
                                buttonStyle={{
                                    backgroundColor: '#2d5986',
                                    borderRadius: 10,
                                }}
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
    container: {
        flex: 1,
        backgroundColor: '#8BA4B3',
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
    text: {
        fontSize: 15,
        marginBottom: 20,
    },
});

export default ThirdScreen;