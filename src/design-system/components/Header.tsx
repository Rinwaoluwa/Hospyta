import { Avatar } from "react-native-paper";
import Box from "./Box";
import Text from "./Text";
import { useAppSelector } from "../../utils/redux/hooks";
import { RootState } from "../../utils/redux/store";

function Header({color}:{color?: any}) {
    const {firstName} = useAppSelector((state: RootState) => state.profile);
    return (
        <Box flexDirection='row' gap='space-8' alignItems="center">
            <Avatar.Image size={80} source={require("../../assets/images/doctor.png")} />
            <Box>
                <Text color={color ? color : ""} variant='heading-2'>Welcome Dr {firstName},</Text>
                <Text variant='caption-medium'>What do you want to do today ?</Text>
            </Box>
        </Box>
    )
};

export default Header;