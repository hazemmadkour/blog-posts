import React, { useContext, useMemo } from "react";
import { StyleSheet, Text, View } from "react-native";
import blogContext from "../store/blogContext";

const AddEditBlog = ({ route }) => {
  const { blogs } = useContext(blogContext);

  const blog = useMemo(
    () => blogs.find(({ id }) => id === route.params.id),
    [route?.params?.id]
  );

  return (
    <View style={styles.containerStyle}>
      <Text style={styles.titleStyle}>{blog.title}</Text>

      <Text style={styles.textStyle}>{blog.content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    margin: 20,
    borderWidth: 1,
    paddingTop: 30,
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 30,
  },
  titleStyle: {
    marginBottom: 5,
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  textStyle: {
    marginBottom: 5,
  },
});

export default AddEditBlog;
