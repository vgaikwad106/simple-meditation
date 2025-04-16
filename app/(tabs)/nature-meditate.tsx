import { View, Text, FlatList, Pressable, ImageBackground } from "react-native";
import React from "react";
import AppGradient from "@/components/AppGradient";
import { StatusBar } from "expo-status-bar";
import { MEDITATION_DATA } from "@/constants/MeditationData";
import MEDITATION_IMAGES from "@/constants/meditation-images";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";

const NatureMeditate = () => {
  return (
    <View className="flex-1">
      <AppGradient colors={["#161b2e", "#0a4d4a", "#766e67"]}>
        <View className="mb-6">
          <Text className="text-gray-200 mb-3 text-3xl text-left font-semibold">
            Welcome, VeeJee!
          </Text>
          <Text className="text-indigo-100 mb-3 text-xl text-left font-medium">
            Start your meditation journey here ...
          </Text>
        </View>
        <View>
          {/* component for rendering vertical or horizontal lists */}

          <FlatList
            data={MEDITATION_DATA}
            className="mb-20"
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <Pressable
                onPress={() => router.push(`/meditate/${item.id}`)}
                className="h-48 my-3 rounded-md overflow-hidden">
                <ImageBackground
                  source={MEDITATION_IMAGES[item.id - 1]}
                  resizeMode="cover"
                  className="flex-1 rounded-lg justify-end">
                  <View
                    className="justify-end items-center"
                    style={styles.textBkg}>
                    <Text className="text-gray-100 text-3xl p-4 text-center font-medium">
                      {item.title}
                    </Text>
                  </View>
                </ImageBackground>
              </Pressable>
            )}
          />
        </View>
      </AppGradient>
      <StatusBar style="light" />
    </View>
  );
};

const styles = {
  textBkg: {
    backgroundColor: "rgba(0,0,0,0.5)",
  },
};

export default NatureMeditate;
