import { Image, StyleSheet, Text, View, ScrollView } from "react-native";
import { useTodoStore } from "../../store/Todos";
import Item from "./Item";

const Todo = () => {
  const { todos } = useTodoStore();

  // Sort Todos by id
  const sortedTodos = todos.sort((a, b) => a.id - b.id);

  return (
    <ScrollView style={styles.wrapper}>
      {sortedTodos.map((todo, index) => (
        <Item
          key={index}
          id={todo.id}
          text={todo.text}
          checked={todo.checked}
        />
      ))}

      {todos.length === 0 && (
        <View style={styles.placeholder}>
          <Image
            source={{
              uri: "https://media.giphy.com/media/ztm2TsXkrUeQ0/giphy.gif",
            }}
            style={{ width: 200, height: 200 }}
          />
          <Text style={styles.placeholder__text}>You don't have any todos</Text>
        </View>
      )}
    </ScrollView>
  );
};

export default Todo;

const styles = StyleSheet.create({
  wrapper: {
    gap: 16,
    paddingHorizontal: 20,
    height: "100%",
  },

  placeholder: {
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
    height: "100%",
  },

  placeholder__text: {
    color: "hsl(162, 93%, 45%)",
    fontSize: 14,
    fontFamily: "JetBrainsMono",
  },
});
