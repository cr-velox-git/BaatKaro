import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback
} from "react-native";
import { ChatRoom } from "../../types";
import styles from "./style";
import moment from "moment";
import { useNavigation } from '@react-navigation/native';
import {
  Auth,
} from 'aws-amplify';

export type ChatListItemsProps = {
    chatRoom: ChatRoom;
}

const ChatListItems = (props: ChatListItemsProps) => {
    const { chatRoom } = props;
    const [otherUser, setOtherUser] = useState(null);

    const navigation = useNavigation();
    // const user = chatRoom.chatRoomUsers.item.users[0].user;

    useEffect(() => {
        const getOtherUser = async () => {
            const userInfo = await Auth.currentAuthenticatedUser();
            if (chatRoom.chatRoomUsers.item[0].user.id === userInfo.attributes.sub) {
                setOtherUser(chatRoom.chatRoomUsers.item.users[1].user);
            } else {
                setOtherUser(chatRoom.chatRoomUsers.item.users[0].user);
            }
        }
        getOtherUser();
    }, [])

    const onCLick = () => {
        navigation.navigate('ChatRoomScreen', {
            id: chatRoom.id,
            name: otherUser.name,
        })
        // console.log(chatRoom.id);
    }

if(!otherUser){
    return null;
}

    return (
        <TouchableWithoutFeedback onPress={onCLick}>
            <View style={styles.container}>
                <View style={styles.lefContainer}>
                    <Image source={{ uri: otherUser.imageUri }} style={styles.avatar} />
                    <View style={styles.midContainer}>
                        <Text style={styles.userName}>{otherUser.name}</Text>
                        {/* <View style={styles.messageLine}>
                            <Ionicons name="checkmark-done" size={17} color="blue" /> */}
                        <Text numberOfLines={2} style={styles.lastMessage}>{chatRoom.lastMessage ? chatRoom.lastMessage.content : ""}</Text>
                        {/* </View> */}
                    </View>
                </View>
                <Text style={styles.time}>
                    {chatRoom.lastMessage && moment(chatRoom.lastMessage.createdAT).format("DD/MM/YY")}
                </Text>
            </View>
        </TouchableWithoutFeedback>
    )
};

export default ChatListItems;