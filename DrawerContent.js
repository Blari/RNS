import React from 'react'
import { View, StyleSheet } from 'react-native'
import {
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper'
import {
    DrawerContentScrollView,
    DrawerItem,
} from '@react-navigation/drawer'
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export function DrawerContent(props) {

    const [isDarkTheme, setDarkTheme] = React.useState(false);

    const toggleSwitch = () => {
        setDarkTheme(!isDarkTheme);
    }

    return (
        <View style={{flex: 1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection} >
                        <View style={{flexDirection: 'row', marginTop: 15}}>
                            <Avatar.Image source={require('./assets/avatar.png')} size={54} />
                            <View style={{marginLeft: 15, flexDirection: 'column'}}>
                                <Title style={styles.title}>User Name</Title>
                                <Caption style={styles.caption}>@userName</Caption>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>80</Paragraph>
                                <Caption>Following</Caption>
                            </View>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>180</Paragraph>
                                <Caption>Followers</Caption>
                            </View>
                        </View>
                    </View>
                </View>
                <Drawer.Section style={styles.drawerSection}>
                    <DrawerItem
                        icon={({color, size}) => (
                            <Icon
                                name='home-outline'
                                color={color}
                                size={size}
                            />
                        )}
                        label='Home'
                        onPress={() => {props.navigation.navigate('Home')}}/>
                    <DrawerItem
                        icon={({color, size}) => (
                            <Icon
                                name='account-outline'
                                color={color}
                                size={size}
                            />
                        )}
                        label='Profile'
                        onPress={() => {}}/>
                    <DrawerItem
                        icon={({color, size}) => (
                            <Icon
                                name='bookmark-outline'
                                color={color}
                                size={size}
                            />
                        )}
                        label='Bookmarks'
                        onPress={() => {}}/>
                    <DrawerItem
                        icon={({color, size}) => (
                            <Icon
                                name='image-outline'
                                color={color}
                                size={size}
                            />
                        )}
                        label='Gallery'
                        onPress={() => {props.navigation.navigate('Gallery')}}/>
                    <DrawerItem
                        icon={({color, size}) => (
                            <Icon
                                name='map-outline'
                                color={color}
                                size={size}
                            />
                        )}
                        label='Map'
                        onPress={() => {props.navigation.navigate('Map')}}/>
                </Drawer.Section>
                <Drawer.Section title='Preferences' >
                    <TouchableRipple onPress={() => {toggleSwitch()}}>
                        <View style={styles.preference}>
                            <Text style={{color: '#323232'}}>Dark Theme</Text>
                            <View pointerEvents='none'>
                                <Switch value={isDarkTheme}/>
                            </View>
                        </View>
                    </TouchableRipple>
                </Drawer.Section>
                <Drawer.Section style={styles.bottomDrawerSection}>
                    <DrawerItem
                        icon={({color, size}) => (
                            <Icon
                                name='exit-to-app'
                                color={color}
                                size={size}
                            />
                        )}
                        label='Sing Out'
                        onPress={() => {}}/>
                </Drawer.Section>
            </DrawerContentScrollView>
        </View>

    )
}

const styles = StyleSheet.create({
    drawerContent: {

    },
    userInfoSection: {
        paddingLeft: 20,
        paddingBottom: 15,
        borderBottomColor: '#f4f4f4',
        borderBottomWidth: 1
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 18,
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1,
        position: 'relative',
        bottom: -50,
        left: 0
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
});
