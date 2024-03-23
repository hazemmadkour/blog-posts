import { StackNavigationProp } from "@react-navigation/stack";

type RootStackParamList = {
  Blogs: undefined;
  BlogDetails: { id: string };
  AddEditBlog: { id: string };
};

export type BlogsProps = StackNavigationProp<
  RootStackParamList,
  "Blogs"
>;

export type BlogDetailsProps = StackNavigationProp<
  RootStackParamList,
  "BlogDetails"
>;
export type AddEditBlogProps = StackNavigationProp<
  RootStackParamList,
  "AddEditBlog"
>;
