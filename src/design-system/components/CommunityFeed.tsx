import { Image, ScrollView } from "react-native";
import Box from "./Box";
import Text from "./Text";
import { getComputedHeight } from "../layouts/responsive";
import { IMAGES } from "../../utils/constants";

function CommunityFeed({}) {
  return (
    <ScrollView style={{ flexDirection: "row" }}>
      <Box marginHorizontal="space-8" marginVertical="space-32">
        <Box
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          marginBottom="space-12"
        >
          <Text color="black" variant="heading-2">
            Community Feed
          </Text>
          <Text color="blue">View all</Text>
        </Box>
        <Image
          source={IMAGES[0]}
          style={{ height: getComputedHeight(50, 150) }}
        />
      </Box>
    </ScrollView>
  );
}

export default CommunityFeed;
