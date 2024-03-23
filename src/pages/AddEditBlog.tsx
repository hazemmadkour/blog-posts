import React, { useContext, useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import blogContext from "../store/blogContext";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { BlogsProps } from "../models/Routes";

const BlogDetails = ({ route }) => {
  const { navigate } = useNavigation<BlogsProps>();
  const { blogs, saveBlog } = useContext(blogContext);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (route?.params?.id) {
      const blog = blogs.find(({ id }) => id === route.params.id);
      setTitle(blog.title);
      setContent(blog.content);
    }
  }, [route?.params?.id]);

  const onTitleChange = (value: string) => {
    setTitle(value);
  };

  const onContentChange = (value: string) => {
    setContent(value);
  };

  const onSaveEnd = () => {
    navigate("Blogs");
  };

  const onSave = async () => {
    await saveBlog({ id: route?.params?.id, title, content }, onSaveEnd);
  };

  return (
    <View style={styles.containerStyle}>
      <Text style={styles.textStyle}>Title</Text>
      <TextInput
        style={styles.inputStyle}
        value={title}
        onChangeText={onTitleChange}
      />
      <Text style={styles.textStyle}>Content</Text>
      <TextInput
        style={styles.inputStyle}
        value={content}
        onChangeText={onContentChange}
      />

      <TouchableOpacity style={styles.saveStyle} onPress={onSave}>
        <Feather name="save" size={24} color="black" />
        <Text>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    margin: 10,
  },
  textStyle: {
    marginBottom: 5,
  },
  inputStyle: {
    padding: 5,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
  },
  saveStyle: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "lightblue",
    borderRadius: 5,
    padding: 5,
  },
});

export default BlogDetails;
