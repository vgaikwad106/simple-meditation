import { View, Text, ScrollView } from "react-native";
import React from "react";
import AppGradient from "@/components/AppGradient";

import AFFIRMATION_GALLERY from "@/constants/affirmations-gallery";
import GuidedAffirmationsGallery from "@/components/GuidedAffirmationsGallery";

const Affirmations = () => {
  return (
    <View className="flex-1">
      <AppGradient colors={["#2e1f58", "#54426b", "#a790af"]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text className="text-gray-200 mb-3 text-3xl text-left font-bold">
            Affirmations
          </Text>
          <Text className="text-indigo-100 mb-3 text-xl text-left font-medium">
            Become a new you ...
          </Text>
          <View>
            {/* For each category that has multiple affirmations, create one gallery! */}
            {AFFIRMATION_GALLERY.map((g) => (
              <GuidedAffirmationsGallery
                key={g.title}
                title={g.title}
                previews={g.data}
              />
            ))}
          </View>
        </ScrollView>
      </AppGradient>
    </View>
  );
};

export default Affirmations;
