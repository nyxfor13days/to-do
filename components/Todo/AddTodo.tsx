import { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import colors from "../../assets/config/colors";
import IconButton from "../ui/IconButton";
import { useTodoStore } from "../../store/Todos";

const AddTodo = () => {
  const [text, setText] = useState("");
  const { addTodo } = useTodoStore();

  const handleSubmit = () => {
    text && addTodo && addTodo(text);
    setText("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <TextInput
          style={styles.input}
          placeholder="Add Todo"
          placeholderTextColor={colors.primary}
          multiline
          maxLength={120}
          value={text}
          onChange={(e) => setText(e.nativeEvent.text)}
        />
        <IconButton onPress={handleSubmit}>
          <MaterialIcons
            name="keyboard-arrow-right"
            size={24}
            color={colors.onBackground}
          />
        </IconButton>
      </View>
    </View>
  );
};

export default AddTodo;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 24,
    paddingHorizontal: 20,
    width: "100%",
  },

  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: colors.primary,
  },

  input: {
    flex: 1,
    padding: 16,
    color: colors.onBackground,
  },
});
