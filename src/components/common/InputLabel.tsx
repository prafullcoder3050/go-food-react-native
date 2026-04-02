import Text from './Text';
import { StyleSheet } from 'react-native';
import { COLORS, TYPOGRAPHY } from '@/theme/theme';

const InputLabel = ({
  label,
  required,
}: {
  label: string;
  required?: boolean;
}) => {
  return (
    <Text style={styles.lable}>
      {label}
      {required && <Text style={styles.required}> *</Text>}
    </Text>
  );
};

export default InputLabel;

const styles = StyleSheet.create({
  lable: {
    fontFamily: TYPOGRAPHY.fonts.primary,
    fontSize: TYPOGRAPHY.sizes.caption,
    marginLeft: 5,
    marginBottom: 2,
  },
  required: {
    color: COLORS.error,
  },
});
