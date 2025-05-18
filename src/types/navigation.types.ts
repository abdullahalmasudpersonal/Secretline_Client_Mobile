import { ROUTES } from '../constants/routes';

export type RootStackParamList = {
  [ROUTES.LOGIN]: undefined;
  [ROUTES.REGISTER]: undefined;
  [ROUTES.CHAT_LIST]: undefined;
  [ROUTES.CHAT_ROOM]: { roomId: string };
  [ROUTES.AUTH]: undefined;
};
