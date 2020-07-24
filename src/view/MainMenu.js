import React from 'react';
import { ImageBackground, Text, View, StyleSheet, Button} from 'react-native';

const pres = () => {
    
}


export default class MainMenu extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source = {require('./studysch.png')} style={styles.schedule} resizeMode = 'contain'>
                
                    <Text style={styles.title}> </Text>
                    
                </ImageBackground>
                <ImageBackground source = {require('./prestudy.png')} style={styles.prestudy} resizeMode = 'contain'>
                    <Text style={styles.title}> </Text>
                </ImageBackground>
                <ImageBackground source = {require('./instudy.png')} style={styles.instudy} resizeMode = 'contain'>
                    <Text style={styles.title}> </Text>
                </ImageBackground>
                
                <ImageBackground source = {require('./randr.png')} style={styles.rnr}  resizeMode = 'contain'>
                
                    <Text style={styles.title}> </Text>
                </ImageBackground>
            </View>
        )
    }
}

const te = {
    items: {
        backgroundColor: '#C4C4C4',
        borderWidth: 1,
        borderColor: '#000000',
        borderStyle: 'solid',
        padding: '3px',
        margin: '3px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        flexBasis: 'center',
        justifyContent: 'space-around',
    }
}



const styles = StyleSheet.create({
    container: {
        display: 'grid',
        justifyItems: 'center',
        width: '100%',
        alignItems: 'stretch',
        gridTemplateRows: '50% 50%',
        gridTemplateColumns: '50% 50%',
        margin: 'auto',
        flexGrow: 1,
       
    },
    schedule: {
        ...te.items,
        gridColumn: '1 / 2',
    },
    prestudy: {
        ...te.items,
        gridColumn: '1 / 2',
    },
    instudy: {
        ...te.items,
        gridColumn: '2 / 3',
    },
    rnr: {
        ...te.items,
        gridColumn: '2 / 3',
    },
    title: {
        fontSize: '20px',
    },

   

    
    
})
