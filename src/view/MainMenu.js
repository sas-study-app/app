import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class MainMenu extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.schedule}>
                    <Text>Study Schedule</Text>
                    <Text>Right now, it is {new Date().toString()}</Text>
                </View>
                <View style={styles.prestudy}>
                    <Text>Pre-Study</Text>
                </View>
                <View style={styles.instudy}>
                    <Text>In Study</Text>
                </View>
                <View style={styles.rnr}>
                    <Text>Rest & Relaxation</Text>
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
    },
}

const styles = StyleSheet.create({
    container: {
        display: 'grid',
        height: '100%',
        width: '100%',
        justifyItems: 'center',
        alignItems: 'stretch',
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
})
