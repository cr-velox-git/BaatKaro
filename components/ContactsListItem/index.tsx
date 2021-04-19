import React from 'react'
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import { Users } from "../../types"
import styles from './style';

import { useNavigation } from '@react-navigation/native';

import { API, graphqlOperation, Auth } from 'aws-amplify';
import { createChatRoom, createChatRoomUser } from '../../src/graphql/mutations';

export type ChatListItemsProps = {
    user: Users;
}

const ContactListItems = (props: ChatListItemsProps) => {
    const { user } = props;

    const navigation = useNavigation();

    const onCLick = async () => {
        try {

            // 1. create a new chat room
            const newChatRoomData = await API.graphql(
                graphqlOperation(
                    createChatRoom, { input: {} }
                )
            )

            if (!newChatRoomData.data) {
                console.log("fail to create chat room")
                return;
            }

            const newChatRoom = newChatRoomData.data.createChatRoom;

            // 2. And 'user' to the Chat Room
            await API.graphql(
                graphqlOperation(
                    createChatRoomUser, {
                    inpute: {
                        userID: user.id,
                        chatRoomID: newChatRoom.id,
                    } 
                }
                )
            )

            //3. Add authentication user to the Chat room
            const userInfo = await Auth.currentAuthenticatedUser();
            await API.graphql(
                graphqlOperation(
                    createChatRoomUser, {
                    input: {
                        userID: userInfo.attribute.sub,
                        chatRoomID: newChatRoom.id,
                    }
                }
                )
            )

            navigation.navigate('ChatRoomScreen', {
                id: newChatRoom.id,
                name: user.name,
            })

        } catch (error) {
            console.log(error)
        }
    }

    return (

        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={onCLick}>
                <View style={styles.lefContainer}>
                    <Image source={{ uri: user.imageUri }} style={styles.avatar} />
                    <View style={styles.midContainer}>
                        <Text style={styles.userName}>{user.name}</Text>
                        <Text style={styles.status}>{user.status}</Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </View>

    )
};

export default ContactListItems;