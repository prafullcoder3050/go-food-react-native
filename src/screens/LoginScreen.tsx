import Button from '@/components/common/Button';
import Text from '@/components/common/Text';
import TextInput from '@/components/common/TextInput';
import { COLORS, TYPOGRAPHY } from '@/theme/theme';
import { useNavigation } from '@react-navigation/native';
import { Controller, useForm } from 'react-hook-form';
import { Image, StyleSheet, View } from 'react-native';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from '@/utils/validations';
import AsyncStorage from '@react-native-async-storage/async-storage';

const defaultValues = {
  email: '',
  password: '',
};

const LoginScreen = () => {
  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues, resolver: yupResolver(loginSchema) });

  const onSubmit = async () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Home' }],
    });

    await AsyncStorage.setItem('token', '1234567890');
  };

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('@/assets/images/logo.png')} />
      <Text style={styles.heading}>Welcome Back</Text>
      <Text style={styles.description}>Hello Jos, sign in to continue! Or</Text>
      <Text
        style={styles.signupLink}
        onPress={() => navigation.navigate('Signup')}
      >
        Create new account
      </Text>

      <View style={styles.formContainer}>
        {fields.map(field => {
          const error = (errors as any)?.[field.name]?.message;

          return (
            <Controller
              key={field.name}
              control={control}
              name={field.name as any}
              render={({ field: { onChange, value } }) => (
                <TextInput
                  value={value}
                  error={error}
                  onChangeText={onChange}
                  type={field.type as any}
                  placeholder={field.placeholder}
                />
              )}
            />
          );
        })}
      </View>

      <Button title="Sign In" onPress={() => handleSubmit(onSubmit)()} />
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
    width: '100%',
    gap: 15,
  },
  signupLink: {
    fontSize: 16,
    color: COLORS.primary,
    fontFamily: TYPOGRAPHY.fonts.medium,
  },
});

const fields = [
  {
    name: 'email',
    label: 'Email',
    placeholder: 'Enter your email',
    type: 'text',
  },
  {
    name: 'password',
    label: 'Password',
    placeholder: 'Enter your password',
    type: 'password',
  },
];
