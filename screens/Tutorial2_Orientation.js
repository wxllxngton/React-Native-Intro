import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Platform,
    StatusBar,
    Dimensions,
} from 'react-native';

/**
 * Used instead of the Dimensions API
 * while factoring in landscape mode
 */
import {
    useDimensions,
    useDeviceOrientation,
} from '@react-native-community/hooks';

export default function App() {
    /**
     * In cases where we want to fine tune the components according to the size of the screen - Dimensions API
     *
     * Screen returns dimensions of the entire screen.
     * Window returns the dimensions of the visible application window
     *
     * The dimensions are equal on ios but different on android
     *
     * Do not detect dimension changes (Screen orientation)
     */

    // console.log(Dimensions.get('screen'));
    // console.log(useDimensions());
    const orientation = useDeviceOrientation();

    /**
     * Hooks allow use to add functionality to our components
     */

    return (
        <SafeAreaView style={styles.container}>
            <View
                style={{
                    backgroundColor: 'dodgerblue',
                    // To fit half of all screens "50" = DIPs (Density Independent Pixels)
                    width: '100%',
                    height: orientation === 'landscape' ? '100%' : '30%',
                }}
            ></View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
});
