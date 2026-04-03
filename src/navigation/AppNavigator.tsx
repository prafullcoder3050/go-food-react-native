import { RootStackParamList } from '@/types/navigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Screens from './screens';
import OnboardingScreen from '@/screens/OnboardingScreen';
import SplashScreen from '@/screens/SplashScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [token, setToken] = useState<string | null>(null);
  const [isOnboardingCompleted, setIsOnboardingCompleted] = useState(false);

  useEffect(() => {
    const bootstrapAsync = async () => {
      try {
        const [userToken, onboardingValue] = await Promise.all([
          AsyncStorage.getItem('token'),
          AsyncStorage.getItem('isOnboardingCompleted'),
        ]);

        setToken(userToken);
        setIsOnboardingCompleted(onboardingValue === 'true');
      } catch (e) {
        console.error('Failed to load settings', e);
      } finally {
        setIsLoading(false);
      }
    };

    bootstrapAsync();
  }, []);

  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{ headerShown: false }}
    >
      {isLoading ? (
        <Stack.Screen name="Splash" component={SplashScreen} />
      ) : token ? (
        Screens.appScreens.map(s => (
          <Stack.Screen
            key={s.name}
            name={s.name as any}
            component={s.component}
          />
        ))
      ) : !isOnboardingCompleted ? (
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      ) : (
        Screens.authScreens.map(s => (
          <Stack.Screen
            key={s.name}
            name={s.name as any}
            component={s.component}
          />
        ))
      )}
    </Stack.Navigator>
  );
};

export default AppNavigator;
