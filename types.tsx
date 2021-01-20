export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  Home: undefined;
  Search: undefined;
  Post: undefined;
  Activity: undefined;
  Profile: undefined;
};

export type HomeParamList = {
  HomeScreen: undefined;
};

export type SearchParamList = {
  SearchScreen: undefined;
};

export type PostParamList = {
  PostScreen: undefined;
};

export type ActivityParamList = {
  ActivityScreen: undefined;
};

export type ProfileParamList = {
  ProfileScreen: undefined;
};

export type Story = {
  id: string,
  name: string,
  imageUri: string
}

export type Post = {
  id: string,
  username: string,
  userImageUri: string,
  postImageUri: string,
  likesCount: string,
  commentsCount: string,
  createdAt: string
}

export type Suggestion = {
  id: string,
  suggestedImageUri: string,
}
