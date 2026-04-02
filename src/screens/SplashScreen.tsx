import { COLORS } from '@/theme/theme';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { Image, StyleSheet, View } from 'react-native';

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.reset({ index: 0, routes: [{ name: 'Onboarding' }] });
    }, 2000);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={require('@/assets/images/logo.png')} style={styles.logo} />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  logo: {
    height: 170,
    width: 170,
    resizeMode: 'contain',
  },
});
