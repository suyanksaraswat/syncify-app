import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components';

import TabNavigatorItem from './tab-navigator-item/TabNavigatorItem';
import metrics from '../../../styles/metrics';
import items from './items';

const Wrapper = styled(View)`
  width: ${({ theme }) => theme.metrics.width}px;
  height: ${({ theme }) => theme.metrics.getWidthFromDP('18%')
    + (theme.metrics.isEqualsOrLargestThanIphoneX ? 30 : 0)}px;
  flex-direction: row;
  padding-bottom: ${({ theme }) => (theme.metrics.isEqualsOrLargestThanIphoneX ? 30 : 0)}px;
  background-color: ${({ theme }) => theme.colors.bottomNavigatorBar};
`;

const ITEM_WIDTH = metrics.width / items.length;

const BottomTabNavigator = ({ navigation, state }) => (
  <Wrapper
    testID="bottom-tab-wrapper"
  >
    {items.map((item, index) => (
      <TabNavigatorItem
        onPress={() => navigation.navigate(state.routeNames[index])}
        isSelected={index === state.index}
        title={item.title}
        width={ITEM_WIDTH}
        icon={item.icon}
        key={item.id}
      />
    ))}
  </Wrapper>
);

export default BottomTabNavigator;
