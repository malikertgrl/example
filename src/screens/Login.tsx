import React, { useEffect, useState } from 'react';
import {
    View,
    Platform,
    UIManager,
    LayoutAnimation,
    StyleSheet,
    TextInput,
    SafeAreaView,
} from 'react-native';
import Layout from './Layout';

if (
    Platform.OS === 'android' &&
    UIManager.setLayoutAnimationEnabledExperimental
) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

const Login = () => {
    const [isShownLoading, setisShownLoading] = useState(false)
    const [thirdBoxPosition, setThirdBoxPosition] = useState('up');



    const toggleThirdBox = () => {
        LayoutAnimation.configureNext({
            duration: 1000,
            create: { type: 'linear', property: 'opacity' },
            update: { type: "linear", property: 'opacity' },
            // delete: { type: "linear", property: "opacity" }
        });
        setThirdBoxPosition('down');
    };

    const showAnimation = () => {
        setTimeout(toggleThirdBox, 1000)


    }


    useEffect(() => {
        showAnimation()
    }, [])

    return (
        <SafeAreaView style={{flex:1}}>
            <View
                style={[
                    styles.box,
                    thirdBoxPosition === "down" ? styles.moveDown : null
                ]}>
                <View style={{ width: '90%', padding: 10 }}>
                    <TextInput placeholder="name" style={styles.inputStyle} />
                </View>
                <View style={{ width: '90%', padding: 10 }}>
                    <TextInput placeholder="surName" style={styles.inputStyle}
                    />
                </View>
            </View>

        </SafeAreaView>


    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    box: {
        opacity: 0,
        flex: 1,
        alignItems: 'center',
    },
    moveDown: {
        flex: 1,
        opacity: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer: {
        alignSelf: 'center',
    },
    inputStyle: { borderWidth: 1, padding: 10, borderRadius: 5 }
});

export default Login;
