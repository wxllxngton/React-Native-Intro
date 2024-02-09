import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

/* Flex lays out containers vertically */
/**
 * flexDirection:
 *  column-reverse
 *  row-reverse
 *  row
 *  flex-start: beginning of the axis
 *  flex-end: end of the axis
 *
 *  space-around: space between the containers
 *  space-even: space evenly distributed between items(as well as space at the start and end)
 *  space-between: no space at start and end
 *  Ctrl + Space (to know other directions)
 *
 */

/**
 * By default items get shrunk in order to fit all items on a single line.
 * If you want them to wrap instead, set `flexWrap` property
 *
 */

export default function App() {
    return (
        <View
            style={{
                backgroundColor: '#fff',
                flex: 1,
                flexDirection: 'row', // Main axis - Horizontal
                justifyContent: 'center', // Justifies content on the main axis
                alignItems: 'center', // Secondary axis - stretch main
                flexWrap: 'wrap', // default is nowrap
                alignContent: 'center', // Align items at the center - works only with wrapping enabled
            }}
        >
            {/* 2 1 1 - 4 segments */}
            <View
                style={{
                    backgroundColor: 'dodgerblue',
                    flexBasis: 100, // Set size of an item on the primary axis same as `width: 100` here
                    width: 100,
                    height: 100,
                    // alignSelf: 'flex-start', // Align only this item
                    flexGrow: 1, // Fill rest of the space on the axis - same as flex: 1
                    flexShrink: 1, // Shrink in order avoid overflow - same as flex: -1
                }}
            />
            <View
                style={{
                    backgroundColor: 'gold',
                    width: 100,
                    height: 100,
                }}
            />
            <View
                style={{
                    backgroundColor: 'tomato',
                    width: 100,
                    height: 100,
                }}
            />
            <View
                style={{
                    backgroundColor: 'grey',
                    width: 100,
                    height: 100,
                }}
            />
        </View>
    );
}

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
// });
