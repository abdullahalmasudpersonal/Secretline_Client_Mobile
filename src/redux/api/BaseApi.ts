import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';
import Config from 'react-native-config';
import { RootState } from '../store';


const baseQuery = fetchBaseQuery({
  baseUrl: Config.SECRETLINE_BACKEND_URL,
  credentials: 'include',
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;

    if (token) {
      headers.set('authorization', `${token}`);
    }
    return headers;
  },
});

export const BaseApi = createApi({
  reducerPath: 'BaseApi',
  baseQuery: baseQuery,
  endpoints: () => ({}),
//   tagTypes: tagTypesList,
});
