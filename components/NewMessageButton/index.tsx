import React from 'react';
import { View } from 'react-native';
import style from './style';
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const NewMessageButton = () => {

    const navigation = useNavigation();

    const onPress = () => {
        navigation.navigate('ContactsScreen');
    }
    return (

        <View style={style.container}>
            <TouchableOpacity onPress={onPress}>
                <MaterialCommunityIcons
                    name='message-reply-text'
                    size={35}
                    color={'white'} />
            </TouchableOpacity>
        </View>




    )
}

export default NewMessageButton;