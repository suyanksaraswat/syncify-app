import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import styled from 'styled-components';

import useButtonsControlls from './useButtonsControlls';
import styles from '../../../../../../styles';
import Icon from '../../../../../common/Icon';

const ButtonsWrapper = styled(View)`
  width: ${({ theme }) => theme.metrics.getWidthFromDP('22%')}px;
  height: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const ButtonControlls = () => {
  const { handlePressPlayPause, onPressForward, isPlaying } = useButtonsControlls();

  return (
    <ButtonsWrapper>
      <TouchableOpacity
        onPress={handlePressPlayPause}
      >
        <Icon
          name={isPlaying ? 'pause-circle' : 'play-circle'}
          size={styles.metrics.getWidthFromDP('10%')}
          color={styles.colors.text}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={onPressForward}
      >
        <Icon
          size={styles.metrics.getWidthFromDP('8%')}
          color={styles.colors.text}
          name="fast-forward-10"
        />
      </TouchableOpacity>
    </ButtonsWrapper>
  );
};

export default ButtonControlls;
