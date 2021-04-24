import { MaterialCommunityIcons, FontAwesome5, Entypo, Fontisto, MaterialIcons } from '@expo/vector-icons';
import React, { useState } from 'react';


import { View, Text, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import style from './style'
import {
    API,
    Auth,
    graphqlOperation,
} from 'aws-amplify'

import { createMessage } from '../../src/graphql/mutations'
import { useEffect } from 'react';

const InputBox = (props) => {

    const {chatRoomID} = props;

    const [message, setMessage] = useState('');
    const [myUserID, setMyUserId] = useState(null);

useEffect(() => {
    const fetchUser = async () =>{
        const userInfo = await Auth.currentAuthenticatedUser();
        setMyUserId(userInfo.attributes.sub)
    }
    fetchUser();
}, [])

    const onMicrophonePress = () => { 
        console.log('send voice');
    }

    const onSendPress = async () => {
               try {
            await API.graphql(
                graphqlOperation(
                   createMessage, {
                    input:  {
                        content: message,
                        userID: myUserID,
                        chatRoomID,
                    }
                   }
                )
            )
        } catch (e) {
            console.log(e);
        }

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
