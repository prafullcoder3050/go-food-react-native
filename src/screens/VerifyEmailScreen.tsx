import Button from '@/components/common/Button';
import OTPInput from '@/components/common/OTPInput';
import Text from '@/components/common/Text';
import { COLORS, TYPOGRAPHY } from '@/theme/theme';
import { NavigationProp } from '@/types/navigation';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useState } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const VerifyEmailScreen = () => {
  const route = useRoute();
  const [code, setCode] = useState('');
  const navigation = useNavigation<NavigationProp>();

  const { email } = route?.params as any;

  const handleSubmit = async () => {
    if (code?.length !== 4) return;

    navigation.reset({
      index: 0,
      routes: [{ name: 'Home' }],
    });

    await AsyncStorage.setItem('token', '1234567890');
  };

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('@/assets/images/logo.png')} />
      <Text style={styles.heading}>Verify phone number</Text>
      <Text style={styles.description}>
        We have just sent a code to {email}
      </Text>

      <View style={styles.formContainer}>
        <OTPInput code={code} setCode={setCode} />
        <Button
          title="Verify"
          disabled={code?.length !== 4}
          onPress={handleSubmit}
        />
      </View>

      <Text
        style={styles.loginLink}
        onPress={() => navigation.replace('Login')}
      >
        Back to Sign In
      </Text>
    </View>
  );
};

export default VerifyEmailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.white,
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  heading: {
    marginTop: 10,
    fontSize: 30,
    fontFamily: TYPOGRAPHY.fonts.semiBold,
  },
  description: {
    marginTop: -5,
    fontSize: 16,
    color: COLORS.grayMedium,
    fontFamily: TYPOGRAPHY.fonts.medium,
  },
  formContainer: {
    marginVertical: 24,
    width: '90%',
    gap: 15,
  },
  loginLink: {
    fontSize: 14,
    color: COLORS.primary,
    fontFamily: TYPOGRAPHY.fonts.medium,
  },
});
