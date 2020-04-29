import { useLinking } from '@react-navigation/native'
import { Linking } from 'expo'

export default function (containerRef) {
  return useLinking(containerRef, {
    prefixes: [Linking.makeUrl('/')],
    config: {
      Root: {
        path: 'root',
        screens: {
          Podcasts: 'podcasts',
          TopCharts: 'top-charts',
          Settings: 'settings',
          Social: 'social',
        },
      },
    },
  })
}
