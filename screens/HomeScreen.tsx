import * as React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Header from "../components/Header";
import StoryList from "../components/StoryList";
import PostList from "../components/PostList";

export default function HomeScreen() {
  return (
      <SafeAreaView>
        <Header/>
        <StoryList/>
        <PostList/>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
