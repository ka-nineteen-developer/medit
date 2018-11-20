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
    FlatList,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
    Image,
} from 'react-native';
import TrackPlayer from 'react-native-track-player';
import FooterMenu from './FooterMenu';
// import { FlatList } from 'react-native-gesture-handler';
import {
    Body,
    Header,
    Title,
} from 'native-base';
import {getMeditList} from '../Services/DataServices';

const screenWidth = Dimensions.get('window').width;

export default class MeditCat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
    }

    render() {
        return (
            <View style={{flex:1}}>
                <Header>
                    <Body style={{
                        flexDirection: 'row',
                        justifyContent: 'center'
                    }}>
                        <Title>Medit</Title>
                    </Body>
                </Header>
                {this.state.list?
                <FlatList
                data={this.state.list}
                onEndReached={this.onReachedEnd}
                onEndReachedThreshold={0.5}
                numColumns={3}
                style={{ paddingBottom: 10 }}
                // refreshing={this.state.refreshing}
                // onRefresh={this.onRefresh.bind(this)}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => (
                    <TouchableOpacity
                        style={{
                            paddingBottom: 10,
                        }}
                        onPress={() => {  }}>
                        <Image
                            source={{ uri: item.thumbnail }}
                            style={[
                                { width: (screenWidth / 3) - 8 },
                                { height: (((screenWidth / 3) - 8) + (screenWidth / 5)) },
                                { backgroundColor: '#343434' },
                                { marginHorizontal: 4 },
                                { resizeMode: 'cover' },
                            ]}
                            />
                        <Text style={{ color: 'black' }}>{index + 1}</Text>
                    </TouchableOpacity>
                )}
            />:null}
                <FooterMenu navigation={this.props.navigation} />
            </View>
        );
    }

    componentDidMount() {
        console.log(this.state.list);
        getMeditList().then((res)=>{
            this.setState({list: res.more_apps});
            console.log(this.state.list);
        })
    }
}