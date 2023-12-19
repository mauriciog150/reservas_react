import { useNavigation } from '@react-navigation/native';
import { FC } from 'react';
import { Button, Text, TextInput, View } from 'react-native';

interface Props {
}

export const Login:FC <Props> = () => {

  const navegar = useNavigation();

  const login = () => {
    navegar.navigate("Hometab" as never);
  }

  return ( 
    <>
      <View>
        <Text>Biemvenido</Text>
        <Text>Usuario</Text>
        <TextInput/>
        <Text>Login</Text>
        <TextInput/>
        <Button 
        title="Login" 
        onPress= {()=>login()}
        />        
      </View>
    </>
  )
}
