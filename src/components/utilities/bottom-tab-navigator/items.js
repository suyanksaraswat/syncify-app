import { StackId as PlaylistsID } from '../../screens/playlists/routes/routes';
import { StackId as ExploreID } from '../../screens/explore/routes/routes';
import { StackId as SocialID } from '../../screens/social/routes/routes';
import { StackId as TopChartsID } from '../../screens/top-charts/routes/routes';

const items = [
  {
    id: PlaylistsID,
    title: 'Playlists',
    icon: 'playlist-music',
  },
  {
    id: ExploreID,
    title: 'Top Charts',
    icon: 'star',
  },
  {
    id: SocialID,
    title: 'Explore',
    icon: 'magnify',
  },
  {
    id: TopChartsID,
    title: 'Social',
    icon: 'account-group',
  },
];

export default items;
