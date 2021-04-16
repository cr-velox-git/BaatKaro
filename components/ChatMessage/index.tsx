import moment from 'moment';
import React from 'react';
import style from './style';
import { View, Text } from 'react-native';
import { Message } from "../../types";
import Colors from '../../constants/Colors';


export type ChatMessageProps = {
    message: Message;
}

const ChatMessage = (props: ChatMessageProps) => {
    const { message } = props;

    const isMyMessage = () => {
        return message.user.id === 'u1';
    }

    return (
        <View style={style.container}>
            <View style={[
                style.messageBox,
                {
                    backgroundColor: isMyMessage() ? '#DCF8C5' : Colors.light.tint,
                    marginRight: isMyMessage() ? 50 : 0,
                    marginLeft: isMyMessage() ? 0 : 50,

                }
            ]}>
                {!isMyMessage() && <Text style={style.name}>{message.user.name}</Text>}
                <Text style={style.message}>{message.content}</Text>
                <Text style={style.time}> { moment(message.createdAT).fromNow}</Text>
        </View>
        </View >
    )
}

export default ChatMessage;