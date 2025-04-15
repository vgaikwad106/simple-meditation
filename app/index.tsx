import { View, Text, ImageBackground, Image } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

import beachImage from "../assets/meditation-images/beach.webp";
import "./global.css";
import MButton from "@/components/MButton";

const App = () => {
  return (
    <View className="flex-1">
      <ImageBackground source={beachImage} className="flex-1">
        <LinearGradient
          style={styles.flexOne}
          colors={["rgba(0,0,0,0.4)", "rgba(0,0,0,0.8)"]}>
          <SafeAreaView className="flex-1 mx-5 my-12 justify-between">
            <View>
              <Text className="text-center text-white font-bold text-4xl">
                Muse Meditation
              </Text>
              <Text className="text-center text-regular text-white text-xl mt-2">
                Find your calm. Fuel your muse.
              </Text>
            </View>
            <View>
              <MButton
                onPress={() => console.log("Tapped!")}
                title="Get Started"></MButton>
            </View>

            <StatusBar style="light" />
          </SafeAreaView>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

const styles = {
  flexOne: {
    flex: 1,
  },
};

export default App;
