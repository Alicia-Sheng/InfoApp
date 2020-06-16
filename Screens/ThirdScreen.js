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

    render() {
        return (
            <View style={styles.container}>
                <Text>Name: {this.state.name}</Text>
                <Text>Birthday: {this.state.month}, {this.state.date}</Text>
                <Text>Favorite Food: {this.state.food}</Text>
                <Text>Favorite Color: {this.state.color}</Text>
                <Text>Favorite Meal of Day: {this.state.meal}</Text>
                <Text>Year in College: {this.state.year}</Text>
                <Button
                    title="Go to First Screen"
                    onPress={() => this.props.navigation.navigate('First Screen')}
                />
            </View>
        )
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default ThirdScreen;