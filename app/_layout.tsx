import { Stack } from "expo-router";

export default function RootLayout() {
  return (
  <Stack>
    <Stack.Screen name="index"
    options={{ title: "Home"}} 
    />
    </Stack>
  );
} 

const style = StyleSheet.create({
  container: {
    flex: 1,
    jutifyContent: "center",
    alignItens: "center"
  }
}
)
