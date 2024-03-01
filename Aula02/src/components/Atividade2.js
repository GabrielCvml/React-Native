import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Atividade2 = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.child, { backgroundColor: "red" }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  child: {
    height: 50,
    width: 50,
    margin: "auto",
  },
});

export default Atividade2;