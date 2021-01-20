import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Home: {screens: {HomeScreen: 'home'}},
          Search: {screens: {SearchScreen: 'search'}},
          Post: {screens: {PostScreen: 'post'}},
          Activity: {screens: {ActivityScreen: 'activity'}},
          Profile: {screens: {ProfileScreen: 'profile'}},
        },
      },
      NotFound: '*',
    },
  },
};
