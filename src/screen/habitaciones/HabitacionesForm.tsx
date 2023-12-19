import { useNavigation } from '@react-navigation/native';
import { FC } from 'react';
import { Button, Text, View } from 'react-native';

interface Props {
}

export const HabitacionesForm:FC <Props> = () => {
  
  const navigation = useNavigation();

  return (
    <>
      <View>
        <Text>Habitaciones Form</Text>
        <Button 
        title="Lista" 
        onPress={()=>navigation.navigate("HabitacionesLista" as never)}
        />
      </View>
    </>
  )
}
