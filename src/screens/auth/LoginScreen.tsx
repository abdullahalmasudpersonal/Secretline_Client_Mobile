import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
    Alert,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import { ROUTES } from '../../constants/routes';
import { NavigationProp } from '../../types/navigation.types';
import { useLoginMutation } from '../../redux/features/auth/authApi';
import { setUser, TUser } from '../../redux/features/auth/authSlice';
import { verifyToken } from '../../utils/verifyToken';
import { useAppDispatch } from '../../redux/hooks';

//  type NavigationProp = NativeStackNavigationProp<RootStackParamList, typeof ROUTES.LOGIN>;
const Loginscreen = () => {
    // const navigation = useNavigation<NavigationProp>();
    const navigation = useNavigation<NavigationProp<typeof ROUTES.LOGIN>>();
    const dispatch = useAppDispatch();
    const [email, setEmail] = useState('abdullah@gmail.com');
    const [password, setPassword] = useState('123456');
    const [login] = useLoginMutation();

    const handleLogin = async () => {
        if (!email || !password) {
            Alert.alert('Error', 'Please fill all fields');
            return;
        }
        try {
            const userInfo = {
                email,
                password,
            };
            const res = await login(userInfo).unwrap();
            const user = verifyToken(res.data.accessToken) as TUser;
            dispatch(setUser({ user: user, token: res.data.accessToken }));
            console.log(user,'user');
            navigation.navigate(ROUTES.CHAT_LIST);
        } catch (error) {
            console.error('Error:', error);
            Alert.alert('Error', 'Something went wrong');
        }
    };

    return (
        <View style={styles.login}>
            <ScrollView contentContainerStyle={styles.loginScrollView} >
                <View style={styles.loginView}>
                    <Image
                        source={require('../../assets/logo/logoWithoutBackground.png')}
                        style={styles.loginLogoImage}
                    />

                    <Text
                        style={styles.loginWelcomeText}>
                        Welcome back
                    </Text>

                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        placeholderTextColor="#666"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        value={email}
                        onChangeText={setEmail}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        placeholderTextColor="#666"
                        secureTextEntry
                        value={password}
                        onChangeText={setPassword}
                    />
                    <Text style={styles.forgetBtn}>
                        Forget password?
                    </Text>

                    <TouchableOpacity style={styles.button} onPress={handleLogin}>
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>

                    <Text style={styles.changeToSingUp}>
                        Don't have an account?&nbsp;
                        {/* <TouchableOpacity > */}
                        <Text onPress={() => navigation.navigate(ROUTES.REGISTER)} style={styles.changeToSingUpBtn}>Sign up</Text>
                        {/* </TouchableOpacity> */}
                    </Text>
                </View>
            </ScrollView>
        </View>
    );
};

export default Loginscreen;

const styles = StyleSheet.create({
    login: {
        flex: 1,
        experimental_backgroundImage:
            'lbackground-image: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
    },
    loginScrollView: {
        flexGrow: 1,
    },
    loginView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginLogoImage: {
        width: 200,
        height: 150,
    },
    loginWelcomeText: {
        color: 'purple',
        fontWeight: 'bold',
        fontSize: 30,
        marginBottom: 30,
    },
    input: {
        width: '80%',
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 15,
        marginBottom: 15,
        backgroundColor: '#fff',
    },
    forgetBtn: {
        marginRight: -180,
        marginTop: -10,
        color: 'red',
    },
    button: {
        width: '80%',
        height: 50,
        backgroundColor: 'purple',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 25,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    changeToSingUp: {
        marginTop: 15,
    },
    changeToSingUpBtn: {
        color: 'purple',
        fontWeight: 600,
    },
});
