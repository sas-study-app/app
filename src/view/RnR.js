import React, {Component} from 'react'
import {View, Text, Image, StyleSheet} from 'react-native'

export default class RnR extends Component{
render(){
    return (
        <View>
            <Text>
                Testing
            </Text>

        </View>
    )
}

styles = StyleSheet.create({
    container: {
        justifyItems: 'center',
        width: '100%',
        alignItems: 'stretch',
        gridTemplateRows: '50% 50%',
        gridTemplateColumns: '50% 50%',
        margin: 'auto',
        flexGrow: 1,
       
    },

    title: {
        fontSize: '20px',
    },

   

    
    
})
}
