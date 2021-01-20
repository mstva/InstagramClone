import * as React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import SearchBar from "../components/SearchBar";
import SuggestedGrid from "../components/SuggestedGrid";

export default function SearchScreen() {
  return (
    <SafeAreaView>
      <SearchBar/>
      <SuggestedGrid/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
