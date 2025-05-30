import { Button, StatusBar, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useGetSingleChatUserQuery } from '../../redux/features/chat/chatApi';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Image } from 'react-native';
import { NavigationProp } from '../../types/navigation.types';
import { ROUTES } from '../../constants/routes';
import { TextInput } from 'react-native';
import { useAppSelector } from '../../redux/hooks';
import { selectCurrentUser } from '../../redux/features/auth/authSelectors';
import { useGetSingleUserQuery } from '../../redux/features/user/userApi';
import EmojiSelector, { Categories } from 'react-native-emoji-selector';
import Emoji from 'react-native-emoji';

const ChatRoomScreen = () => {
    const route = useRoute();
    const currentUser = useAppSelector(selectCurrentUser);
    const navigation = useNavigation<NavigationProp<typeof ROUTES.CHAT_ROOM>>();
    const { roomId, activeUserId } = route.params as { roomId: string, activeUserId: string };
    /////////////////////// active user/ selected user //////////////
    const { data: activeUserData } = useGetSingleUserQuery(activeUserId, {
        // pollingInterval: 1000,
        // skipPollingIfUnfocused: true,
    });
    const { name, profileImg } = activeUserData?.data || {};

    ////////////////////////////////
    const [messages, setMessages] = useState<{ content: string; senderId: string }[]>([]);
    const { data: chatData } = useGetSingleChatUserQuery(roomId);
    // console.log(chatData, 'chatdatas');

    // setMessages  সার্ভার থেকে মেসেজ লোড করুন
    useEffect(() => {
        if (chatData?.data) {
            setMessages(chatData?.data);
        }
    }, [chatData]);

    // console.log(chatData);


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

            {/* ------ View message part ----------------- */}
            <ScrollView style={styles.chattingMessage}>
                {messages?.map((msg, index) => (
                    <View key={index}>
                        <Text style={msg?.senderId && currentUser?.userId && msg?.senderId === currentUser?.userId ? styles.viewMessageSelf : styles.viewMessageReciver} >{msg?.content}</Text>
                    </View>
                ))
                }
            </ScrollView>

            {/* ------ Send message part ------------------ */}
            <View style={styles.sendMessageView}>
               <Emoji name="coffee" style={{fontSize: 50}} />
                <TextInput style={styles.messageInput} />
                <Icon style={styles.sentIcon} name="send" size={25} color="white" />
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

    ///////////// view message part ////////////////
    chattingMessage: {
        flex: 1,
        backgroundColor: 'rgb(80, 76, 94)',
        padding: 10,
    },
    viewMessageSelf: {
        fontWeight: 700,
        color: 'rgb(255, 255, 255)',
        backgroundColor: 'rgb(44, 46, 121)',
        padding: 10,
        borderRadius: 7,
        fontSize: 15,
        marginVertical: 5,
        // width:'auto',
        alignSelf: 'flex-end',
    },
    viewMessageReciver: {
        fontWeight: 700,
        color: 'rgb(255, 255, 255)',
        backgroundColor: 'rgb(37, 46, 58)',
        padding: 10,
        borderRadius: 7,
        marginVertical: 5,
        fontSize: 15,
        alignSelf: 'flex-start',
    },

    ////////////// send message part ////////////////
    sendMessageView: {
        backgroundColor: 'rgb(54, 56, 63)',
        height: 60,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',

    },
    messageInput: {
        width: 300,
        height: 45,
        maxHeight: 150,
        paddingHorizontal: 10,
        borderRadius: 10,
        backgroundColor: 'rgb(101, 101, 122)',
        // position: 'relative',
    },
    sentIcon: {
        // position: 'absolute',
        // marginRight: 10,
    },
});

