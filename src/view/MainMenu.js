import React from 'react';
import { ImageBackground, Text, View, StyleSheet, Button} from 'react-native';
import { Link } from "react-router-native";

const pres = () => {

}


export default class MainMenu extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.column}>
                    <ImageBackground source = {require('./studysch.png')} style={styles.schedule} resizeMode = 'contain'>
                        <Text style={styles.title}> </Text>
                    </ImageBackground>
                    <ImageBackground source = {require('./prestudy.png')} style={styles.prestudy} resizeMode = 'contain'>
                        <Text style={styles.title}> </Text>
                    </ImageBackground>
                </View>
                <View style={styles.column}>
                    <ImageBackground source = {require('./instudy.png')} style={styles.instudy} resizeMode = 'contain'>
                        <Text style={styles.title}> </Text>
                    </ImageBackground>
                    <Link to="/rnr" style={styles.links}>
                    <ImageBackground source = {require('./randr.png')} style={styles.rnr}  resizeMode = 'contain'>
                        <Text style={styles.title}> </Text>
                    </ImageBackground>
                    </Link>
                </View>
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
        alignItems: 'stretch',
        height: '40%',
        flexBasis: 'center',
        justifyContent: 'space-around',
    }
}



const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        height: '100%',
        alignItems: 'stretch',
        alignContent: 'stretch',
        justifyContent: 'space-evenly',
        margin: '0',
        flexGrow: 1,
    },
    column: {
        display: 'flex',
        margin: '0',
        justifyContent: 'space-evenly',
        width: '45%',
        height: '100%',
        alignItems: 'stretch',
        alignContent: 'stretch',
        flexDirection: 'column',
    },
    schedule: te.items,
    prestudy: te.items,
    instudy: te.items,
    rnr: {
        height: '100%',
        width: '100%',
    },
    title: {
        fontSize: '20px',
    },
    links: te.items,
})
