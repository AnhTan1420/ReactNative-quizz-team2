import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { axiosInstance } from "../utils/axiosInstance";
import { COLORS } from "../constants/theme";
import { FormButton } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { quizzesSelector } from "../redux/selector";
import { addQuizzes } from "../redux/actions";
import { QuizItem } from "../components";
import avatar from "../../assets/images/avatar.jpeg";
import banner from "../../assets/images/banner.png";

const listOption = ["Profile", "Rank", "Settings", "Logout"];

const ModalUser = () => {
  return (
    <View
      style={{
        position: "absolute",
        top: 50,
        right: 10,
        backgroundColor: COLORS.white,
        paddingHorizontal: 30,
        elevation: 3,
        borderRadius: 10,
        paddingVertical: 20,
      }}
    >
      {listOption.map((option, index) => (
        <View
          key={index}
          style={{
            padding: 10,
            borderBottomWidth: 1,
            borderColor: COLORS.border,
            marginBottom: 10,
          }}
        >
          <Text style={{ fontWeight: "bold" }}>{option}</Text>
        </View>
      ))}
    </View>
  );
};

export const HomeScreen = ({ navigation }) => {
  const quizzes = useSelector(quizzesSelector);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [openModal, setOpenModal] = useState(false);
  
  const dispatch = useDispatch();

  useEffect(() => {
    const getAllQuizzes = async () => {
      try {
        setLoading(true);
        const { data } = await axiosInstance.get("/quizzes");
        dispatch(addQuizzes(data));
        setLoading(false);
      } catch (error) {
        const message = error?.response
          ? error?.response.data.message
          : error.message;
        setError(message);
        setLoading(false);
      }
    };
    if (quizzes.length < 1) {
      getAllQuizzes();
    }
  }, [quizzes.length, dispatch]);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.background,
        position: "relative",
      }}
      onPress={() => setOpenModal(false)}
    >
      <StatusBar backgroundColor={COLORS.white} barStyle={"dark-content"} />

      {/* Navbar */}
      <View
        style={{
          position: "relative",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 10,
          paddingVertical: 10,
        }}
      >
        <Text style={{ fontSize: 20, color: COLORS.white, fontWeight: "bold" }}>
          Quiz App
        </Text>
        <TouchableOpacity onPress={() => setOpenModal(!openModal)}>
          <Image
            source={avatar}
            style={{ width: 40, height: 40, borderRadius: 50 }}
          />
        </TouchableOpacity>
        {openModal ? <ModalUser /> : null}
      </View>

      {/* Banner */}
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          elevation: 1,
        }}
      >
        <Image source={banner} style={{ width: 250, height: 250 }} />
      </View>

      {/* Body */}
      {!!error ? (
        <>
          {/* Error message */}
          <Text
            style={{
              fontSize: 14,
              textAlign: "center",
              color: "white",
              marginBottom: 12,
              padding: 3,
              borderRadius: 3,
              backgroundColor: "rgba(255, 0, 67, 0.55)",
            }}
          >
            {error}
          </Text>
        </>
      ) : (
        <View
          style={{
            backgroundColor: COLORS.white,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            position: "relative",
          }}
        >
          <View
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: 3,
            }}
          >
            <View
              style={{
                width: 40,
                height: 5,
                backgroundColor: COLORS.background,
                borderRadius: 20,
              }}
            ></View>
          </View>
          <Text
            style={{
              marginVertical: 10,
              marginLeft: 10,
              fontSize: 18,
              fontWeight: "bold",
            }}
          >
            Choose quiz
          </Text>
          {/* Quizzes list */}
          <FlatList
            data={quizzes}
            showsVerticalScrollIndicator={false}
            style={{
              paddingVertical: 20,
            }}
            renderItem={({ item, index }) => (
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingHorizontal: 10,
                }}
              >
                {index < 9 ? (
                  <Text
                    style={{
                      fontSize: 40,
                      fontWeight: "bold",
                      color: "#E4E7F4",
                    }}
                  >
                    {"0" + (index + 1)}
                  </Text>
                ) : (
                  <Text
                    style={{
                      fontSize: 40,
                      fontWeight: "bold",
                      color: "#E4E7F4",
                    }}
                  >
                    {index + 1}
                  </Text>
                )}
                <View style={{ flex: 1 }}>
                  <QuizItem quiz={item} navigation={navigation} />
                </View>
              </View>
            )}
            keyExtractor={(item) => item.id}
          />
          {/* Button */}
          <AntDesign
            style={{
              position: "absolute",
              top: 10,
              right: -20,
              borderRadius: 50,
              paddingHorizontal: 30,
            }}
            name="pluscircleo"
            size={35}
            color={COLORS.play}
            onPress={() => {
              navigation.navigate("CreateQuizScreen");
            }}
          />
        </View>
      )}
    </SafeAreaView>
  );
};
