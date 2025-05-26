import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Header from '../../components/Header/Header';
import { useGetAllChatUserQuery } from '../../redux/features/chat/chatApi';
import { formatDate } from '../../utils/lastMessageDateFormatting';
import { TChatUser } from '../../types/chat.types';

const ChatScreen = () => {
  const { data: allUserChat } = useGetAllChatUserQuery({});
  console.log(allUserChat?.data, 'alluserchat');

  return (
    <>
      <Header />
      <ScrollView style={styles.chatScreen}>
        {allUserChat?.data?.map((item:TChatUser, index:number) => (
          <View style={styles.chattingUser} key={index}>
            <Image style={styles.chatImage} source={{ uri: item?.profileImg }} />
            <View style={{ flex: 1 }}>
              <View style={styles.chattingUserNameAdateView}>
                <Text>{item?.name}</Text>
                <Text>{formatDate(item?.lastMessage?.timestamp)}</Text>
              </View>
               <View style={styles.chattingUserNameAdateView}>
                <Text>{item?.name}</Text>
              </View>
            </View>
          </View>
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
    backgroundColor: 'gray',
    flexDirection: 'row',
    alignItems: 'center',
    gap:7,
    paddingHorizontal: 10,
  },
  chatImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  chattingUserNameAdateView:{
    flexDirection:'row',
    justifyContent:'space-between',
    //  width: '100%',
  },

});
