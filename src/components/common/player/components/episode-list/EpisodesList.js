import React from 'react';
import { FlatList } from 'react-native';

import EpisodeListItem from './EpisodeListItem';
import episodes from './episodes';

const EpisodeList = ({ navigation }) => (
  <FlatList
    testID="episode-list"
    keyExtractor={(item) => item.id}
    renderItem={({ item, index }) => (
      <EpisodeListItem
        onPress={() => navigation.navigate('PlayerScreen', {
          indexEpisodeSelected: index,
          playlist: episodes,
        })}
        episodeTitle={item.title}
        author={item.author}
        image={item.image}
      />
    )}
    data={episodes}
  />
);

export default EpisodeList;
