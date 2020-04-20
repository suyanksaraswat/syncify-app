import React from 'react';
import { fireEvent, render } from 'react-native-testing-library';
import { ThemeProvider } from 'styled-components';

import TabNavigatorItem from './TabNavigatorItem';
import theme from '../../../../styles';

const item = {
  title: 'Home',
  icon: 'home-variant',
};

const renderTabNavigatorItem = (isSelected = false, onPress = jest.fn()) => (
  <ThemeProvider
    theme={theme}
  >
    <TabNavigatorItem
      isSelected={isSelected}
      onPress={onPress}
      title="ItemTitle"
      icon={item.icon}
      width={12}
    />
  </ThemeProvider>
);

describe('Testing <TabNavigatorItem />', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('Testing the render', () => {
    it('should renders correctly', () => {
      const { queryByTestId } = render(renderTabNavigatorItem());

      expect(queryByTestId('button-wrapper')).not.toBeNull();

      expect(queryByTestId('item-title')).not.toBeNull();

      expect(queryByTestId('icon').props.name).toBe(item.icon);
    });
  });

  describe('Testing the render with the selection-state', () => {
    it('should renders correctly when the item is selected', () => {
      const { queryByTestId } = render(renderTabNavigatorItem(true));

      expect(queryByTestId('button-wrapper')).not.toBeNull();

      expect(queryByTestId('icon').props.name).toEqual(item.icon);

      expect(queryByTestId('icon').props.color).toEqual(
        theme.colors.activeBottomNavigatorBarItem,
      );

      expect(queryByTestId('item-title').props.color).toEqual(
        theme.colors.activeBottomNavigatorBarItem,
      );
    });

    it("should renders correctly when the item isn't selected", () => {
      const { queryByTestId } = render(renderTabNavigatorItem());

      expect(queryByTestId('button-wrapper')).not.toBeNull();

      expect(queryByTestId('icon').props.name).toEqual(item.icon);

      expect(queryByTestId('icon').props.color).toEqual(
        theme.colors.inactiveBottomNavigatorBarItem,
      );

      expect(queryByTestId('item-title').props.color).toEqual(
        theme.colors.inactiveBottomNavigatorBarItem,
      );
    });
  });

  describe('Testing the press action', () => {
    it('should call the onPress() action when is pressed', () => {
      const onPress = jest.fn();

      const { queryByTestId } = render(renderTabNavigatorItem(false, onPress));

      fireEvent.press(queryByTestId('button-wrapper'));

      expect(onPress).toHaveBeenCalledTimes(1);
    });
  });
});
