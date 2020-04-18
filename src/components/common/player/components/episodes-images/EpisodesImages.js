import React from 'react';
import { FlatList, Image, View } from 'react-native';
import styled from 'styled-components';

import metrics from '../../../../../styles/metrics';
import useEpisodeImage from './useEpisodesImages';

const Wrapper = styled(View)`
  width: ${({ theme }) => theme.metrics.width}px;
  height: ${({ theme }) => theme.metrics.getWidthFromDP('75%')}px;
  padding-horizontal: ${({ theme }) => theme.metrics.largeSize}px;
  align-items: center;
`;

const ImageComponent = styled(Image)`
  width: 100%;
  height: 100%;
  border-radius: ${({ theme }) => theme.metrics.smallSize}px;
`;

const EpisodesImages = ({ initialIndex, playlist }) => {
  const {
    onEpisodesImagesMomentumScrollEnd,
    episodeImagesListRef,
    playlistImages,
  } = useEpisodeImage(playlist, initialIndex);

  return (
    <FlatList
      onMomentumScrollEnd={onEpisodesImagesMomentumScrollEnd}
      showsHorizontalScrollIndicator={false}
      initialScrollIndex={initialIndex}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Wrapper>
          <ImageComponent
            source={{ uri: item.image }}
          />
        </Wrapper>
      )}
      getItemLayout={(_data, index) => ({
        offset: metrics.width * index,
        length: metrics.width,
        index,
      })}
      ref={episodeImagesListRef}
      data={playlistImages}
      bounces={false}
      pagingEnabled
      horizontal
    />
  );
};

export default EpisodesImages;
