import { View, Text, ImageBackground, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import MEDITATION_IMAGES from "@/constants/meditation-images";
import AppGradient from "@/components/AppGradient";
import { router, useLocalSearchParams } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import MButton from "@/components/MButton";

const Meditate = () => {
  const { id } = useLocalSearchParams();

  const [secondsRem, setSecondRem] = useState(10);

  const [isMeditating, setIsMeditating] = useState(false);

  //useEffect for changing timer when start meditation is pressed and called everytime the secondsRem changes
  useEffect(() => {
    let timerId: NodeJS.Timeout;
    //Exit
    if (secondsRem === 0) {
      setIsMeditating(false);
      return;
    }
    //called every second not when mounts but only when isMeditating
    if (isMeditating) {
      timerId = setTimeout(() => {
        setSecondRem(secondsRem - 1);
      }, 1000);
    }

    //called when component unmounts e.g. back button
    return () => {
      clearTimeout(timerId);
    };
  }, [secondsRem, isMeditating]);

  return (
    <View className="flex-1">
      <ImageBackground
        source={MEDITATION_IMAGES[Number(id) - 1]}
        resizeMode="cover"
        className="flex-1">
        <AppGradient colors={["transparent", "rgba(0,0,0,0.8)"]}>
          <Pressable
            onPress={() => router.back()}
            className="absolute top-16 left-6 z-10">
            <AntDesign name="leftcircleo" size={50} color="white" />
          </Pressable>
          <View className="flex-1 justify-center">
            <View className="mx-auto bg-neutral-200 rounded-full w-44 h-44 justify-center items-center">
              <Text className="text-4xl text-blue-600 font-rmono">
                00:{secondsRem}
              </Text>
            </View>
          </View>

          <View className="mb-5">
            <MButton
              title="Start Meditation"
              onPress={() => setIsMeditating(true)}></MButton>
          </View>
        </AppGradient>
      </ImageBackground>
    </View>
  );
};

export default Meditate;
