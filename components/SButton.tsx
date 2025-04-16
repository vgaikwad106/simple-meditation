import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

interface MButtonProps {
  onPress: () => void;
  title: string;
  textStyles?: string;
  containerStyles?: string;
}

const MButton = ({
  onPress,
  title,
  textStyles = "",
  containerStyles = "",
}: MButtonProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className={`border-white border-2 min-h-[62px] justify-center items-center ${containerStyles}`}
      onPress={onPress}>
      <Text className={`font-semibold text-lg text-white ${textStyles}`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default MButton;
