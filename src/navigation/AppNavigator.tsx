import LoginScreen from '@/screens/LoginScreen';
import OnboardingScreen from '@/screens/OnboardingScreen';
import SignupScreen from '@/screens/SignupScreen';
import SplashScreen from '@/screens/SplashScreen';
import { RootStackParamList } from '@/types/navigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
