import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import Content from "./Content";

const AppGradient = ({
  children,
  colors,
}: {
  children: any;
  colors: string[];
}) => {
  return (
    <LinearGradient colors={colors} style={styles.flexOne}>
      <Content>{children}</Content>
    </LinearGradient>
  );
};

const styles = {
  flexOne: {
    flex: 1,
  },
};

export default AppGradient;
