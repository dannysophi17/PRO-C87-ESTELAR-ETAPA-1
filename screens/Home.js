import React, { Component } from 'react';
import { View } from 'react-native';


export default class HomeScreen extends Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Text>Pantalla de inicio</Text>
            </View>
        );
    }
}