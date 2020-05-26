import React from "react";

import Icon from "react-native-vector-icons/Ionicons";
import MainScreen from "./MainScreen";
import SlideShowScreen from "./SlideShowScree";
import MapScreen from "./MapScreen";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import {createStackNavigator} from "@react-navigation/stack";

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
    <Tab.Navigator
        initialRouteName="Feed"
        activeColor="#fff"
        style={{ backgroundColor: 'black' }}
    >
        <Tab.Screen
            name="Home"
            component={ HomeStackScreen }
            options={{
                tabBarLabel: 'Home',
                tabBarColor: '#0074D9',
                tabBarIcon: ({ color }) => (
                    <Icon name="ios-home" color={color} size={26} />
                ),
            }}
        />
        <Tab.Screen
            name="Gallery"
            component={ ImageStackScreen }
            options={{
                tabBarLabel: 'Gallery',
                tabBarColor: '#006E2E',
                tabBarIcon: ({ color }) => (
                    <Icon name="ios-images" color={color} size={26} />
                ),
            }}
        />
        <Tab.Screen
            name="Map"
            component={ MapStackScreen }
            options={{
                tabBarLabel: 'Map',
                tabBarColor: '#8b00ff',
                tabBarIcon: ({ color }) => (
                    <Icon name="ios-map" color={color} size={26} />
                ),
            }}
        />
        <Tab.Screen
            name="Profile"
            component={ Map2StackScreen }
            options={{
                tabBarLabel: 'Map',
                tabBarColor: '#8b00ff',
                tabBarIcon: ({ color }) => (
                    <Icon name="ios-person" color={color} size={26} />
                ),
            }}
        />
    </Tab.Navigator>
)

export default MainTabScreen;

const HomeStack = createStackNavigator();
const ImageStack = createStackNavigator();
const MapStack = createStackNavigator();

const HomeStackScreen = ({navigation}) => {
    return (
        <HomeStack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: '#0074D9',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold'
            },
        }}>
            <HomeStack.Screen name="Home" component={MainScreen} options={{
                title: 'Main Screen',
                headerLeft: () => (
                    <Icon.Button
                        name='ios-menu'
                        size={30}
                        marginLeft={15}
                        backgroundColor='#0074D9'
                        onPress={() => {
                            navigation.openDrawer()
                        }}/>
                )
            }}/>
        </HomeStack.Navigator>
    )
}
const ImageStackScreen = ({navigation}) => {
    return (
        <ImageStack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: '#006E2E',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold'
            }
        }}>
            <ImageStack.Screen name="ImageGallery" component={SlideShowScreen} options={{
                title: 'Image Gallery Screen',
                headerLeft: () => (
                    <Icon.Button
                        name='ios-menu'
                        size={30}
                        marginLeft={15}
                        backgroundColor='#006E2E'
                        onPress={() => {
                            navigation.openDrawer()
                        }}/>
                )
            }}/>
        </ImageStack.Navigator>
    )
}
const MapStackScreen = ({navigation}) => {
    return (
        <MapStack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: '#8b00ff',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold'
            }
        }}>
            <MapStack.Screen name="MapScreen" component={MapScreen} options={{
                title: 'Google Map Screen',
                headerLeft: () => (
                    <Icon.Button
                        name='ios-menu'
                        size={30}
                        marginLeft={15}
                        backgroundColor='#8b00ff'
                        onPress={() => {
                            navigation.openDrawer()
                        }}/>
                )
            }}/>
        </MapStack.Navigator>
    )
}
const Map2StackScreen = ({navigation}) => {
    return (
        <MapStack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: '#8b00ff',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold'
            }
        }}>
            <MapStack.Screen name="MapScreen" component={MapScreen} options={{
                title: 'Google Map Screen',
                headerLeft: () => (
                    <Icon.Button
                        name='ios-menu'
                        size={30}
                        marginLeft={15}
                        backgroundColor='#8b00ff'
                        onPress={() => {
                            navigation.openDrawer()
                        }}/>
                )
            }}/>
        </MapStack.Navigator>
    )
}
