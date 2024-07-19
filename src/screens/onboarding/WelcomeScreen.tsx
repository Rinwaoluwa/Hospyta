import { LinearGradient } from "expo-linear-gradient";
import { Image, StyleSheet } from "react-native";
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";
import Box from "../../design-system/components/Box";
import { FLEX, TITLES, IMAGES } from "../../utils/constants";
import WelcomeSlide from "./WelcomeSlide";
import { Pagination } from "../../design-system/components/pagination";
import { Button } from "../../design-system/components/buttons/button";
import Icon from "../../assets/svgs/icon";


export function WelcomScreen({ navigation }: any) {
  const scrollX = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollX.value = event.contentOffset.x;
    },
  });

  return (
    <Box style={FLEX}>
      <Box>
        <Icon size={30} name='hospyta'/>
      </Box>
      <Box style={[FLEX, { backgroundColor: "black", opacity: 0.7 }]}>
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
            <Button
              title="Sign In"
              textProps={{ color: "white" }}
              onPress={() => navigation.navigate("SignIn")}
            />
            <Button
              title="Sign Up"
              backgroundColor="transparent"
              style={{ borderWidth: 1, borderColor: "white" }}
              onPress={() => navigation.navigate("SignUp")}
            />
          </Box>
        </Box>
        <Box>
          <Pagination scrollX={scrollX} />
        </Box>
      </Box>
    </Box>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    position: "absolute",
    bottom: 20,
    width: "100%",
    paddingHorizontal: 10,
  },
});
