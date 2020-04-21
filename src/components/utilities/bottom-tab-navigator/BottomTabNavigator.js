import React from 'react';
import { StyleSheet, View } from 'react-native';
import styled from 'styled-components';

import TabNavigatorItem from './components/tab-navigator-item/TabNavigatorItem';
import MiniPlayer from './components/mini-player/MiniPlayer';
import useBottomTabNavigator from './useBottomTabNavigator';
import metrics from '../../../styles/metrics';
import items from './items';

const Wrapper = styled(View)`
  ]width: 100%;
`;

const IconsWrapper = styled(View)`
  width: 100%;
  height: ${({ theme }) => theme.metrics.getWidthFromDP('18%')
    + (theme.metrics.isEqualsOrLargestThanIphoneX ? 30 : 0)}px;
  flex-direction: row;
  padding-bottom: ${({ theme }) => (theme.metrics.isEqualsOrLargestThanIphoneX ? 30 : 0)}px;
  background-color: ${({ theme }) => theme.colors.bottomNavigatorBar};
  border-top-width: ${StyleSheet.hairlineWidth}px;
  border-top-color: ${({ theme }) => theme.colors.inactiveBottomNavigatorBarItem};
`;

const ITEM_WIDTH = metrics.width / items.length;

const BottomTabNavigator = ({ navigation, state }) => {
  const { onPressMiniPlayer, shouldShowTabs, currentTrack } = useBottomTabNavigator(
    navigation,
    state,
  );

  if (!shouldShowTabs) {
    return null;
  }

  return (
    <Wrapper>
      {currentTrack && (
        <MiniPlayer
          onPressMiniPlayer={onPressMiniPlayer}
          currentTrack={currentTrack}
        />
      )}
      <IconsWrapper
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
      </IconsWrapper>
    </Wrapper>
  );
};

export default BottomTabNavigator;
