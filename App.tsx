import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import colors from "./assets/config/colors";
import { useCallback } from "react";
import Header from "./components/Header";
import Todo from "./components/Todo";
import AddTodo from "./components/Todo/AddTodo";

SplashScreen.preventAutoHideAsync();

const App = () => {
  const [fontsLoaded] = useFonts({
    JetBrainsMono: require("./assets/fonts/JetBrainsMono-Variable.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      // Artificial Delay
      // await new Promise((resolve) => setTimeout(resolve, 2000));
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <SafeAreaView>
        <Header />
        <Todo />
      </SafeAreaView>
      <AddTodo />
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});

export default App;
