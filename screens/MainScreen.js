import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  FlatList,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import InputForm from "../components/InputForm";
import TodoItem from "../components/TodoItem";
import { useSelector } from "react-redux";

const MainScreen = () => {
  const todos = useSelector((state) => state.todo.todos); //리덕스 스토어의 상태에 접근하기 위한 후크, 선택자 함수를 인수로 사용
  const todoTasks = todos.filter((item) => item.state === "todo"); //todo상태의 데이터
  const completedTasks = todos.filter((item) => item.state === "done"); //done상태의 데이터
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={"default"}></StatusBar>
      <Text style={styles.pageStyle}>Todo App</Text>
      <View style={styles.listView}>
        <Text style={styles.listTitle}>할 일</Text>
        {todoTasks.length !== 0 ? ( //todoTask가 존재할 경우
          <FlatList
            data={todoTasks}
            renderItem={({ item }) => <TodoItem {...item} />}
            keyExtractor={(item) => item.id}
          ></FlatList>
        ) : (
          <Text style={styles.emptyListText}>할 일이 없습니다.</Text>
        )}
      </View>
      <View style={styles.seperator} />
      <View style={styles.listView}>
        <Text style={styles.listTitle}>완료 된 일</Text>
        {completedTasks.length !== 0 ? ( //todoTask가 존재할 경우
          <FlatList
            data={completedTasks}
            renderItem={({ item }) => <TodoItem {...item} />}
            keyExtractor={(item) => item.id}
          ></FlatList>
        ) : (
          <Text style={styles.emptyListText}>완료된 일이 없습니다.</Text>
        )}
      </View>
      <InputForm />
    </SafeAreaView>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 50 : 0,
    backgroundColor: "#f7f8fa",
  },
  pageStyle: {
    marginBottom: 35,
    paddingHorizontal: 15,
    fontSize: 64,
    fontWeight: "600",
  },
  seperator: {
    marginHorizontal: 10,
    marginTop: 25,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0, 0, 0, 0.2)",
  },
  listView: {
    flex: 1,
  },
  listTitle: {
    marginBottom: 25,
    paddingHorizontal: 15,
    fontWeight: "500",
    fontSize: 41,
  },
  emptyListText: {
    paddingTop: 10,
    paddingBottom: 15,
    paddingHorizontal: 15,
    fontSize: 15,
    lineHeight: 20,
    color: "#737373",
  },
});
