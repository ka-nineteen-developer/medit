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
} from 'react-native';
import TrackPlayer from 'react-native-track-player';
import PlayerProgressBar from '../../app/PlayerProgressBar'

const soundURL = 'http://www.noiseaddicts.com/samples_1w72b820/3910.mp3';

export default class MediaPlayer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            state: '',
            // position: TrackPlayer.getPosition(),
            // buffered: await TrackPlayer.getBufferedPosition(),
            duration: 0,
            currentDuration: 0
        }
    }

    render() {
        // TrackPlayer.getDuration().then(duration=>this.setState({duration: duration}))
        // TrackPlayer.position().then(bufferedPosition=>this.setState({bufferedPosition: bufferedPosition}))
        return (
            <View style={styles.container}>
            <PlayerProgressBar />
                <TouchableOpacity onPress={() => { this.play() }}>
                    <Text style={styles.instructions}>Play</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {
                    TrackPlayer.pause();
                }}>
                    <Text style={styles.instructions}>pause</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {
                    TrackPlayer.stop();
                }}>
                    <Text style={styles.instructions}>stop</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {
                    TrackPlayer.reset();
                }}>
                    <Text style={styles.instructions}>reset</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {
                    this.currentStatus();
                }}>
                    <Text style={styles.instructions}>reset</Text>
                </TouchableOpacity>

            </View>
        );
    }

    componentDidMount() {
        TrackPlayer.setupPlayer().then(async () => {

            // Adds a track to the queue
            await TrackPlayer.add({
                id: 'trackId',
                url: soundURL,
                // duration: 100,
                title: 'Track Title',
                artist: 'Track Artist',
                artwork: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'
            });

        });
    }

    play = () => {
        TrackPlayer.play();
        // TrackPlayer.getBufferedPosition().then((data)=>{
        //     console.log(data);
        // })
        // TrackPlayer.getDuration().then((Duration) => {
        //     console.log('getDuration' + Duration);
        // })
        // TrackPlayer.position().then((position) => {
        //     console.log('position' + position);
        // })

    }

    async currentStatus() {
        let state = await TrackPlayer.getState();
        console.log(state);
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
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
