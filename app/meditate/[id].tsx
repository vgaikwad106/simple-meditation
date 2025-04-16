import { View, Text, ImageBackground, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import MEDITATION_IMAGES from "@/constants/meditation-images";
import AppGradient from "@/components/AppGradient";
import { router, useLocalSearchParams } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import MButton from "@/components/MButton";
import { Audio } from "expo-av";
import { MEDITATION_DATA, AUDIO_FILES } from "@/constants/MeditationData";

const Meditate = () => {
  const { id } = useLocalSearchParams();
  const [secondsRem, setSecondRem] = useState(10);
  const [isMeditating, setIsMeditating] = useState(false);
  const [audio, setAudio] = useState<Audio.Sound>();
  const [isPlaying, setIsPlaying] = useState(false);

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

  //useEffect for stopping audio when component demounts
  useEffect(() => {
    return () => {
      audio?.unloadAsync();
      setIsMeditating(!isMeditating);
      setIsPlaying(!isPlaying);
    };
  }, [audio]);

  //for audio sound
  const toggleMeditationsessionStatus = async () => {
    if (secondsRem === 0) setSecondRem(10);
    setIsMeditating(!isMeditating);

    await toggleAudio();
  };

  const toggleAudio = async () => {
    //check or initialize sound if not already initialized
    const sound = audio ? audio : await initializeSound();

    const status = await sound?.getStatusAsync();

    //call the play method baased on status
    if (status?.isLoaded && !isPlaying) {
      await sound.playAsync();
      setIsPlaying(true);
    } else {
      await sound.pauseAsync();
      setIsPlaying(false);
    }
  };

  const initializeSound = async () => {
    //find the audio file name
    const audioFileName = MEDITATION_DATA[Number(id) - 1].audio;

    //get the audio file
    const { sound } = await Audio.Sound.createAsync(AUDIO_FILES[audioFileName]);

    //set audio state with sound
    setAudio(sound);

    //return the sound
    return sound;
  };

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
              onPress={toggleMeditationsessionStatus}></MButton>
            <MButton
              title="Adjust Duration"
              onPress={toggleMeditationsessionStatus}
              containerStyles="mt-4"></MButton>
          </View>
        </AppGradient>
      </ImageBackground>
    </View>
  );
};

export default Meditate;
