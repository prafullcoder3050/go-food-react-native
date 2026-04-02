import { COLORS, TYPOGRAPHY } from '@/theme/theme';
import { StyleSheet, Text as RNText, TextProps } from 'react-native';

interface Props extends TextProps {
  children: React.ReactNode;
}

const Text = ({ children, ...props }: Props) => {
  return (
    <RNText style={[styles.text, props.style]} {...props}>
      {children}
    </RNText>
  );
};

export default Text;

const styles = StyleSheet.create({
  text: {
    color: COLORS.black,
    fontSize: TYPOGRAPHY.sizes.body,
    fontFamily: TYPOGRAPHY.fonts.medium,
  },
});
