import React, { useState } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import Button from '@/components/common/Button';
import StepIndicator from '@/components/lib/StepIndicator';
import { COLORS, TYPOGRAPHY } from '@/theme/theme';
import { onboardingStepsData } from '@/utils/data';
import Text from '@/components/common/Text';
import { useNavigation } from '@react-navigation/native';

const OnboardingScreen = () => {
  const navigation = useNavigation();
  const [activeStep, setActiveStep] = useState(0);
  const data = (onboardingStepsData as any)[activeStep + 1];

  const handleNext = () => {
    if (activeStep == 2) {
      navigation.navigate('Login');
      return;
    }
    setActiveStep(prev => prev + 1);
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        {data && (
          <>
            <Image source={data.image} style={styles.image} />
            <Text style={styles.heading}>{data.heading}</Text>
            <Text style={styles.description}>{data.description}</Text>
          </>
        )}
      </View>

      <View style={styles.footer}>
        <StepIndicator stepLength={3} currentStep={activeStep} />
        <Button
          title={activeStep === 2 ? 'Get Started' : 'Next'}
          onPress={handleNext}
        />
      </View>
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  image: {
    width: 280,
    height: 280,
    resizeMode: 'contain',
  },
  heading: {
    marginTop: 30,
    fontSize: 26,
    textAlign: 'center',
    fontFamily: TYPOGRAPHY.fonts.bold,
  },
  description: {
    marginTop: 15,
    textAlign: 'center',
    color: COLORS.grayMedium,
    fontFamily: TYPOGRAPHY.fonts.medium,
    lineHeight: 24,
  },
  footer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
});
