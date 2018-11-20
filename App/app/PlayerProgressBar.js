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
    Slider,
    TouchableOpacity,
} from 'react-native';

import {
    Container,
    Button,
    Fab,
    Spinner,
    Card,
    CardItem,
    Left,
    Thumbnail,
    Body,
    Icon,
    Right,
} from 'native-base';
import TrackPlayer from 'react-native-track-player';
import { secondsToHms } from './secondsToHms';


export default class PlayerProgressBar extends TrackPlayer.ProgressComponent {
    render() {
        return (
            <View style={{ width: '100%' }}>
                <Text>{secondsToHms(this.state.bufferedPosition)}</Text>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingHorizontal: 10
                }}>
                    <Text>{secondsToHms(this.state.position)}</Text>
                    <Text>{secondsToHms(this.state.duration)}</Text>
                </View>
                <Slider
                    style={{ width: '100%', height: 30, borderRadius: 50 }}
                    value={this.state.position}
                    minimumTrackTintColor='red'
                    maximumTrackTintColor='green'
                    thumbTintColor='blue'
                    minimumValue={0}
                    maximumValue={this.state.duration}
                    step={1}
                    onValueChange={(value) => TrackPlayer.seekTo(value)} />
                <View>
                </View>
                <TouchableOpacity onPress={() => { this.play() }}>
                    <Icon name="play"
                        style={{
                            color: 'red',
                            fontSize: 25,
                        }} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {
                    TrackPlayer.pause();
                }}>
                </TouchableOpacity>
            </View>
        );
    }
}