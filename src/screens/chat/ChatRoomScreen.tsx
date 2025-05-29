import { StatusBar, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useGetSingleChatUserQuery } from '../../redux/features/chat/chatApi';
import { useGetProfileQuery } from '../../redux/features/profile/profileApi';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Image } from 'react-native';
import { NavigationProp } from '../../types/navigation.types';
import { ROUTES } from '../../constants/routes';
import { TextInput } from 'react-native';

const ChatRoomScreen = () => {
    const route = useRoute();
    const navigation = useNavigation<NavigationProp<typeof ROUTES.CHAT_ROOM>>();
    const { roomId } = route.params as { roomId: string };
    const { data: profileData } = useGetProfileQuery({});
    const { name, profileImg } = profileData?.data || '';
    ////////////////////////////////
    const [messages, setMessages] = useState<{ content: string; senderId: string }[]>([]);
    const { data: chatData } = useGetSingleChatUserQuery(roomId);

    // setMessages  সার্ভার থেকে মেসেজ লোড করুন
    useEffect(() => {
        if (chatData?.data) {
            setMessages(chatData?.data);
        }
    }, [chatData]);

    console.log(chatData);


    return (
        <>
            <StatusBar backgroundColor="#30333d" barStyle="light-content" />
            <View style={styles.container}>
                <View style={styles.nameAImg}>
                    <Icon name="arrow-back" size={25} color="white" onPress={() => navigation.navigate(ROUTES.CHAT_LIST)} />
                    <Image style={styles.chatImage} source={{ uri: profileImg }} />
                    <Text style={styles.username}>{name}</Text>
                </View>
                <View style={styles.callAMore}>
                    <Icon name="video-camera-front" size={25} color="white" />
                    <Icon name="call" size={25} color="white" />
                    <Icon name="more-vert" size={25} color="white" />
                </View>
            </View>
            <ScrollView style={styles.chattingMessage}>
                {messages?.map((msg, index) => (
                    <View key={index}>
                        <Text>{msg?.content}</Text>
                    </View>
                ))
                }
            </ScrollView>
            <View style={styles.sendMessageView}>
                <TextInput style={styles.messageInput} />
            </View>
        </>
    );
};

export default ChatRoomScreen;

const styles = StyleSheet.create({
    /////////////// chat room start //////////////
    container: {
        backgroundColor: '#30333d',
        height: 57,
        paddingVertical: 6,
        paddingHorizontal: 8,
        flexDirection: 'row',
        // alignItems: 'center',
        justifyContent: 'space-between',
    },
    nameAImg: {
        flexDirection: 'row',
        alignItems: 'center',
        // gap:15,
        // backgroundColor: 'blue',
        // justifyContent: 'space-between',
    },
    username: {
        color: 'white',
        fontWeight: 800,
        fontSize: 15,
        marginLeft: 8,
    },
    chatImage: {
        width: 42,
        height: 42,
        borderRadius: 50,
        marginLeft: 12,
    },
    callAMore: {
        flexDirection: 'row',
        alignItems: 'center',
        // backgroundColor: 'purple',
        gap: 19,
    },
    /////////////// chat room end //////////////

    /////////////////////////
    chattingMessage: {
        flex: 1,
        backgroundColor: 'rgb(27, 26, 31)',
    },
    // ////////////////////////////
    sendMessageView: {
        backgroundColor: 'rgb(12,54,15)',
        height:60,
    },
    messageInput:{
        width:300,
        backgroundColor:'rgb(66, 66, 71)',
    },
});

