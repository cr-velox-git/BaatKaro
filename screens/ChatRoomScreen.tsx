import React from 'react';
import { FlatList, Text, ImageBackground } from 'react-native';

import { useRoute } from '@react-navigation/native';
import ChatMessage from '../components/ChatMessage';
import BC from '../assets/images/BC.jpg';
import InputBox from '../components/InputBox';

import {
    API,
    graphqlOperation,
    Auth
} from 'aws-amplify'

import { messagesByChatRoom } from '../src/graphql/queries'
import { useEffect } from 'react';
import { useState } from 'react';

const CharRoomScreen = () => {

const [message, setMeassage] = useState([]);
const [myId, setMyId] =useState(null);

    const route = useRoute();

    useEffect(() => {
        const fetchMessage = async () => {
            const messageData = await API.graphql(
                graphqlOperation(
                    messagesByChatRoom, {
                    chatRoomID: route.params.id,
                    sortDirection: "DESC",
                }
                )
            )
            console.log(messageData);
            setMeassage(messageData.data.messagesByChatRoom.items);
        }
        fetchMessage();
    }, [])

    useEffect(() => {
        const getMyId = async () => {
            const userInfo = await Auth.currentAuthenticatedUser();
            setMyId(userInfo.attributes.sub);
        }
        getMyId();
    }, [])

    return (
        <ImageBackground style={{ width: '100%', height: '100%' }} source={BC} >
            <FlatList
                data={message}
                renderItem={({ item }) => <ChatMessage myId = {myId} message={item} />}
                inverted
            />
            <InputBox chatRoomID={route.params.id} />
        </ImageBackground>

    );
}

export default CharRoomScreen;