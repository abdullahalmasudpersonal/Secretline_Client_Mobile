import { StatusBar, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { useRoute } from '@react-navigation/native';
// import { useGetSingleChatUserQuery } from '../../redux/features/chat/chatApi';
import { useGetProfileQuery } from '../../redux/features/profile/profileApi';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Image } from 'react-native';

const ChatRoomScreen = () => {
    const route = useRoute();
    const { roomId } = route.params as { roomId: string };
    const { data: profileData } = useGetProfileQuery({});
    //   const profileData = data?.data || "";
    // const { data: chatData } = useGetSingleChatUserQuery(roomId);
    const { name, profileImg } = profileData?.data || '';
    console.log(profileData);


    return (
        < >
            <StatusBar backgroundColor="#30333d" barStyle="light-content" />
            <View style={styles.container}>
                <View>
                    <Image style={styles.chatImage} source={{ uri: profileImg }} />
                    <Text>{name}</Text>
                </View>
                <Icon name="more-vert" size={30} color="white" />
            </View>
            {/* <ScrollView>
                <View>
                    <Text>ChatRoomScreen</Text>
                    <Text>{roomId}</Text>
                </View>
            </ScrollView> */}
        </>
    );
};

export default ChatRoomScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#30333d',
        height: 57,
        padding: 6,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    chatImage: {
        width: 50,
        height: 50,
        borderRadius: 50,
    },
});

