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

    render() {
        return (
            <InfoContext.Consumer>
                {
                    info =>
                    <View style={[globalStyles.container, styles.container]}>
                        <View style={styles.upContainer}>
                            <View style={styles.body}>
                                <Text style={globalStyles.text}>Name: {info.name}</Text>
                                <Text style={globalStyles.text}>Birthday: {info.month}, {info.date}</Text>
                                <Text style={globalStyles.text}>Favorite Food: {info.food}</Text>
                                <Text style={globalStyles.text}>Favorite Color: {info.color}</Text>
                                <Text style={globalStyles.text}>Favorite Meal of Day: {info.meal}</Text>
                                <Text style={globalStyles.text}>Year in College: {info.year}</Text>
                            </View>
                            <Button
                                title='Start Again'
                                buttonStyle={styles.button}
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
        backgroundColor: '#84a9ac',
    },
    upContainer: {
        width: '85%',
        backgroundColor: '#fff',
        padding: 30,
        borderRadius: 10,
    },
    body: {
        paddingTop: 10,
        paddingBottom: 20,
        paddingLeft: 5,
    },
    button: {
        backgroundColor: '#2d5986',
    },
});

export default ThirdScreen;