import { BlurView } from "expo-blur";
import { StyleSheet, View } from "react-native";
import { Icon } from "react-native-paper";
import Box from "./Box";
import Text from "./Text";
import { Button } from "./buttons/button";

function Card({ bgColor }: { bgColor: string }) {
  return (
    // Outer Box
    <Box style={styles.outerBox}>
      {/* Inner Box */}
      <Box style={[styles.innerBox, { backgroundColor: bgColor }]}>
        <Box flexDirection="row" gap='space-8'>
          <BlurView style={styles.date}>
            <Text color="white" variant="heading-3">
              29
            </Text>
            <Text color="white" variant="heading-3">
              Tue
            </Text>
            <View style={styles.borderLine}></View>
            <Text color="white" variant="heading-3">
              2:00PM
            </Text>
          </BlurView>
          <Box>
            <Text color="white" variant="heading-3">
              Pending Appointment
            </Text>
            <Text color="white" variant="heading-2">
              Tanvhir Ahmed
            </Text>
            <Text color="white" variant="caption-regular">
              High blood pressure
            </Text>
          </Box>
        </Box>
        <Box alignSelf="flex-end" gap="space-8" flexDirection="row" marginRight="space-40">
          <Box flexDirection="row" alignItems='center' gap="space-4">
            <Icon color="white" size={24} source="timer-outline" />
            <Text color="white" variant="caption-regular">
              0:01:20
            </Text>
          </Box>
          <Button
            color="purple"
            title="view patient"
            backgroundColor="white"
            style={{ width: 150, paddingVertical: 8, paddingHorizontal: 8 }}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default Card;

const styles = StyleSheet.create({
  outerBox: {
    position: "relative",
  },
  blurContainer: {
    flex: 1,
    padding: 50,
    borderRadius: 80,
    position: "absolute",
    bottom: -20,
  },
  innerBox: {
    borderRadius: 30,
    alignItems: "center",
    paddingVertical: 40,
  },
  date: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 30,
  },
  time: {},
  button: {},
  // date: {},
  borderLine: {
    flex: 1,
    height: 1,
    // width: 3,
    backgroundColor: "#FFFFFF",
  },
});
