import React from 'react'
import { View, Text, Button } from 'react-native'

const HomeScreen = ({navigation}) => {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>HomeScreen</Text>
            <Button
                onPress={() => navigation.navigate('ImageGallery')}
                title='SlideShowScreen'
            />

            <Button
                onPress={() => navigation.navigate('MapScreen')}
                title='Google Map'
            />
        </View>
    )
}

export default HomeScreen;
