import HomeScreen from '@/screens/HomeScreen';
import LoginScreen from '@/screens/LoginScreen';
import SignupScreen from '@/screens/SignupScreen';
import VerifyEmailScreen from '@/screens/VerifyEmailScreen';

export const authScreens = [
  { name: 'Login', component: LoginScreen },
  { name: 'Signup', component: SignupScreen },
  { name: 'VerifyEmail', component: VerifyEmailScreen },
];

export const appScreens = [{ name: 'Home', component: HomeScreen }];
