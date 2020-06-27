import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class MainMenu extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.schedule}>
                    <Text style={styles.title}>Study Schedule</Text>
                </View>
                <View style={styles.prestudy}>
                    <Text style={styles.title}>Pre-Study</Text>
                </View>
                <View style={styles.instudy}>
                    <Text style={styles.title}>In Study</Text>
                </View>
                <View style={styles.rnr}>
                    <Text style={styles.title}>Rest & Relaxation</Text>
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
        alignItems: 'center',
        flexBasis: 'center',
        justifyContent: 'space-around',
    },
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
