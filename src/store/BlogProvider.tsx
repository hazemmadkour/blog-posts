import React, { useReducer } from "react";
import Context from "./blogContext";
import reducer from "./blogReducer";
import { DELETE_BLOG, GET_BLOGS } from "./actions";
import axios from "../handlers/restHelper";

const BlogProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    blogs: [],
  });

  const getBlogs = async () => {
    const response = await axios.get("/");
    dispatch({ type: GET_BLOGS, payload: response.data });
  };

  const saveBlog = async (
    {
      id,
      title,
      content,
    }: {
      id?: string;
      title: string;
      content: string;
    },
    onSave: () => void
  ) => {
    if (id) {
      await axios.put(`/${id}`, { title, content });
    } else {
      await axios.post("/", { title, content });
    }

    onSave();
  };

  const deleteBlog = async (id: string, onDelete: () => void) => {
    await axios.delete(`/${id}`);
    dispatch({ type: DELETE_BLOG, payload: id });
    onDelete();
  };

  return (
    <Context.Provider
      value={{ blogs: state.blogs, getBlogs, saveBlog, deleteBlog }}
    >
      {children}
    </Context.Provider>
  );
};

export default BlogProvider;
