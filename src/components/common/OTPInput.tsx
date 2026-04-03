import { useRef } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import Text from './Text';
import { COLORS, TYPOGRAPHY } from '@/theme/theme';

type Props = {
  code: string;
  maximumLength?: number;
  setCode: (code: string) => void;
};

const OTPInput = ({ code, setCode, maximumLength = 4 }: Props) => {
  const boxArray = new Array(maximumLength).fill(0);
  const inputRef = useRef<TextInput>(null);

  const handleOnPress = () => {
    inputRef.current?.focus();
  };

  const boxDigit = (_: any, index: number) => {
    const digit = code[index] || '';

    const isCurrentDigit = index === code.length;
    const isLastDigit = index === maximumLength - 1;
    const isCodeFull = code.length === maximumLength;

    const isFocused = isCurrentDigit || (isLastDigit && isCodeFull);

    return (
      <View
        key={index}
        style={[
          styles.box,
          { backgroundColor: digit ? COLORS.white : COLORS.grayLight },
        ]}
      >
        <Text style={styles.boxText}>{digit}</Text>
        <View
          style={[
            styles.underline,
            {
              backgroundColor: isFocused ? COLORS.primary : COLORS.primaryLight,
            },
          ]}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.inputsContainer} onPress={handleOnPress}>
        {boxArray.map(boxDigit)}
      </TouchableOpacity>

      <TextInput
        ref={inputRef}
        value={code}
        onChangeText={setCode}
        maxLength={maximumLength}
        keyboardType="number-pad"
        style={styles.hiddenInput}
      />
    </View>
  );
};

export default OTPInput;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30,
  },
  inputsContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  box: {
    width: 65,
    height: 75,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 1,
  },
  boxText: {
    fontSize: 22,
    fontFamily: TYPOGRAPHY.fonts.bold,
  },
  underline: {
    position: 'absolute',
    bottom: 0,
    width: 30,
    height: 3,
    borderRadius: 2,
  },
  hiddenInput: {
    position: 'absolute',
    opacity: 0,
    width: 1,
    height: 1,
  },
});
