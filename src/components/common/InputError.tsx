import { StyleSheet } from 'react-native';
import Text from './Text';
import { COLORS, TYPOGRAPHY } from '@/theme/theme';

const InputError = ({ error }: { error: string }) => {
  return <Text style={styles.error}>{error}</Text>;
};

export default InputError;

const styles = StyleSheet.create({
  error: {
    color: COLORS.error,
    fontSize: TYPOGRAPHY.sizes.small,
    marginLeft: 5,
    marginTop: 2,
  },
});
