import { ImageBackground } from "react-native";
import Box from "../design-system/components/Box";
import { FLEX } from "../utils/constants";

function ComingSoon() {
    return (
        <Box flex={1}>
            <ImageBackground style={FLEX} source={require("../assets/images/ComingSoon.png")} />
        </Box>
    )
};

export default ComingSoon;