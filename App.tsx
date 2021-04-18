import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

import Amplify from 'aws-amplify'
import config from './aws-exports'
Amplify.configure(config)

import { withAuthenticator } from 'aws-amplify-react-native'

import { Auth, API, graphqlOperation } from 'aws-amplify'
import { getUser } from './src/graphql/queries'
import { createUser } from './src/graphql/mutations'

const randomImage = [
  '',
  '',
  '',
  '',
  ''
]

function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

const getRandomImage = () => {
  return randomImage[Math.floor(Math.random() * randomImage.length)];
}

  //run this snippet onluy when App is first mounted
  useEffect(() => {
    const fetchUser = async () => {
      //get Authenticated user from Auth
      const userInfo = await Auth.currentAuthenticatedUser({ bypassCache: true });
      console.log(userInfo);

      if (userInfo) {
        // get the user from the Backend with the user Sub from Auth
        const userData = await API.graphql(
          graphqlOperation(
            getUser,
            { id: userInfo.attributes.sub }
          )
        )
        if (userData.data.getUser) {
          console.log("User is Already regestered");
          console.warn("User is Already regestered");
        }
        const newUser = {
          id: userInfo.attributes.sub,
          name: userInfo.username,
          imageUri: getRandomImage(),
          status: 'Hey, I am using this'
        
        }

        await API.graphql(
          graphqlOperation(
            createUser, {input: newUser}
          )
        )
      }
    }

    fetchUser();
  }, [])

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}

export default withAuthenticator(App)