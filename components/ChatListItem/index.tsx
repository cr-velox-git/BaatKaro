import React from 'react'
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import ChatRooms from '../../data/ChatRooms';
import Users from '../../data/Users';
import { ChatRoom } from "../../types"
import styles from './style';
import { Ionicons } from '@expo/vector-icons';
import moment from 'moment';
import { useNavigation } from '@react-navigation/native';

export type ChatListItemsProps = {
    chatRoom: ChatRoom;
}

const ChatListItems = (props: ChatListItemsProps) => {
    const { chatRoom } = props;

    const navigation = useNavigation();

    const user = chatRoom.users[1];

    const onCLick = () => {
        navigation.navigate('ChatRoomScreen', { 
            id: chatRoom.id,
            name: user.name,
        })
        // console.log(chatRoom.id);
    }

    return (
        <TouchableWithoutFeedback onPress = {onCLick}>
            <View style={styles.container}>
                <View style={styles.lefContainer}>
                    <Image source={{uri: user.imageUri }} style={styles.avatar} />
                    <View style={styles.midContainer}>
                        <Text style={styles.userName}>{user.name}</Text>
                        {/* <View style={styles.messageLine}>
                            <Ionicons name="checkmark-done" size={17} color="blue" /> */}
                            <Text style={styles.lastMessage}>{chatRoom.lastMessage.content}</Text>
                        {/* </View> */}
                    </View>
                </View>
                <Text style={styles.time}>
                    {moment(chatRoom.lastMessage.createdAT).format("DD/MM/YY")}
                </Text>
            </View>
        </TouchableWithoutFeedback>
    )
};

export default ChatListItems;