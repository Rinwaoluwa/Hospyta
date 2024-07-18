import { Image, ImageBackground, ScrollView, StyleSheet } from "react-native";
import Box from "../design-system/components/Box";
import Header from "../design-system/components/Header";
import { Icon, Switch } from "react-native-paper";
import Card from "../design-system/components/Card";
import { useState } from "react";
import Text from "../design-system/components/Text";
import Glider from "../design-system/components/ImageGlider";
import { IMAGES } from "../utils/constants";
import {
  getComputedHeight,
  getComputedWidth,
} from "../design-system/layouts/responsive";
import CommunityFeed from "../design-system/components/CommunityFeed";

function MainApp() {
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  return (
    <Box marginVertical="space-20" marginHorizontal="space-8">
      <ScrollView>
        <Box
          flexDirection="row"
          marginVertical="space-40"
          justifyContent="space-between"
        >
          <Header />
          <Icon size={24} source="bell-outline" />
        </Box>

        <Card bgColor="purple" />

        <Box
          marginHorizontal="space-32"
          gap="space-16"
          marginVertical="space-40"
        >
          <Box
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            paddingVertical="space-8"
            paddingHorizontal="space-12"
            backgroundColor="grey3"
            borderRadius="space-20"
          >
            <Text color="green">I am Available</Text>
            <Switch
              color="green"
              value={isSwitchOn}
              onValueChange={onToggleSwitch}
            />
          </Box>
          <Box
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            paddingVertical="space-16"
            paddingHorizontal="space-12"
            backgroundColor="grey3"
            borderRadius="space-20"
            gap="space-8"
          >
            <Icon size={20} source="calendar-month-outline" />
            <Text color="black">Schedule appointment calender</Text>
            <Icon size={20} source="arrow-right-thin" />
          </Box>
        </Box>
        {/* Community Feed */}
        <CommunityFeed />

        {/* Shop for Medical Device */}
        <Box marginHorizontal="space-8" marginVertical="space-32">
          <Box
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            marginBottom="space-12"
          >
            <Text color="black" variant="heading-2">
              Shop for Medical Device
            </Text>
            <Text color="blue">View all</Text>
          </Box>
          <Image
            source={IMAGES[2]}
            style={{ height: getComputedHeight(50, 300), width: getComputedWidth(50, 150), }}
          />
        </Box>

        {/* Shop for Medicine */}
        <Box marginHorizontal="space-8" marginVertical="space-32">
          <Box
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            marginBottom="space-12"
          >
            <Text color="black" variant="heading-2">
              Shop for Medicines
            </Text>
            <Text color="blue">View all</Text>
          </Box>
          <Image
            source={IMAGES[1]}
            style={{ height: getComputedHeight(50, 300), width: getComputedWidth(50, 150), }}
          />
        </Box>

        {/* CTA */}
        <Box style={styles.cta}>
          <ImageBackground
            source={require("../assets/images/CTA.png")}
            style={{ height: getComputedHeight(50, 70), borderRadius: 50}}
          >
            <Box marginVertical='space-20' marginHorizontal='space-20'>
              <Text color='white' variant="heading-1">Amartem</Text>
              <Text color='white' variant="heading-1">2001</Text>
              <Text color='white' variant="body-semibold">
                For malaria and Fever made for both.
              </Text>
            </Box>
            <Box>
              <Text color='white' variant="heading-1">₦2000</Text>
              <Text color='white' variant="body-semibold" style={{ textDecorationLine: 'line-through' }}>₦12000</Text>
            </Box>
          </ImageBackground>
        </Box>

        {/* News Feed. */}
        <Box marginHorizontal="space-8" marginVertical="space-32">
          <Box
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            marginBottom="space-12"
          >
            <Text color="black" variant="heading-2">
              News Feed.
            </Text>
            <Text color="blue">View all</Text>
          </Box>
          <Box flexDirection='row' gap='space-12'>
            <Image
                source={IMAGES[0]}
                style={{ height: getComputedHeight(50, 300), width: getComputedWidth(50, 150), borderRadius: 10}}
            />
            <Box flexWrap="wrap">
                <Text color="grey1" variant='body-semibold'>r/worldnews</Text>
                <Text color='black' variant='body-medium'>Getting The Upper Hand On Asthma Allergy</Text>
            </Box>
          </Box>
        </Box>
      </ScrollView>
    </Box>
  );
}

export default MainApp;

const styles = StyleSheet.create({
    cta: {
        position: "relative",
    }
});
