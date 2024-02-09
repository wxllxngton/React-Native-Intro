import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// Absolute and Relative Positioning
export default function App() {
    return (
        <View
            style={{
                backgroundColor: '#fff',
                flex: 1,
                flexDirection: 'row', // Main axis - Horizontal
                justifyContent: 'center', // Justifies content on the main axis
                alignItems: 'center', // Secondary axis - stretch main
            }}
        >
            {/* 2 1 1 - 4 segments */}
            <View
                style={{
                    backgroundColor: 'dodgerblue',
                    width: 100,
                    height: 100,
                }}
            />
            <View
                style={{
                    backgroundColor: 'gold',
                    width: 100,
                    height: 100,
                    // top: 20, // Move 20 pixels from the top, same as `bottom: -20`
                    // bottom: 20, // Move 20 pixels from the bottom, same as `top: -20`
                    // There's also left and right
                    top: 20,
                    left: 20,
                    position: 'absolute', // Set to `relative` to its parent container as default
                }}
            />
            <View
                style={{
                    backgroundColor: 'tomato',
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
