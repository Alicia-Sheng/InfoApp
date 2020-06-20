import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FirstScreen from './Screens/FirstScreen';
import SecondScreen from './Screens/SecondScreen';
import ThirdScreen from './Screens/ThirdScreen';
import { InfoProvider } from './provider/InfoProvider';

const Stack = createStackNavigator();

export default class App extends React.Component {
  render() {
    return (
      <InfoProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="First Screen">
            <Stack.Screen name="First Screen" component={FirstScreen} options={{ title: 'You Are...' }} />
            <Stack.Screen name="Second Screen" component={SecondScreen} options={{ title: 'Getting to Know Yourself Better' }}/>
            <Stack.Screen name="Third Screen" component={ThirdScreen} options={{ title: 'Here Is All About You' }}/>
          </Stack.Navigator>
        </NavigationContainer>
      </InfoProvider>
    );
  }
};
