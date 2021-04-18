import React from 'react'
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import { Users } from "../../types"
import styles from './style';

import { useNavigation } from '@react-navigation/native';

export type ChatListItemsProps = {
    user: Users;
}

const ContactListItems = (props: ChatListItemsProps) => {
    const { user } = props;

    const navigation = useNavigation();

    const onCLick = () => {
        // navigate to chat room with this user
    }

    return (
        <TouchableWithoutFeedback onPress = {onCLick}>
            <View style={styles.container}>
                <View style={styles.lefContainer}>
                    <Image source={{uri: user.imageUri }} style={styles.avatar} />
                    <View style={styles.midContainer}>
                        <Text style={styles.userName}>{user.name}</Text>
                        <Text style={styles.status}>{user.status}</Text>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
};

export default ContactListItems;