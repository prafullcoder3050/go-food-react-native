import Button from '@/components/common/Button';
import Text from '@/components/common/Text';
import TextInput from '@/components/common/TextInput';
import { COLORS, TYPOGRAPHY } from '@/theme/theme';
import { Image, StyleSheet, View } from 'react-native';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('@/assets/images/logo.png')} />
      <Text style={styles.heading}>Welcome Back</Text>
      <Text style={styles.description}>Hello Jos, sign in to continue! Or</Text>
      <Text style={styles.signupLink}>Create new account</Text>

      <View style={styles.formContainer}>
        <TextInput placeholder="Enter your email" />
        <TextInput type="password" placeholder="Enter your password" />
      </View>

      <Button title="Sign In" />
    </View>
  );
};

export default LoginScreen;

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
    fontSize: 38,
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
    width: '100%',
    gap: 15,
  },
  signupLink: {
    fontSize: 16,
    color: COLORS.primary,
    fontFamily: TYPOGRAPHY.fonts.medium,
  },
});
