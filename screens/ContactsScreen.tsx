import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';
import Users from '../data/Users';
import { FlatList } from 'react-native-gesture-handler';
import ContactListItems from '../components/ContactsListItem';




export default function ChatScreen() {
  return (
    <View style={styles.container}>
      <FlatList
      style={{width: '100%'}}
        data={Users}
        renderItem={({item})=><ContactListItems user={item}/>}
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
