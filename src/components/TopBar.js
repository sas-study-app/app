import React from 'react';
import { View, StyleSheet, Dimensions, Image } from 'react-native';
import Text from "react-native-web/src/exports/Text";

const height = 150;

export default class TopBar extends React.PureComponent {
    username = this.props.username || 'Test User';
    //icon = document.createElement('icon');
    //icon.s = 'icon.png';<Image
      /*  style={styles.icon}
        source={{ uri:
            'icon.png', }}/>*/

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
                    <Image source={require('./Images/icon.png')} style = {styles.icon}></Image>
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
        flexDirection: 'row-reverse',
        
    },

    

    icon: {
        display: 'flex',
        flexDirection: 'row',
        height: '20px',
        width: '20px',
        alignItems: 'center',
        marginHorizontal: 5,
    },
})


