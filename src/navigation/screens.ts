import HomeScreen from '@/screens/HomeScreen';
import LoginScreen from '@/screens/LoginScreen';
import OnboardingScreen from '@/screens/OnboardingScreen';
import SignupScreen from '@/screens/SignupScreen';
import SplashScreen from '@/screens/SplashScreen';
import VerifyEmailScreen from '@/screens/VerifyEmailScreen';

const screens = [
  {
    name: 'Splash',
    component: SplashScreen,
  },
  {
    name: 'Onboarding',
    component: OnboardingScreen,
  },
  {
    name: 'Login',
    component: LoginScreen,
  },
  {
    name: 'Signup',
    component: SignupScreen,
  },
  {
    name: 'VerifyEmail',
    component: VerifyEmailScreen,
  },
  {
    name: 'Home',
    component: HomeScreen,
  },
];

export default screens;
