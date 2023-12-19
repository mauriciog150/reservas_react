import { useNavigation } from '@react-navigation/native';
import { FC } from 'react';
import { Button, Text, View } from 'react-native';

interface Props {
}

export const ClienteForm:FC <Props> = () => {

  const navigation = useNavigation();

  return (
    <>
      <View>
        <Text>Cliente Form</Text>
        <Button 
        title="Lista" 
        onPress={()=>navigation.navigate("ClienteLista" as never)}
        />
      </View>
    </>
  )
}
