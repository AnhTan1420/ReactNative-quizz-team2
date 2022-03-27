import React from "react";
import { Text, SafeAreaView, ToastAndroid } from "react-native";
import { COLORS } from "../constants/theme";
import FormInput from "../components/Forms/FormInput";
import FormButton from "../components/Forms/FormButton";

const CreateQuizScreen = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  setTitle("");
  setDescription("");
  ToastAndroid.show("Quiz Saved", ToastAndroid.SHORT);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
        justifyContent: "flex-start",
        padding: 20,
      }}
    >
      {/* Header */}
      <Text
        style={{
          fontSize: 24,
          textAlign: "center",
          marginVertical: 32,
          fontWeight: "bold",
          color: COLORS.black,
        }}
      >
        Create Quiz
      </Text>

      {/* Title */}
      <FormInput
        labelText="Title"
        placeholderText="enter quiz title"
        onChangeText={(val) => setTitle(val)}
        value={title}
      />

      {/* Description */}
      <FormInput
        labelText="Description"
        placeholderText="enter quiz description"
        onChangeText={(val) => setDescription(val)}
        value={description}
      />

      {/* Submit button */}
      <FormButton labelText="Save Quiz" />

      <FormButton
        labelText="Done & Go Home"
        isPrimary={false}
        handleOnPress={() => {
          navigation.navigate("HomeScreen");
        }}
        style={{
          marginVertical: 20,
        }}
      />
    </SafeAreaView>
  );
};

export default CreateQuizScreen;
