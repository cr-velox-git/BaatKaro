import * as React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { View } from '../components/Themed';
import ChatListItem from '../components/ChatListItem';
import ChatRooms from '../data/ChatRooms';

import { useNavigation } from '@react-navigation/native';
import NewMessageButton from '../components/NewMessageButton';

import {API, graphqlOperation, Auth} from 'aws-amplify';
import { useEffect } from 'react';
import {getUser} from './queries'
import { useState } from 'react';


export default function ChatScreen() {

const [chatRooms, setChatRoom]  = useState([]);

useEffect(() => {
  const fetchChatRoom = async () =>{

    try {
      const userInfo = await Auth.currentAuthenticatedUser();
      const userData=await API.graphql(

        //already authenticated so not checking again
        graphqlOperation(
          getUser, {id: userInfo.attributes.sub}
        )
      )

      setChatRoom(userData.data.getUser.getChatRoomUser.items);
      console.log(userData);
    } catch (error) {
      console.log(error)
    }
  }
}, [])

  return (
    <View style={styles.container}>
      <FlatList
        style={{ width: '100%', backgroundColor: 'white' }}
        data={ChatRooms}
        renderItem={({ item }) => <ChatListItem chatRoom={item} />}
        keyExtractor={(item) => item.id}
      />

        <NewMessageButton />



    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
