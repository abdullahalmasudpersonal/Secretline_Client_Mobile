import { baseApi } from '../../api/baseApi';
import { tagTypes } from '../../types/tagTypes';

const chatApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createChattingRoom: builder.mutation({
      query: (data) => ({
        url: '/chat/create-chat',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: [tagTypes.chat],
    }),
    getAllChatUser: builder.query({
      query: () => ({
        url: '/chat/get-all-chatting-user-single-member',
        method: 'GET',
      }),
      providesTags: [tagTypes.message, tagTypes.chat],
    }),
    // getSingleMemberAllUserChat: builder.query({
    //   query: () => ({
    //     url: "/message/get-all-user-chat-single-member",
    //     method: "GET",
    //   }),
    //   providesTags: [tagTypes.message, tagTypes.chat],
    // }),
    getSingleChatUser: builder.query({
      query: (chatId) => ({
        url: `/message/get-single-user-chat-single-member/${chatId}`,
        method: 'GET',
      }),
      providesTags: [tagTypes.message, tagTypes.chat],
    }),
  }),
});

export const {
  useCreateChattingRoomMutation,
  useGetAllChatUserQuery,
  // useGetAllChattingUserSingleMemberQuery,
  useGetSingleChatUserQuery,
} = chatApi;
