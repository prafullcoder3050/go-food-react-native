import {
  StyleSheet,
  TextInputProps,
  TextInput as RNTextInput,
  View,
} from 'react-native';
import InputError from './InputError';
import InputLabel from './InputLabel';
import { COLORS, TYPOGRAPHY } from '@/theme/theme';

interface Props extends TextInputProps {
  label?: string;
  required?: boolean;
  error?: string;
}

const TextInput = ({ label, required, error, ...props }: Props) => {
  return (
    <View style={styles.wrapper}>
      {label && <InputLabel label={label} required={required} />}
      <RNTextInput
        {...props}
        style={[styles.input, error && styles.error]}
        autoComplete="off"
      />
      {error && <InputError error={error} />}
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
  },
  input: {
    backgroundColor: COLORS.grayLight,
    borderRadius: 14,
    padding: 16,
    height: 50,
    fontSize: TYPOGRAPHY.sizes.body,
  },
  error: {
    borderWidth: 1,
    borderColor: COLORS.error,
  },
});
