import { StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import IconButton from "../ui/IconButton";
import { ItemProps } from "../../@types";
import { useTodoStore } from "../../store/Todos";
import colors from "../../assets/config/colors";

const Item = (props: ItemProps) => {
  const { id, text, checked } = props;
  const { toggleTodo, removeTodo } = useTodoStore();

  const handleToggle = () => {
    toggleTodo && toggleTodo(id);

    // remove todo after toggling 1 second later
    setTimeout(() => {
      removeTodo && removeTodo(id);
    }, 1000);
  };

  return (
    <View style={styles.item}>
      <Text
        style={[
          styles.item__text,
          { textDecorationLine: checked ? "line-through" : "none" },
        ]}
      >
        {text}
      </Text>
      <View style={styles.item__checkbox}>
        <IconButton onPress={handleToggle}>
          <MaterialIcons
            name={checked ? "check-circle" : "circle"}
            size={24}
            color="#fff"
          />
        </IconButton>
      </View>
    </View>
  );
};

export default Item;

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 16,
    marginVertical: 8,
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: colors.primary,
  },

  item__text: {
    width: "90%",
    color: "#fff",
    fontSize: 16,
    fontFamily: "JetBrainsMono",
    lineHeight: 32,
  },

  item__checkbox: {
    width: "10%",
    alignItems: "center",
  },
});
