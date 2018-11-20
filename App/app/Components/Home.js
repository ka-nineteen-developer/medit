/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    ImageBackground,
    Image,
    Dimensions,
} from 'react-native';
import {
    Container,
    Header,
    Content,
    Footer,
    FooterTab,
    Button,
    Icon
} from 'native-base';
import TrackPlayer from 'react-native-track-player';
import { DrawerActions } from 'react-navigation';
import { ScrollView } from 'react-native-gesture-handler';

import FooterMenu from './FooterMenu';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ImageBackground source={{
                uri: 'https://media1.tenor.com/images/82ff193d463be9b3baecfc243b016065/tenor.gif'
            }}
                style={{
                    resizeMode: 'contain',
                    backgroundColor: 'red',
                    flex: 1
                }} >
                <FooterMenu navigation={ this.props.navigation } />
            </ImageBackground>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
