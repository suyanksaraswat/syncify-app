import React from 'react';
import { ThemeProvider } from 'styled-components';
import { fireEvent, render } from 'react-native-testing-library';

import BottomTabNavigator from './BottomTabNavigator';
import theme from '../../../styles';
import items from './items';

jest.mock('Dimensions');

const routeNames = items.map((item) => item.id);

const index = 0;

const state = {
  routes: [{ state: undefined }],
  routeNames,
  index,
};

const renderTabNavigator = (navigate = jest.fn()) => (
  <ThemeProvider
    theme={theme}
  >
    <BottomTabNavigator
      navigation={{ navigate }}
      state={state}
    />
  </ThemeProvider>
);

describe('Testing <TabNavigator />', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('Testing the render', () => {
    it('should render correctly', () => {
      const { queryByTestId } = render(renderTabNavigator());

      expect(queryByTestId('bottom-tab-wrapper')).not.toBeNull();

      expect(Array.isArray(queryByTestId('bottom-tab-wrapper').props.children)).toBe(
        true,
      );

      expect(queryByTestId('bottom-tab-wrapper').props.children.length).toBe(
        items.length,
      );
    });
  });

  describe('Testing the children state provided by state prop', () => {
    it('should render children correctly', () => {
      const { queryByTestId } = render(renderTabNavigator());

      expect(
        queryByTestId('bottom-tab-wrapper').props.children[index].props.isSelected,
      ).toBe(true);

      expect(
        queryByTestId('bottom-tab-wrapper')
          .props.children.slice(1, items.length)
          .every((item) => item.props.isSelected === false),
      ).toBe(true);
    });
  });

  describe('Testing the navigate() function passed to children', () => {
    it('should call the navigation() when is pressed', () => {
      const navigate = jest.fn();

      const { queryByTestId } = render(renderTabNavigator(navigate));

      fireEvent.press(queryByTestId('bottom-tab-wrapper').props.children[index]);

      expect(navigate).toBeCalledTimes(1);

      expect(navigate).toBeCalledWith(items[index].id);
    });
  });
});
