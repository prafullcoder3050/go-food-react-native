import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import Text from './Text';
import { COLORS, TYPOGRAPHY } from '@/theme/theme';

interface Props extends TouchableOpacityProps {
  title: string;
}

const Button = ({ title, ...props }: Props) => {
  return (
    <TouchableOpacity {...props} style={[styles.button, props.style]}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    width: '100%',
    padding: 16,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primary,
  },
  text: {
    color: COLORS.white,
    fontFamily: TYPOGRAPHY.fonts.medium,
  },
});
