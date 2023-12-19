import { FC } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ClienteStack } from '../cliente/ClienteStack';
import { HabitacionesStack } from '../habitaciones/HabitacionesStack';
import { LogOut } from './LogOut';

interface Props {
}
const Tab = createBottomTabNavigator();

export const Hometab:FC <Props> = () => {
  return (
    <Tab.Navigator
      screenOptions={
        {
          headerShown: false
        }
      }
    >
      <Tab.Screen name="ClienteStack" component={ClienteStack} />
      <Tab.Screen name="HabitacionesStack" component={HabitacionesStack} />
      <Tab.Screen name="LogOut" component={LogOut} />
    </Tab.Navigator>
  )
}
