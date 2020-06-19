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
                    <View style={styles.body}>
                        <Text style={styles.text}>Name: {this.state.name}</Text>
                        <Text style={styles.text}>Birthday: {this.state.month}, {this.state.date}</Text>
                        <Text style={styles.text}>Favorite Food: {this.state.food}</Text>
                        <Text style={styles.text}>Favorite Color: {this.state.color}</Text>
                        <Text style={styles.text}>Favorite Meal of Day: {this.state.meal}</Text>
                        <Text style={styles.text}>Year in College: {this.state.year}</Text>
                    </View>
                    <Button
                        title='Go to First Screen'
                        color='#2d5986'
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