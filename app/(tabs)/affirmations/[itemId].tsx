import {
  View,
  Text,
  ImageBackground,
  Pressable,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams, router } from "expo-router";
import { GalleryPreviewData } from "@/constants/models/AffirmationCategory";
import AFFIRMATION_GALLERY from "@/constants/affirmations-gallery";
import AppGradient from "@/components/AppGradient";
import AntDesign from "@expo/vector-icons/AntDesign";

const AffirmationPractice = () => {
  // to access the id passed to dynamic route
  const { itemId } = useLocalSearchParams();

  const [affirmation, setAffirmation] = useState<GalleryPreviewData>();
  const [affirmationSentences, setAffirmationSentences] = useState<string[]>(
    []
  );

  //when the page loads, we iterate through the gallery of affirmations and get the data.
  //then we find the affirmation that was selected by matching the id in the route and the id of the affirmations. If found, set the affirmation to showcase.

  useEffect(() => {
    for (let idx = 0; idx < AFFIRMATION_GALLERY.length; idx++) {
      const affirmationData = AFFIRMATION_GALLERY[idx].data;

      const affirmationToStart = affirmationData.find(
        (a) => a.id === Number(itemId)
      );

      if (affirmationToStart) {
        setAffirmation(affirmationToStart);

        //To convert the affirmation into array of sentences to show separately.
        const affirmationArray = affirmationToStart.text.split(".");

        //Remove last element if its an empty string

        if (affirmationArray[affirmationArray.length - 1] === "") {
          affirmationArray.pop();
        }

        setAffirmationSentences(affirmationArray);

        return;
      }
    }
  }, []);

  return (
    <View className="flex-1">
      <ImageBackground
        source={affirmation?.image}
        resizeMode="cover"
        className="flex-1">
        <AppGradient colors={["rgba(0,0,0,0.3)", "rgba(0,0,0,0.9)"]}>
          <Pressable
            onPress={() => router.back()}
            className="absolute top-16 left-6 z-10">
            <AntDesign name="leftcircleo" size={50} color="white" />
          </Pressable>
          <ScrollView className="mt-36" showsVerticalScrollIndicator={false}>
            <View className="h-full justify-center">
              <View className="h-3/4 justify-center">
                {affirmationSentences.map((sentence, idx) => (
                  <Text
                    key={idx}
                    className="text-3xl font-bold mb-12 text-white text-center">
                    {sentence}.
                  </Text>
                ))}
              </View>
            </View>
          </ScrollView>
        </AppGradient>
      </ImageBackground>
    </View>
  );
};

export default AffirmationPractice;
