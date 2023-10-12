import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TextInput, Alert } from "react-native";

export default function Start() {
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");
  const [player3, setPlayer3] = useState("");
  const [player4, setPlayer4] = useState("");

  const [playerPoint1, setPlayerPoint1] = useState(0);
  const [playerPoint2, setPlayerPoint2] = useState(0);
  const [playerPoint3, setPlayerPoint3] = useState(0);
  const [playerPoint4, setPlayerPoint4] = useState(0);
  const [cook, setCook] = useState(0);
  const [lose, setLose] = useState(0);

  const plusOne = (p) => {
    if (p === 1) {
      setPlayerPoint1(playerPoint1 + 1);
      setPlayerPoint4(playerPoint4 - 1);
    } else if (p === 2) {
      setPlayerPoint2(playerPoint2 + 1);
      setPlayerPoint1(playerPoint1 - 1);
    } else if (p === 3) {
      setPlayerPoint3(playerPoint3 + 1);
      setPlayerPoint2(playerPoint2 - 1);
    } else if (p === 4) {
      setPlayerPoint4(playerPoint4 + 1);
      setPlayerPoint3(playerPoint3 - 1);
    }
  };

  const plustTwo = (p) => {
    if (p === 1) {
      setPlayerPoint1(playerPoint1 + 2);
      setPlayerPoint4(playerPoint4 - 2);
    } else if (p === 2) {
      setPlayerPoint2(playerPoint2 + 2);
      setPlayerPoint1(playerPoint1 - 2);
    } else if (p === 3) {
      setPlayerPoint3(playerPoint3 + 2);
      setPlayerPoint2(playerPoint2 - 2);
    } else if (p === 4) {
      setPlayerPoint4(playerPoint4 + 2);
      setPlayerPoint3(playerPoint3 - 2);
    }
  };

  const cookPoint = (p) => {
    if (p === 1) {
      setPlayerPoint1(playerPoint1 - 2);
      setCook(cook + 2);
    } else if (p === 2) {
      setPlayerPoint2(playerPoint2 - 2);
      setCook(cook + 2);
    } else if (p === 3) {
      setPlayerPoint3(playerPoint3 - 2);
      setCook(cook + 2);
    } else if (p === 4) {
      setPlayerPoint4(playerPoint4 - 2);
      setCook(cook + 2);
    }
  };

  const first = (p) => {
    if (p === 1) {
      setPlayerPoint1(playerPoint1 + cook + 3);
      setCook(0);
    } else if (p === 2) {
      setPlayerPoint2(playerPoint2 + cook + 3);
      setCook(0);
    } else if (p === 3) {
      setPlayerPoint3(playerPoint3 + cook + 3);
      setCook(0);
    } else if (p === 4) {
      setPlayerPoint4(playerPoint4 + cook + 3);
      setCook(0);
    }
  };

  const second = (p) => {
    if (p === 1) {
      setPlayerPoint1(playerPoint1 + 2);
    } else if (p === 2) {
      setPlayerPoint2(playerPoint2 + 2);
    } else if (p === 3) {
      setPlayerPoint3(playerPoint3 + 2);
    } else if (p === 4) {
      setPlayerPoint4(playerPoint4 + 2);
    }
  };

  const third = (p) => {
    if (p === 1) {
      setPlayerPoint1(playerPoint1 + 1);
    } else if (p === 2) {
      setPlayerPoint2(playerPoint2 + 1);
    } else if (p === 3) {
      setPlayerPoint3(playerPoint3 + 1);
    } else if (p === 4) {
      setPlayerPoint4(playerPoint4 + 1);
    }
  };

  const win = (p) => {
    if (lose === 0) {
      setPlayerPoint2(playerPoint2 - 3);
      setPlayerPoint3(playerPoint3 - 3);
      setPlayerPoint4(playerPoint4 - 3);
      setPlayerPoint1(playerPoint1 - 3);

      if (p === 1) {
        setPlayerPoint1(playerPoint1 + 9);
      } else if (p === 2) {
        setPlayerPoint2(playerPoint2 + 9);
      } else if (p === 3) {
        setPlayerPoint3(playerPoint3 + 9);
      } else if (p === 4) {
        setPlayerPoint4(playerPoint4 + 9);
      }


    } else {
      if (p === 1) {
        setPlayerPoint1(playerPoint1 + 9);
      } else if (p === 2) {
        setPlayerPoint2(playerPoint2 + 9);
      } else if (p === 3) {
        setPlayerPoint3(playerPoint3 + 9);
      } else if (p === 4) {
        setPlayerPoint4(playerPoint4 + 9);
      }
      //check lose
      if (lose === 1) {
        setPlayerPoint1(playerPoint1 - 9);
      } else if (lose === 2) {
        setPlayerPoint2(playerPoint2 - 9);
      } else if (lose === 3) {
        setPlayerPoint3(playerPoint3 - 9);
      } else if (lose === 4) {
        setPlayerPoint4(playerPoint4 - 9);
      }
      // set lose to zero
      setLose(0);
    }
  };

  const Actions = ({ p }) => {
    return (
      <View style={[styles.col]}>
        <View style={[styles.actions]}>
          <View style={[styles.btn]}>
            <Button title="Ăn" color="" onPress={() => plusOne(p)} />
          </View>

          <View style={[styles.btn]}>
            <Button title="Ăn chốt" color="#32CD32" onPress={() => plustTwo(p)} />
          </View>

          <View style={[styles.btn]}>
            <Button title="Ù" color={'#008000'} onPress={() => win(p)} />
          </View>

          <View style={[styles.btn]}>
            <Button title="Đền làng" color={'#FF0000'} onPress={() => setLose(p)} />
          </View>
        </View>
        <View style={[styles.actions]}>
          <View style={[styles.btn]}>
            <Button title="1" color={'#0000FF'} onPress={() => first(p)} />
          </View>
          <View style={[styles.btn]}>
            <Button title="2" color={'#4169E1'} onPress={() => second(p)} />
          </View>
          <View style={[styles.btn]}>
            <Button title="3" onPress={() => third(p)} />
          </View>
          <View style={[styles.btn]}>
            <Button title="Móm" color={'#FF6347'} onPress={() => cookPoint(p)} />
          </View>
        </View>
      </View>
    );
  };

  const resetPoint = () => {
    setPlayerPoint1(0);
    setPlayerPoint2(0);
    setPlayerPoint3(0);
    setPlayerPoint4(0);
    setCook(0);
    setLose(0);
  };

  const checkReset = () =>
    Alert.alert("Chơi lại", "Sure ???", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: () => resetPoint() },
    ]);

  return (
    <View>
      <View>
        <View style={[styles.child, styles.border]}>
          <View style={[styles.details]}>
            <TextInput
              style={styles.input}
              editable
              // multiline
              // numberOfLines={4}
              maxLength={40}
              onChangeText={(text) => setPlayer1(text)}
              value={player1}
              placeholder="Enter name"
            />
            <Text style={{ marginLeft: 20, fontSize: 20, fontWeight: 800 }}>
              {playerPoint1}
            </Text>
          </View>
          <Actions p={1} />
        </View>

        <View style={[styles.child, styles.border]}>
          <View style={[styles.details]}>
            <TextInput
              style={styles.input}
              editable
              // multiline
              // numberOfLines={4}
              maxLength={40}
              onChangeText={(text) => setPlayer2(text)}
              value={player2}
              placeholder="Enter name"
            />
            <Text style={{ marginLeft: 20, fontSize: 20, fontWeight: 800 }}>
              {playerPoint2}
            </Text>
          </View>
          <Actions p={2} />
        </View>

        <View style={[styles.child, styles.border]}>
          <View style={[styles.details]}>
            <TextInput
              style={styles.input}
              editable
              // multiline
              // numberOfLines={4}
              maxLength={40}
              onChangeText={(text) => setPlayer3(text)}
              value={player3}
              placeholder="Enter name"
            />
            <Text style={{ marginLeft: 20, fontSize: 20, fontWeight: 800 }}>
              {playerPoint3}
            </Text>
          </View>
          <Actions p={3} />
        </View>

        <View style={[styles.child, styles.border]}>
          <View style={[styles.details]}>
            <TextInput
              style={styles.input}
              editable
              // multiline
              // numberOfLines={4}
              maxLength={40}
              onChangeText={(text) => setPlayer4(text)}
              value={player4}
              placeholder="Enter name"
            />
            <Text style={{ marginLeft: 20, fontSize: 20, fontWeight: 800 }}>
              {playerPoint4}
            </Text>
          </View>
          <Actions p={4} />
        </View>
      </View>
      <View style={styles.reset}>
        <Button title="Reset"  onPress={() => checkReset()} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  reset: {
    marginTop: 50,
    paddingLeft: 100,
    paddingRight: 100,
  },
  input: {
    // height: 40,
    margin: 12,
    borderBottomColor: "#000000",
    borderBottomWidth: 1,
    paddingLeft: 8,
  },
  child: {
    width: "100%",
  },
  border: {
    borderColor: "#000000",
    borderBottomWidth: 1,
  },
  details: {
    // flex: 1,
    fontSize: "40px",
    flexDirection: "row",
    // justifyContent: "space-between",
    alignItems: "center",
    marginLeft: 40,
  },
  actions: {
    flexDirection: "row",
    // justifyContent: "space-between",
    alignItems: "center",
    marginTop: 16,
    marginBottom: 16,
  },
  col: {
    flexDirection: "column",
    // justifyContent: "space-between",
    // alignItems: "center",
  },
  btn: {
    marginLeft: 10,
    minWidth: 60,
  },
});
