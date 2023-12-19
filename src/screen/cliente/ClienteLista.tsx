import { useNavigation } from '@react-navigation/native';
import { FC } from 'react';
import { Button, Text, View } from 'react-native';

interface Props {
}

export const ClienteLista:FC <Props> = () => {

  const navigation = useNavigation();

  return (
    <>
      <View>
        <Text>Cliente lista</Text>
        <Button 
        title="formulario" 
        onPress={()=>navigation.navigate("ClienteFrom" as never)}
        />
      </View>
    </>
  )
}
