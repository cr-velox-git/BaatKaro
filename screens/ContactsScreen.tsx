import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';
import Users from '../data/Users';
import { FlatList } from 'react-native-gesture-handler';
import ContactListItems from '../components/ContactsListItem';
import { graphqlOperation } from '@aws-amplify/api-graphql';

import { listUsers } from '../src/graphql/queries';
import { useEffect } from 'react';
import { API } from 'aws-amplify';
import { useState } from 'react';

export default function ChatScreen() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersData = await API.graphql(
          graphqlOperation(listUsers)
        )
        setUsers(usersData.data.listUsers.items);
        console.log(usersData)
      } catch (e) {
        console.log(e)
      }
    }
  }, [])

  return (
    <View style={styles.container}>
      <FlatList
        style={{ width: '100%' }}
        data={Users}
        renderItem={({ item }) => <ContactListItems user={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  }
});
