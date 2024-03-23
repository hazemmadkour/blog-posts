import React, { useContext } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Blog } from "../models/blog";
import { MaterialIcons } from "@expo/vector-icons";
import blogContext from "../store/blogContext";
import { useNavigation } from "@react-navigation/native";
import { BlogDetailsProps, BlogsProps } from "../models/Routes";

const BlogItem = ({ blog }: { blog: Blog }) => {
  const { navigate } = useNavigation<BlogsProps | BlogDetailsProps>();
  const { deleteBlog } = useContext(blogContext);

  const onPress = () => {
    navigate("BlogDetails", { id: blog.id });
  };

  const onDeleteEnd = () => {
    navigate("Blogs");
  };

  const onDelete = () => {
    deleteBlog(blog.id, onDeleteEnd);
  };

  return (
    <TouchableOpacity style={styles.containerStyle} onPress={onPress}>
      <Text style={styles.textStyle}>{blog.title}</Text>
      <TouchableOpacity onPress={onDelete}>
        <MaterialIcons name="delete-outline" size={24} color="black" />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 5,
    padding: 5,
    flexDirection: "row",
  },
  textStyle: {
    flex: 1,
  },
});

export default BlogItem;
