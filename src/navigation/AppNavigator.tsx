import { RootStackParamList } from '@/types/navigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import screens from './screens';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{ headerShown: false }}
    >
      {screens.map(screen => (
        <Stack.Screen
          key={screen.name}
          component={screen.component}
          name={screen.name as keyof RootStackParamList}
        />
      ))}
    </Stack.Navigator>
  );
};

export default AppNavigator;
