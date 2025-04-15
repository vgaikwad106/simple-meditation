//Defines shared UI Components for all files within that directory

import { Slot, Stack } from "expo-router";

export default function RootLayout() {
  // return <Slot />;

  // Stacks screens - allows other screens to be displayed on top of current one
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
}
