import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useAppSelector } from '../../redux/hooks';
import { selectCurrentUser } from '../../redux/features/auth/authSelectors';

// type Props = {
//   onBack?: () => void;
//   onOptionsPress?: () => void;
// };

const Header = () => {
  const user = useAppSelector(selectCurrentUser);

  return (
    <>
      {/* <StatusBar backgroundColor="blue" barStyle="light-content" /> */}
      <View>
        <Text>Secretline</Text>
      </View>
    </>
  );
};

export default Header;

const styles = StyleSheet.create({

});
// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: '#075E54',
//     padding: 12,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//   },
//   info: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 10,
//   },
//   avatar: {
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//     marginHorizontal: 10,
//   },
//   name: {
//     color: '#fff',
//     fontWeight: '600',
//     fontSize: 16,
//   },
//   status: {
//     color: '#d4d4d4',
//     fontSize: 12,
//   },
// });
