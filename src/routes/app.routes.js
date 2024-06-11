import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

/* Screens */
import ChatRoom from '../pages/ChatRoom';
import SignIn from '../pages/SignIn';
import Messages from '../pages/Messages';

const AppStack = createNativeStackNavigator();

function AppRoutes() {
  return (
    <AppStack.Navigator initialRouteName="ChatRoom">
      <AppStack.Screen 
        name="SignIn"
        component={SignIn}
        options={{
          title: 'Faça o login',
        }}
      />

      <AppStack.Screen
        name="ChatRoom"
        component={ChatRoom}
        options={{
          headerShown:false
        }}
      />

      <AppStack.Screen
        name="Messages"
        component={Messages}
        options= { ({routes}) => ({
            title:route.params.thread.name
        })}
      />
    </AppStack.Navigator>
  )
}

export default AppRoutes;