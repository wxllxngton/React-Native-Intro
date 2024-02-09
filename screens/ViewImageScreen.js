import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import colors from '../app/config/colors.js';

function ViewImageScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.closeIcon}></View>
            <View style={styles.deleteIcon}></View>
            <Image
                // Removes crop
                resizeMode="contain"
                style={styles.image}
                source={require('../app/assets/chair.jpg')}
            />
        </View>
    );
}

export default ViewImageScreen;

const styles = StyleSheet.create({
    closeIcon: {
        width: 50,
        height: 50,
        backgroundColor: colors.primary,
        position: 'absolute',
        top: 40,
        left: 30,
    },

    // Removes white boaders
    container: {
        backgroundColor: colors.black,
        flex: 1,
    },

    image: {
        width: '100%',
        height: '100%',
    },

    deleteIcon: {
        width: 50,
        height: 50,
        backgroundColor: colors.secondary,
        position: 'absolute',
        top: 40,
        right: 30,
    },
});
