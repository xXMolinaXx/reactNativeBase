import {  Button, Heading, } from 'native-base'
import React from 'react'
import { View } from 'react-native';

const Home = ({navigation}) => {
    return (
        <View>
            <Heading textAlign="center" mb="10" mt="5">
                Listas de compras
            </Heading>
            <Button onPress={() => navigation.navigate('list') }>Primary</Button>
        </View>
    )
}

export default Home;
