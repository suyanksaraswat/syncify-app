import React, { memo } from 'react';
import { TouchableOpacity, Platform, Text } from 'react-native';
import styled, { withTheme } from 'styled-components';

import metrics from '../../../../styles/metrics';
import Icon from '../../../common/Icon';

const Wrapper = styled(TouchableOpacity)`
  width: ${({ width }) => width}px;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const ItemText = styled(Text)`
  margin-top: ${({ theme }) => (Platform.OS === 'android' ? theme.metrics.extraSmallSize : 0)}px;
  font-family: CircularStd-Medium;
  color: ${({ color }) => color};
  font-size: ${({ theme }) => theme.metrics.mediumSize * 1.1}px;
`;

const shouldComponentUpdate = (previousState, nextState) => {
  const isPreviouslySelected = previousState.isSelected || !nextState.isSelected;
  const willBeSelected = !previousState.isSelected || nextState.isSelected;

  return isPreviouslySelected && willBeSelected;
};

const NavigatorItem = withTheme(({
  isSelected, onPress, theme, width, title, icon,
}) => {
  const color = isSelected
    ? theme.colors.activeBottomNavigatorBarItem
    : theme.colors.inactiveBottomNavigatorBarItem;

  return (
    <Wrapper
      testID="button-wrapper"
      onPress={onPress}
      width={width}
    >
      <Icon
        size={metrics.getWidthFromDP('8%')}
        color={color}
        name={icon}
      />
      <ItemText
        testID="item-title"
        color={color}
      >
        {title}
      </ItemText>
    </Wrapper>
  );
});

export default memo(NavigatorItem, shouldComponentUpdate);
