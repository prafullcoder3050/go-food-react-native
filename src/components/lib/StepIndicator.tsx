import React, { useEffect, useRef } from 'react';
import { StyleSheet, View, Animated } from 'react-native';
import { COLORS } from '@/theme/theme';

type Props = {
  stepLength: number;
  currentStep: number;
};

const StepIndicator = ({ stepLength, currentStep }: Props) => {
  return (
    <View style={styles.container}>
      {Array.from({ length: stepLength }).map((_, index) => {
        const isActive = index === currentStep;

        return <IndicatorDot key={index} active={isActive} />;
      })}
    </View>
  );
};

const IndicatorDot = ({ active }: { active: boolean }) => {
  const widthAnim = useRef(new Animated.Value(8)).current;

  useEffect(() => {
    Animated.spring(widthAnim, {
      toValue: active ? 22 : 8,
      useNativeDriver: false,
      friction: 8,
      tension: 50,
    }).start();
  }, [active]);

  return (
    <Animated.View
      style={[
        styles.dot,
        {
          width: widthAnim,
          backgroundColor: active ? COLORS.primary : '#E0E0E0',
        },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  dot: {
    height: 6,
    borderRadius: 3,
    marginHorizontal: 4,
  },
});

export default StepIndicator;
