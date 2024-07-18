import {LinearGradient} from 'expo-linear-gradient';
import {Image, StyleSheet} from "react-native";
import Animated, {useAnimatedScrollHandler, useSharedValue} from 'react-native-reanimated';
import Box from "../../design-system/components/Box";
import {FLEX, TITLES, IMAGES} from "../../utils/constants";
import WelcomeSlide from "./WelcomeSlide";
import {Pagination} from "../../design-system/components/pagination";
import { Button } from '../../design-system/components/buttons/button';
import { getComputedWidth } from '../../design-system/layouts/responsive';
import Icon from '../../assets/svgs/icon';

export function WelcomScreen() {
    const scrollX = useSharedValue(0);
    const scrollHandler = useAnimatedScrollHandler({
        onScroll: (event) => {
            scrollX.value = event.contentOffset.x;
        }
    });

    return (
        <Box style={FLEX}>
            {/* <Box style={styles.logoContainer}>
                <Image source={require("../../assets/images/hospyta.png")} style={{backgroundColor: "transparent"}}/>
            </Box> */}
            <Box style={[FLEX, {backgroundColor: "black", opacity: .7}]}>
                <Box style={FLEX}>
                    <Animated.ScrollView
                        horizontal={true}
                        pagingEnabled={true}
                        scrollEventThrottle={16}
                        showsHorizontalScrollIndicator={false}
                        bounces={false}
                        onScroll={scrollHandler}
                    >
                        {TITLES.map((item, index) => (
                            <>
                                <WelcomeSlide title={item} image={IMAGES[index]} key={item} />
                            </>
                        ))}
                    </Animated.ScrollView>
                    <Box style={styles.buttonContainer} marginBottom="space-32">
                        <Button title="Sign In" textProps={{color: "white"}} />
                        <Button
                            title="Sign Up"
                            backgroundColor='transparent'
                            style={{borderWidth: 1, borderColor: "white"}}
                        />
                    </Box>
                </Box>
                <Box>
                    <Pagination scrollX={scrollX} />
                </Box>
            </Box>
        </Box>
    )
}

const styles = StyleSheet.create({
    logoContainer: {
       backgroundColor: "transparent",
    },
    buttonContainer: {
        position: "absolute",
        bottom: 20,
        width: "100%",
        paddingHorizontal: 10,
    }
});