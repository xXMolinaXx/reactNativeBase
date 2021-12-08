import {  Button, Heading, } from 'native-base'
import React from 'react'
import { View } from 'react-native';

const List = ({navigation}) => {
    return (
        <View>
            <Heading textAlign="center" mb="10" mt="5">
                PANTALLA 2
            </Heading>
            <Button onPress={() => console.log('hola')}>Primary</Button>
        </View>
    )
}

export default List;