import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Text from "react-native-web/src/exports/Text";

const height = 150;

export default class TopBar extends React.PureComponent {
    username = this.props.username || 'Test User';

    state = {
        width: Dimensions.get('window').width,
    }

    componentDidMount() {
        Dimensions.addEventListener('change', e => {
            this.setState({
                width: e.window.width,
            })
        })
    }

    render() {
        return (
            <View style={styles.main}>
                <View style={styles.username}>
                    <Text>{this.username}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main: {
        display: 'flex',
        flexDirection: 'row-reverse',
        height: '30px',
        alignItems: 'center',
    },
    username: {
        paddingLeft: '10px',
        paddingRight: '10px',
    },
})


