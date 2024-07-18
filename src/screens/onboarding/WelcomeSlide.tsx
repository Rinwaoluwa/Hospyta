import React from 'react';
import {Dimensions, ImageBackground, ImageSourcePropType} from 'react-native';
import Animated from 'react-native-reanimated';
import Text from '../../design-system/components/Text';
import Box from '../../design-system/components/Box';
import {FLEX} from '../../utils/constants';

type WelcomeSlideProps = {
  title: string;
  image: ImageSourcePropType;
};


const WelcomeSlide = ({title, image}: WelcomeSlideProps) => {
  return (
    <Box
      flex={1}
      width={Dimensions.get('screen').width}
      backgroundColor="transparent"
    >
      <ImageBackground source={image} style={FLEX}>
        <Text color="white" variant="heading-1" marginTop="space-xl" marginHorizontal="space-12">
          {title}
        </Text>
        <Text color="pink" variant="subtext-medium" marginHorizontal="space-12">
          with Hospyta
        </Text>
      </ImageBackground>
    </Box>
  );
};

export default WelcomeSlide;
