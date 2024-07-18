import { Image, ImageProps, ScrollView } from "react-native";
import { getComputedWidth } from "../layouts/responsive";

function Glider({images}: {Images: Array<ImageProps>}) {
    return (
        <ScrollView style={{flexDirection: "row", overflow: "hidden"}}>
            {images?.map((image) => <Image source={image} />)}
        </ScrollView>
    )
};

export default Glider;