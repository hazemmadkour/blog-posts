import React, { useContext, useEffect } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import BlogItem from "../components/BlogItem";
import blogContext from "../store/blogContext";

const Blogs = ({ navigation }) => {
  const { blogs, getBlogs } = useContext(blogContext);

  useEffect(() => {
    getBlogs();

    const listener = navigation.addListener("focus", () => {
      getBlogs();
    });

    return () => navigation.removeListener(listener);
  }, []);

  return (
    <View style={styles.containerStyle}>
      <FlatList
        keyExtractor={({ id }) => id}
        data={blogs}
        renderItem={(blog) => <BlogItem blog={blog.item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    margin: 10,
  },
});

export default Blogs;
