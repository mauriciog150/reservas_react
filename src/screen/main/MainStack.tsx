import { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Hometab } from './Hometab';
import { Login } from './Login';

interface Props {
}
const Stack = createStackNavigator();

export const MainStack:FC <Props> = () => {


  return (
    <Stack.Navigator
      screenOptions={
      {
        headerShown: false
      }
    }
    >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Hometab" component={Hometab} />

    </Stack.Navigator>
  );
}
