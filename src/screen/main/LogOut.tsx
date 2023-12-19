import { useNavigation } from '@react-navigation/native';
import { FC } from 'react';
import { Button, Text, View } from 'react-native';

interface Props {
}

export const LogOut:FC <Props> = () => {
  
  const navigation = useNavigation();

    return (
      <>
        <View>
          <Text>LogOut</Text>
          <Button 
          title="Salir" 
          onPress={()=>navigation.navigate("Login" as never)}
          />
        </View>
      </>
    )
}
