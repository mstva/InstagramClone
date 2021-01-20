import {Ionicons} from '@expo/vector-icons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import {BottomTabParamList} from '../types';
import {HomeNavigator, ActivityNavigator, PostNavigator, ProfileNavigator, SearchNavigator} from "./StackTabNavigator"

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
    const colorScheme = useColorScheme();

    return (
        <BottomTab.Navigator
            initialRouteName="Home"
            tabBarOptions={{
                activeTintColor: Colors[colorScheme].tint,
                showLabel: false,
                tabStyle: { paddingTop: 6 },
                safeAreaInsets: {bottom: 15}
            }}>
            <BottomTab.Screen name="Home" component={HomeNavigator}
                              options={{tabBarIcon: ({color}) => <TabBarIcon name="md-home" color={color}/>,}}/>
            <BottomTab.Screen name="Search" component={SearchNavigator}
                              options={{tabBarIcon: ({color}) => <TabBarIcon name="md-search" color={color}/>,}}/>
            <BottomTab.Screen name="Post" component={PostNavigator}
                              options={{tabBarIcon: ({color}) => <TabBarIcon name="md-add-circle-outline" color={color}/>,}}/>
            <BottomTab.Screen name="Activity" component={ActivityNavigator}
                              options={{tabBarIcon: ({color}) => <TabBarIcon name="md-heart" color={color}/>,}}/>
            <BottomTab.Screen name="Profile" component={ProfileNavigator}
                              options={{tabBarIcon: ({color}) => <TabBarIcon name="ios-contact" color={color}/>,}}/>
        </BottomTab.Navigator>
    );
}

function TabBarIcon(props: { name: string; color: string }) {
    return <Ionicons size={30} style={{marginBottom: -3}} {...props} />;
}
