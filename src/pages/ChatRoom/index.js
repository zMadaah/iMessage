import React from "react";
import { View, Text, Button } from "react-native";

import styles from "./chatRoomStyle";

//import auth from '@react-native-firebase/auth';
import { useNavigation } from "@react-navigation/native";


export default function ChatRoom(){
    const navigation = useNavigation();

    return(
        <View  style={styles.container}>
            <Text> Tela ChatRoom </Text>
            <Button title="Login" onPress={ () => navigation.navigate("SignIn")}/>
        </View>
    );
}


