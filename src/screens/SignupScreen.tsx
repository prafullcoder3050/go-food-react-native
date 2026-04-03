import Button from '@/components/common/Button';
import Text from '@/components/common/Text';
import TextInput from '@/components/common/TextInput';
import { COLORS, TYPOGRAPHY } from '@/theme/theme';
import { NavigationProp } from '@/types/navigation';
import { signupSchema } from '@/utils/validations';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigation } from '@react-navigation/native';
import { Controller, useForm } from 'react-hook-form';
import { Image, StyleSheet, View } from 'react-native';

const defaultValues = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignupScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues, resolver: yupResolver(signupSchema) });

  const onSubmit = (data: typeof defaultValues) => {
    navigation.navigate('VerifyEmail', { email: data.email });
  };

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('@/assets/images/logo.png')} />
      <Text style={styles.heading}>Hello! Create Account</Text>
      <Text style={styles.description}>
        Already have an account?{' '}
        <Text
          style={styles.signupLink}
          onPress={() => navigation.replace('Login')}
        >
          Sign In
        </Text>
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

      <Button title="Sign Up" onPress={() => handleSubmit(onSubmit)()} />
    </View>
  );
};

export default SignupScreen;

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
    name: 'name',
    label: 'Name',
    placeholder: 'Enter your name',
    type: 'text',
  },
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
  {
    name: 'confirmPassword',
    label: 'Confirm Password',
    placeholder: 'Confirm your password',
    type: 'password',
  },
];
