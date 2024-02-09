import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Image,
    TouchableWithoutFeedback,
    TouchableOpacity,
    TouchableHighlight,
    TouchableNativeFeedback,
    Button,
    Alert,
    Platform,
    StatusBar,
} from 'react-native';

export default function App() {
    const handlePress = () => {
        console.log('Hello');
    };

    // Returns a reference id
    // console.log(require('./assets/icon.png'));
    return (
        /**
         * We can pass in an array of styles
         *
         * style={[styles.container, containerStyle]}
         */
        <SafeAreaView style={styles.container}>
            {/* Truncates it to one line */}
            <Text numberOfLines={1} onPress={handlePress}>
                Shall we begin!
            </Text>
            {/* Self closing syntax as nothing comes in between */}
            {/* <Image source={require('./assets/splash.png')} /> */}
            {/* Componenent to make any other Componenent be touchable/have on press features.*/}
            {/* TouchableWithoutFeedback - No Visual Feedback
            TouchableOpacity - Reduces the opacity
            TouchableHighlight - Background darkens for a period*/}
            <TouchableWithoutFeedback
                onPress={() => {
                    console.log('Image has been tapped.');
                }}
            >
                {/* Does not load images unless dimensions are specified */}
                <Image
                    // blurRadius={10} // Blurs the picture
                    // fadeDuration={1000} // Fades in over 1 second
                    source={{
                        width: 200,
                        height: 300,
                        uri: 'https://picsum.photos/200/300',
                    }}
                />
            </TouchableWithoutFeedback>
            {/* Android Only Componenent - TouchableOpacity
            Works with view that have a background color*/}
            <TouchableNativeFeedback>
                <View
                    style={{
                        width: 200,
                        height: 70,
                        backgroundColor: 'dodgerblue',
                    }}
                ></View>
            </TouchableNativeFeedback>
            {/* <Button
                color={'orange'}
                title="Click me"
                onPress={() => {
                    alert('Button tapped!');
                }}
            >
                Hello
            </Button> */}
            {/* Using the Alert API to create custom Alerts */}
            <Button
                color={'orange'}
                title="Click me"
                onPress={() => {
                    // Can also be Alert.prompt()
                    // Takes in the title, message and a list of buttons
                    Alert.alert('My title', 'My message', [
                        {
                            text: 'Yes',
                            onPress: () => {
                                console.log('Yes');
                            },
                        },
                        {
                            text: 'No',
                            onPress: () => {
                                console.log('No');
                            },
                        },
                    ]);
                    // Only works on ios
                    // Alert.prompt('My title', 'My message', (text) => {
                    //     console.log(text);
                    // });
                }}
            />
        </SafeAreaView>
    );
}

// Works as well
const containerStyle = {
    backgroundColor: 'orange',
};

/**
 * Using StyleSheet validates any property,
 * making sure we don't misspell anything.
 *
 * - StatusBar API to discover where the Status Bar is
 * = Platform to which OS you are running on
 *  */
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // Center on the screen
        alignItems: 'center',
        justifyContent: 'center',

        // Now our Screen fits right below the status bar
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
});
