import { MaterialCommunityIcons, FontAwesome5, Entypo, Fontisto, MaterialIcons } from '@expo/vector-icons';
import React, { useState } from 'react';


import { View, Text, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import style from './style'

const InputBox = () => {

    const [message, setMessage] = useState('');

    const onMicrophonePress = () => { 
        console.log('send voice');
    }

    const onSendPress = () => {
        console.log('send message');
        console.warn('Sending ${message}');

        // send a message to the backend

        setMessage('');
     }

    const onPress = () => {
        if (!message) {
            onMicrophonePress();
        } else {
            onSendPress();
        }
    }

    return (
        <View style={style.container}>
            <View style={style.mainContainer}>
                <FontAwesome5 name="laugh-beam" size={24} color={'gray'} />
                <TextInput
                    placeholder={"Type a message"}
                    style={style.textInput}
                    multiline
                    value={message}
                    onChangeText={setMessage}
                />
                <Entypo name="attachment" size={20} color={'gray'} style={style.icon} />
                {!message && <Fontisto name="camera" size={20} color={'gray'} style={style.icon} />}

            </View>
            <TouchableOpacity onPress={onPress}>
                <View style={style.buttonContainer}>
                    {!message ?
                        <MaterialCommunityIcons name="microphone" size={24} color={'white'} />
                        : <MaterialIcons name="send" size={24} color={'white'} />
                    }
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default InputBox;

function initialState(initialState: any, arg1: string): [any, any] {
    throw new Error('Function not implemented.');
}
