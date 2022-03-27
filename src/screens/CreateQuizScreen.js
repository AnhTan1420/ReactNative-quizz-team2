import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import { Text, SafeAreaView, ToastAndroid } from "react-native";
import { COLORS } from "../constants/theme";
import { FormButton, FormInput } from "../../components";
import { axiosInstance } from "../../utils/axiosInstance";
import { authSelector } from "../../redux/selector";
import { createQuiz } from "../../redux/actions";

const quizSchema = yup.object({
  title: yup.string().required().label("Title"),
  description: yup.string().label("Descriptionn"),
});

const defaultValues = {
  title: "",
  description: "",
};

const CreateQuizScreen = ({ navigation }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues, resolver: yupResolver(quizSchema) });
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const { token } = useSelector(authSelector);
  const dispatch = useDispatch();

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
      <Controller
        control={control}
        name="title"
        render={({ field: { onChange, onBlur, value } }) => (
          <FormInput
            labelText="Title"
            placeholderText="Enter quiz title"
            value={value}
            onBlur={onBlur}
            onChangeText={onChange}
            error={errors.title}
          />
        )}
      />

      {/* Description */}
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <FormInput
            labelText="Description"
            placeholderText="Enter quiz description"
            value={value}
            onBlur={onBlur}
            onChangeText={onChange}
            error={errors.description}
          />
        )}
        name="description"
      />

      {/* Submit button */}
      <FormButton
        labelText="Save Quiz"
        type="submit"
        style={{ width: "100%" }}
      />

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
