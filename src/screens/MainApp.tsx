import { Image, ImageBackground, Pressable, ScrollView, StyleSheet } from "react-native";
import Box from "../design-system/components/Box";
import Header from "../design-system/components/Header";
import { Icon as IconRN, Switch } from "react-native-paper";
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
import Icon from "../assets/svgs/icon";

function MainApp({navigation}: any) {
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  return (
    <Box marginVertical="space-20" marginHorizontal="space-8">
      <ScrollView>
        <Box
          flexDirection="row"
          marginVertical="space-40"
          justifyContent="space-between"
          gap='space-20'
        >
          <Header />
          <Box flex={1} flexDirection='row' alignItems='center' gap='space-2'>
            <IconRN size={25} source="bell-outline" />
            <Pressable onPress={() => navigation.openDrawer()}>
              <Icon size={80} name='hamburger' />
            </Pressable>
          </Box>
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
            <IconRN size={20} source="calendar-month-outline" />
            <Text color="black">Schedule appointment calender</Text>
            <IconRN size={20} source="arrow-right-thin" />
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
        <Box flexDirection='row' justifyContent='center'>
          <ImageBackground
            source={require("../assets/images/CTA.png")}
            style={{ height: getComputedHeight(50, 70), borderRadius: 50, flex: 1, flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 20, paddingVertical: 10,}}
          >
            <Box marginVertical='space-64' width={200}>
              <Text color='white' variant="heading-2">Amartem</Text>
              <Text color='white' variant="heading-2">2001</Text>
              <Text color='white' variant="body-medium" style={{flexWrap: "wrap"}}>
                For malaria and Fever made for both.
              </Text>
            </Box>
            <Box marginVertical='space-64'>
              <Text color='white' variant="heading-2">₦2000</Text>
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
    paddingHorizontal: 20,
  }
});
