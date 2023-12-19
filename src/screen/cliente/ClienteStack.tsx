import { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ClienteForm } from './ClienteForm';
import { ClienteLista } from './ClienteLista';


interface Props {
}
const Stack = createStackNavigator();

export const ClienteStack:FC <Props> = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ClienteForm" component={ClienteForm} />
      <Stack.Screen name="ClienteLista" component={ClienteLista} />
    </Stack.Navigator>
  )
}
