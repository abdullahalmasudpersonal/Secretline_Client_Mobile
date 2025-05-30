import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { useAppSelector } from '../../redux/hooks';
import { selectCurrentUser } from '../../redux/features/auth/authSelectors';
import Icon from 'react-native-vector-icons/MaterialIcons';


// type Props = {
//   onBack?: () => void;
//   onOptionsPress?: () => void;
// };

const Header = () => {
  const user = useAppSelector(selectCurrentUser);
  console.log(user);

  return (
    <>
      <StatusBar backgroundColor="#30333d" barStyle="light-content" />
      <View style={styles.container}>
        <View style={styles.maniAtitleView}>
          <Icon name="menu" size={30} color="white" />
          <Text style={styles.title}>Secretline</Text>
        </View>
         {/* <Icon name="menu" size={30} color="white" />
         <Text style={styles.title}>Secretline</Text> */}
        <Icon name="more-vert" size={30} color="white" />
      </View>
    </>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingLeft: 15,
    backgroundColor: '#30333d',
    // backgroundColor: 'gray',
    height: 57,
    flexDirection: 'row',
     alignItems: 'center',
     justifyContent:'space-between',
  },
  maniAtitleView: {
    flexDirection: 'row',
     alignItems: 'center',
  },
  title: {
     color: 'white',
     fontWeight: 'bold',
     fontSize: 25,
     marginLeft:20,
  },
});

