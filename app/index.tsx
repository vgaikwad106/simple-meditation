import { View, Text, ImageBackground, Image } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

import beachImage from "../assets/meditation-images/beach.webp";
import "./global.css";
import MButton from "@/components/MButton";
import { useRouter } from "expo-router";
import AppGradient from "@/components/AppGradient";
import meditateIcon from "../assets/meditate-icon.png";

const App = () => {
  const router = useRouter();

  return (
    <View className="flex-1">
      <ImageBackground source={beachImage} className="flex-1">
        <AppGradient colors={["rgba(0,0,0,0.4)", "rgba(0,0,0,0.8)"]}>
          <SafeAreaView className="flex-1 px-1 justify-between">
            <View>
              <View className="items-center mb-5">
                <Image source={meditateIcon} />
              </View>
              <Text className="text-center text-white font-bold text-4xl">
                Muse Meditation
              </Text>
              <Text className="text-center text-regular text-white text-xl mt-2">
                Find your calm. Fuel your muse.
              </Text>
            </View>
            <View>
              <MButton
                onPress={() => router.push("/nature-meditate")}
                title="Get Started"></MButton>
            </View>
            <StatusBar style="light" />
          </SafeAreaView>
        </AppGradient>
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
