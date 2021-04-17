import React from 'react';
import { View } from 'react-native';
import style from './style';
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const NewMessageButton = () => {
    
    const navigation = useNavigation();

    const onPress = () => {
        navigation.navigate('Contacts');
    }
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={style.container}>
                <MaterialCommunityIcons name='message-reply-text' size={35} color={'white'} />
            </View>
        </TouchableOpacity>

    )
}

export default NewMessageButton;