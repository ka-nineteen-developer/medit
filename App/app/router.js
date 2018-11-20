import React from 'react';
import {
    createStackNavigator,
    createAppContainer,
    DrawerItems,
    createDrawerNavigator
} from 'react-navigation';
import {
    Text,
    Image,
    View,
    TouchableOpacity,
    Linking,
} from 'react-native';
import Home from './Components/Home';
import MeditCat from './Components/MeditCat';
import NatureCat from './Components/NatureCat';
import SleepCat from './Components/SleepCat';


const CustomDrawerContentComponent = (props) => (
    <View style={{ flex: 1 }}>
        <DrawerItems {...props}
            drawerBackgroundColor={{ color: '#000000' }}
            labelStyle={{
                color: 'black',
                fontSize: 15,
            }}
            activeLabelStyle = {{
                color: 'red',
            }}
            itemsContainerStyle={{
                borderTopWidth: 0.5,
                borderTopColor: 'blue',
            }}
        />

        <Text style={{
            position: 'absolute',
            bottom: 0,
            paddingVertical: 5,
            color: 'gray',
            width: '100%',
            textAlign: 'center',
        }}>v1</Text>
    </View>
);

const DrawerNavigator = createDrawerNavigator({
    Home: {
        screen: Home
    },
    Medit: {
        screen: MeditCat
    },
    Nature: {
        screen: NatureCat
    },
    Sleep: {
        screen: SleepCat
    }
}, {
    initialRouteName: 'Medit',
    drawerBackgroundColor: 'white',
    contentComponent: CustomDrawerContentComponent,
    drawerPosition: 'right',
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'Drawerclose',
    drawerToggleRoute: 'DrawerToggle',
    }
);


export default App = createAppContainer(DrawerNavigator);