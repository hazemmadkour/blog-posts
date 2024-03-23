import { createContext } from "react";
import { Blog } from "../models/blog";

type BlogContext = {
  blogs: Blog[];
  saveBlog?: (item: Blog, onSave: () => void) => void;
  deleteBlog?: (id: string, onDelete: () => void) => void;
  getBlogs?: () => void;
};

export default createContext<BlogContext>({ blogs: [] });
