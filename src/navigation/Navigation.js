import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Login from '../Screen/Login';
import RepDisplayscreen from '../Screen/Repscreen/RepDisplayscreen';

function Navigation() {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Login' component={Login} />
                <Stack.Group screenOptions={{headerShown:false}}>
                    <Stack.Screen name='RepPage' component={RepDisplayscreen} />
                </Stack.Group>
                
            </Stack.Navigator>

        </NavigationContainer>
  )
}

export default Navigation