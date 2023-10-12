import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function Home({ navigation }) {
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");
  const [player3, setPlayer3] = useState("");
  const [player4, setPlayer4] = useState("");

  return (
    <View style={styles.container}>
      <View style={{ padding: "" }}>
        <Text style={{ fontSize: 40, color: 'red', fontWeight: 'bold', fontStyle: 'italic'}}>Game Show 113</Text>
      </View>
      <View style={styles.startBtn}>
        <Button title="Start" onPress={() => navigation.navigate("Start")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  startBtn: {
    position: "absolute",
    bottom: 100,
    left: 100,
    right: 100,
  },
  input: {
    height: 40,
    margin: 12,
    borderBottomColor: "#000000",
    borderBottomWidth: 1,
    padding: 4,
  },
});
