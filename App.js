import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native';
import ViewImageScreen from './screens/ViewImageScreen.js';
import WelcomeScreen from './screens/WelcomeScreen.js';

export default function App() {
    return <ViewImageScreen />;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
});
