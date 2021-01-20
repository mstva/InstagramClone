import * as React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import ActivityScreen from "../screens/ActivityScreen";
import PostScreen from "../screens/PostScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { HomeParamList, SearchParamList, PostParamList, ActivityParamList, ProfileParamList } from '../types';

const HomeStack = createStackNavigator<HomeParamList>();

export function HomeNavigator() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{ headerShown: false }}
            />
        </HomeStack.Navigator>
    );
}

const SearchStack = createStackNavigator<SearchParamList>();

export function SearchNavigator() {
    return (
        <SearchStack.Navigator>
            <SearchStack.Screen
                name="SearchScreen"
                component={SearchScreen}
                options={{ headerShown: false }}
            />
        </SearchStack.Navigator>
    );
}

const PostStack = createStackNavigator<PostParamList>();

export function PostNavigator() {
    return (
        <PostStack.Navigator>
            <PostStack.Screen
                name="PostScreen"
                component={PostScreen}
                options={{ headerTitle: 'Post Title' }}
            />
        </PostStack.Navigator>
    );
}

const ActivityStack = createStackNavigator<ActivityParamList>();

export function ActivityNavigator() {
    return (
        <ActivityStack.Navigator>
            <ActivityStack.Screen
                name="ActivityScreen"
                component={ActivityScreen}
                options={{ headerTitle: 'Activity Title' }}
            />
        </ActivityStack.Navigator>
    );
}

const ProfileStack = createStackNavigator<ProfileParamList>();

export function ProfileNavigator() {
    return (
        <ProfileStack.Navigator>
            <ProfileStack.Screen
                name="ProfileScreen"
                component={ProfileScreen}
                options={{ headerTitle: 'Profile Title' }}
            />
        </ProfileStack.Navigator>
    );
}
