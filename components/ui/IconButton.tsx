import { StyleSheet, TouchableWithoutFeedback } from "react-native";
import { IconButtonProps } from "../../@types";

const IconButton = (props: IconButtonProps) => {
  const { onPress, children } = props;

  return (
    <TouchableWithoutFeedback
      style={styles.button}
      onPress={onPress}
      accessibilityRole="button"
    >
      {children}
    </TouchableWithoutFeedback>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    width: 40,
    height: 40,
    backgroundColor: "blue",
  },
});
