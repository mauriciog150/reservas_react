import { useNavigation } from '@react-navigation/native';
import { FC } from 'react';
import { Button, Text, View } from 'react-native';

interface Props {
}

export const HabitacionesLista:FC <Props> = () => {

    const navigation = useNavigation();

    return (
      <>
        <View>
          <Text>Habitaciones Lista</Text>
          <Button 
          title="Formulario" 
          onPress={()=>navigation.navigate("HabitacionesForm" as never)}
          />
        </View>
      </>
    )
}
