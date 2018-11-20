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

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default class FooterMenu extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
                <View style={{
                    backgroundColor: 'red',
                    position: 'absolute',
                    bottom: 5,
                    right: 5,
                }}>
                    <TouchableOpacity
                        style={{padding:15}}
                        onPress={()=>{this.props.navigation.openDrawer();}}
                    >
                        <Icon name="menu" style={{
                            fontSize: 35,
                            color: 'white',
                            fontWeight: 'bolder'
                        }} />
                    </TouchableOpacity>
                </View>
        );
    }
}