import { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HabitacionesForm } from './HabitacionesForm';
import { HabitacionesLista } from './HabitacionesLista';


interface Props {
}
const Stack = createStackNavigator();

export const HabitacionesStack:FC <Props> = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HabitacionesForm" component={HabitacionesForm} />
      <Stack.Screen name="HabitacionesLista" component={HabitacionesLista} />
    </Stack.Navigator>
  )
}
