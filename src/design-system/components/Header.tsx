import { Avatar } from "react-native-paper";
import Box from "./Box";
import Text from "./Text";

function Header() {
    return (
        <Box flexDirection='row' gap='space-8' alignItems="center">
            <Avatar.Image size={100} source={require("../../assets/images/doctor.png")} />
            <Box>
                <Text variant='heading-2'>Welcome Dr,</Text>
                <Text variant='caption-medium'>What do you want to do today ?</Text>
            </Box>
        </Box>
    )
};

export default Header;