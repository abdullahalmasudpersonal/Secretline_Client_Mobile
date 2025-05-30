import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Header from '../../components/Header/Header';
import { useGetAllChatUserQuery } from '../../redux/features/chat/chatApi';
import { formatDate } from '../../utils/lastMessageDateFormatting';
import { TChatUser } from '../../types/chat.types';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from '../../types/navigation.types';
import { ROUTES } from '../../constants/routes';

const ChatScreen = () => {
  const navigation = useNavigation<NavigationProp<typeof ROUTES.CHAT_LIST>>();
  const { data: allUserChat } = useGetAllChatUserQuery({});
  console.log(allUserChat?.data, 'alluserchat');

  return (
    <>
      <Header />
      <ScrollView style={styles.chatScreen}>
        {allUserChat?.data?.map((item: TChatUser,) => (
          <Pressable key={item?.chatId} onPress={() => navigation.navigate({ name: ROUTES.CHAT_ROOM, params: { roomId: item?.chatId, activeUserId: item.userId } })}>
            <View style={styles.chattingUser} key={item?.chatId}>
              <Image style={styles.chatImage} source={{ uri: item?.profileImg }} />
              <View style={styles.chattingUserInfoView}>
                <View style={styles.chattingUserNameAdateView}>
                  <Text style={styles.userNameColor}>{item?.name}</Text>
                  <Text style={styles.timeColor}>{formatDate(item?.lastMessage?.timestamp)}</Text>
                </View>
                <View style={styles.chattingUserNameAdateView}>
                  <Text style={styles.messageColor}>{item.lastMessage.content.length <= 40 ? <>{item.lastMessage.content}</> : <>{item.lastMessage.content.slice(0, 40) + '...'}</>}</Text>
                </View>
              </View>
            </View>
          </Pressable>
        ))}
      </ScrollView>
    </>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  chatScreen: {
    flex: 1,
    padding: 10,
    backgroundColor: '#272a33',
  },
  chattingUser: {
    height: 70,
    backgroundColor: 'pink',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
    // paddingHorizontal: 10,
  },
  chatImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  chattingUserInfoView: {
    flex: 1,
  },
  chattingUserNameAdateView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  /////// coler set ///////////
  userNameColor: {
    color: 'white',
    fontWeight: 'bold',
  },
  messageColor: {
    color: 'gray',
  },
  timeColor: {
    color: 'gray',
    fontWeight: 600,
  },

});
