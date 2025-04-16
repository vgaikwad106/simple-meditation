import { View, Text, Pressable } from "react-native";
import React, { useContext } from "react";
import AppGradient from "@/components/AppGradient";
import { router } from "expo-router";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import SButton from "@/components/SButton";
import { TimerContext } from "@/context/TimerContext";

const AdjustMeditationDuration = () => {
  const { setDuration } = useContext(TimerContext);

  const handlePress = (duration: number) => {
    setDuration(duration);
    router.back();
  };

  return (
    <View className="flex-1 relative">
      <AppGradient colors={["#161b2e", "#084d4a", "#766e67"]}>
        <Pressable
          onPress={() => router.back()}
          className="absolute top-8 right-6 z-10">
          <MaterialIcons name="cancel" size={30} color="white" />
        </Pressable>
        <View className="justify-end h-4/5">
          <Text className="text-2xl text-white text-center font-bold mb-8">
            Adjust your meditation duration
          </Text>
          <View>
            <SButton
              title="10 SECONDS"
              onPress={() => handlePress(10)}
              containerStyles="mb-5 rounded-full"
            />
            <SButton
              title="5 MINUTES"
              onPress={() => handlePress(5 * 60)}
              containerStyles="mb-5 rounded-full"
            />
            <SButton
              title="10 MINUTES"
              onPress={() => handlePress(10 * 60)}
              containerStyles="mb-5 rounded-full"
            />
            <SButton
              title="15 MINUTES"
              onPress={() => handlePress(15 * 60)}
              containerStyles="mb-5 rounded-full"
            />
          </View>
        </View>
      </AppGradient>
    </View>
  );
};

export default AdjustMeditationDuration;
