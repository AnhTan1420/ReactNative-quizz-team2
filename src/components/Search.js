import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

export const Search = ({ onSearch }) => {
  const [text, setText] = useState("");
  return (
    <View style={{ paddingHorizontal: 16 }}>
      <Text style={{ fontSize: 22, color: "#61688B", marginTop: 15 }}>
        Find a quiz you want to learn
      </Text>
      <View style={styles.searchContainer}>
        <TextInput
          value={text}
          onChangeText={(e) => setText(e)}
          style={styles.searchInput}
          placeholder="Search for anything"
        />
        <TouchableOpacity onPress={() => onSearch(text)}>
          <Icon style={styles.iconSearch} size={30} name="search" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    height: 50,
    marginTop: 35,
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 15,
    backgroundColor: "#F5F5F7",
    borderRadius: 30,
    alignItems: "center",
    flexDirection: "row",
  },

  searchInput: {
    fontSize: 18,
    width: "80%",
    marginLeft: 5,
    padding: 8,
    // outlineStyle: "none",
  },
  iconSearch: { padding: 6, paddingRight: 16, borderRadius: 50 },
});
