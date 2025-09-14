import { StatusBar } from "expo-status-bar";
import React from "react";
import { Platform, SafeAreaView, StyleSheet, Text, View } from "react-native";
import InputForm from "../components/InputForm";
import TodoItem from "../components/TodoItem";

const MainScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={"default"}></StatusBar>
      <Text style={styles.pageStyle}>Todo App</Text>
      <View style={styles.listView}>
        <Text style={styles.listTitle}>할 일</Text>
        <TodoItem />
      </View>
      <View style={styles.seperator} />
      <View style={styles.listView}>
        <Text style={styles.listTitle}>완료 된 일</Text>
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
});
