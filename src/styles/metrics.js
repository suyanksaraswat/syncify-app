import { Dimensions, PixelRatio } from 'react-native';

import isEqualsOrLargestThanIphoneX from '../utils/is-equals-or-largest-than-iphonex/isEqualsOrLargestThanIphoneX';

const { width, height } = Dimensions.get('window');

const getWidthFromDP = (widthPercentage) => {
  const percentageDesired = parseFloat(widthPercentage);
  const widthPercentageToDP = PixelRatio.roundToNearestPixel(
    (width * percentageDesired) / 100,
  );

  return widthPercentageToDP;
};

const getHeightFromDP = (heightPercentage) => {
  const percentageDesired = parseFloat(heightPercentage);
  const heightPercentageToDP = PixelRatio.roundToNearestPixel(
    (height * percentageDesired) / 100,
  );

  return heightPercentageToDP;
};

export default {
  isEqualsOrLargestThanIphoneX: isEqualsOrLargestThanIphoneX(),
  extraSmallSize: getWidthFromDP('1%'),
  smallSize: getWidthFromDP('2%'),
  mediumSize: getWidthFromDP('3%'),
  largeSize: getWidthFromDP('4%'),
  extraLargeSize: getWidthFromDP('5%'),
  getWidthFromDP,
  getHeightFromDP,
  width,
  height,
};
