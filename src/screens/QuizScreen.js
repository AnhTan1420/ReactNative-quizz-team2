import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  FlatList,
  Image,
  StyleSheet,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { COLORS } from "../../constants/theme";
import { Header } from "../../components";
import banner from "../../../assets/images/banner.png";

export const QuizScreen = ({ navigation, route }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#fff" barStyle={"dark-content"} />

      {/* Header */}
      <Header navigation={navigation} />

      {/* Banner */}
      <View style={styles.banner}>
        <Image source={banner} style={{ width: 250, height: 250 }} />
      </View>

      {/* Button New  */}
      {user?.role === "Admin" && (
        <AntDesign
          style={styles.buttonCreate}
          name="pluscircleo"
          size={35}
          color={"#49CC96"}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#252c4a",
    position: "relative",
  },
  navbarContainer: {
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  textLogo: { fontSize: 20, color: COLORS.white, fontWeight: "bold" },
  avatar: { width: 40, height: 40, borderRadius: 50 },
  banner: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    elevation: 1,
  },
  error: {
    fontSize: 14,
    textAlign: "center",
    color: "white",
    marginBottom: 12,
    padding: 3,
    borderRadius: 3,
    backgroundColor: "rgba(255, 0, 67, 0.55)",
  },
  itemsContainer: {
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    position: "relative",
  },
  text: { margin: 20, fontSize: 22, textAlign: "center", color: "white" },
  buttonCreate: {
    // position: 'fixed',
    bottom: 40,
    left: 10,
    borderRadius: 50,
  },
  itemTitle: {
    marginVertical: 10,
    marginLeft: 10,
    fontSize: 18,
    fontWeight: "bold",
  },
  quizItems: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  number: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#E4E7F4",
  },
});
