import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import {persistor, store} from "./src/redux/store";

import AppScreen from "./src/screens/AppScreen";
import CharacterScreen from "./src/screens/CharacterScreen";
import SettingsScreen from "./src/screens/SettingsScreen";
import QuestionsScreen from "./src/screens/QuestionsScreen";
import RecordingScreen from "./src/screens/RecordingScreen";
import WritingScreen from "./src/screens/WritingScreen";
import MyStoriesScreen from "./src/screens/MyStoriesScreen";
import StoryDetailScreen from "./src/screens/StoryDetailScreen";
import AboutScreen from "./src/screens/AboutScreen";
import MoodPredictionScreen from "./src/screens/MoodPredictionScreen";
import TechnologiesScreen from "./src/screens/TechnologiesScreen";
import StoryBuilderScreen from "./src/screens/StoryBuilderScreen";
const Stack = createStackNavigator();

export default function App() {

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <NavigationContainer>
                    <Stack.Navigator screenOptions={{
                        headerShadowVisible: false,
                        headerStyle: {
                            backgroundColor: '#F196FF',
                            shadowColor: '#1F2021',
                            elevation: 10,
                            borderBottomLeftRadius: 40,
                            borderBottomRightRadius: 40,
                            height: 200,
                        },

                        headerLeft: () => (
                            null
                        )
                    }}>

                        <Stack.Screen name="AppScreen" component={AppScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="CharacterScreen" component={CharacterScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="SettingsScreen" component={SettingsScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="QuestionsScreen" component={QuestionsScreen} options={{ headerShown: false }} />
                        {/*<Stack.Screen name="Recording" component={RecordingScreen} />*/}

                        <Stack.Screen name="WritingScreen" component={WritingScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="MyStoriesScreen" component={MyStoriesScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="StoryDetail" component={StoryDetailScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="AboutScreen" component={AboutScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="MoodPredictionScreen" component={MoodPredictionScreen} options={{ headerShown: false }} />

                        <Stack.Screen name="TechnologiesScreen" component={TechnologiesScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="StoryBuilderScreen" component={StoryBuilderScreen} options={{ headerShown: false }} />


                    </Stack.Navigator>
                </NavigationContainer>
          </PersistGate>
         </Provider>
    );
}
