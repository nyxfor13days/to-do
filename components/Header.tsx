import { StyleSheet, Text, View } from "react-native";
import colors from "../assets/config/colors";

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>today's task</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    height: 124,
    justifyContent: "center",
  },

  title: {
    color: colors.onBackground,
    fontSize: 36,
    fontFamily: "JetBrainsMono",
    letterSpacing: -1.5,
  },
});

export default Header;
