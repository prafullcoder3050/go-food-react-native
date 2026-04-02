import React, { useState } from 'react';
import {
  StyleSheet,
  TextInputProps,
  TextInput as RNTextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import InputError from './InputError';
import InputLabel from './InputLabel';
import { COLORS, TYPOGRAPHY } from '@/theme/theme';

interface Props extends TextInputProps {
  label?: string;
  required?: boolean;
  error?: string;
  type?: 'text' | 'password';
}

const TextInput = ({
  label,
  required,
  error,
  type = 'text',
  secureTextEntry,
  ...props
}: Props) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const isPassword = type === 'password';
  const shouldSecureText = isPassword && !isPasswordVisible;

  return (
    <View style={styles.wrapper}>
      {label && <InputLabel label={label} required={required} />}

      <View style={styles.inputContainer}>
        <RNTextInput
          {...props}
          autoComplete="off"
          secureTextEntry={shouldSecureText}
          style={[
            styles.input,
            error ? styles.errorBorder : null,
            isPassword && styles.inputWithIcon,
          ]}
        />

        {isPassword && (
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={togglePasswordVisibility}
            activeOpacity={0.7}
          >
            <Icon
              name={isPasswordVisible ? 'eye-off-outline' : 'eye-outline'}
              size={20}
              color={COLORS.grayMedium}
            />
          </TouchableOpacity>
        )}
      </View>

      {error && <InputError error={error} />}
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
  },
  inputContainer: {
    justifyContent: 'center',
  },
  input: {
    backgroundColor: COLORS.grayLight,
    borderRadius: 14,
    paddingHorizontal: 16,
    height: 56,
    fontSize: TYPOGRAPHY.sizes.body,
    fontFamily: TYPOGRAPHY.fonts.medium,
    color: COLORS.black,
  },
  inputWithIcon: {
    paddingRight: 50,
  },
  errorBorder: {
    borderWidth: 1,
    borderColor: COLORS.error,
  },
  iconContainer: {
    position: 'absolute',
    right: 16,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
