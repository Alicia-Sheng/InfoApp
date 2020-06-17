import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

class ThirdScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: this.props.route.params.name,
            month: this.props.route.params.month,
            date: this.props.route.params.date,
            food: this.props.route.params.food,
            color: this.props.route.params.color,
            meal: this.props.route.params.meal,
            year: this.props.route.params.year,
        };
    };

    onPressHandler = () => {
        this.props.navigation.navigate('First Screen');
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.upContainer}>
                    <View style={styles.text}>
                        <Text>Name: {this.state.name}</Text>
                        <Text>Birthday: {this.state.month}, {this.state.date}</Text>
                        <Text>Favorite Food: {this.state.food}</Text>
                        <Text>Favorite Color: {this.state.color}</Text>
                        <Text>Favorite Meal of Day: {this.state.meal}</Text>
                        <Text>Year in College: {this.state.year}</Text>
                    </View>
                    <Button
                        title='Go to First Screen'
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
        backgroundColor: '#8BA4B3',
        alignItems: 'center',
        justifyContent: 'center',
    },
    upContainer: {
        flex: 0.8,
        width: 300,
        backgroundColor: '#fff',
        padding: 30,
    },
    text: {
        flex: 1,
    },
});

export default ThirdScreen;