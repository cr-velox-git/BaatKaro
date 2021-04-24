export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
  ChatRoomScreen: undefined;
  ContactsScreen: undefined;
};

export type MainTabParamList = {
  Camera: undefined;
  Chats: undefined;
  Status: undefined;
  Calls: undefined;
};

export type TabOneParamList = {
  TabOneScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

export type CameraParamList = {
  TabTwoScreen: undefined;
};
export type ChatsParamList = {
  ChatScreen: undefined;
};
export type StatusParamList = {
  TabTwoScreen: undefined;
};

export type CallsParamList = {
  TabTwoScreen: undefined;
};

export type User = {
id: String;
name: string;
imageUri: String;
status: String;
}


export type Message = {
  id: String;
  content: string;
  createdAt: string;
  user: User;
}

export type ChatRoom = {
  id: String;
  users: User[];
  lastMessage: Message;
}
