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
        padding: 20,
      }}
    >
      <Text
        style={{
          fontSize: 20,
          textAlign: "center",
          marginVertical: 20,
          fontWeight: "bold",
          color: COLORS.black,
        }}
      >
        Create Quiz
      </Text>

      <FormInput
        labelText="Title"
        placeholderText="enter quiz title"
        onChangeText={(val) => setTitle(val)}
        value={title}
      />
      <FormInput
        labelText="Description"
        placeholderText="enter quiz description"
        onChangeText={(val) => setDescription(val)}
        value={description}
      />

      <FormButton labelText="Save Quiz" />
    </SafeAreaView>
  );
};

export default CreateQuizScreen;
