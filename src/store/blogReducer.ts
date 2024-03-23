import { Blog } from "../models/blog";
import { DELETE_BLOG, GET_BLOGS, SAVE_BLOG } from "./actions";

type BlogReducer = {
  blogs: Blog[];
};

const reducer = (
  state: BlogReducer = { blogs: [] },
  action: { type: string; payload: unknown }
): BlogReducer => {
  switch (action.type) {
    case GET_BLOGS:
      return { ...state, blogs: action.payload as Blog[] };
    case SAVE_BLOG:
      return state;
    case DELETE_BLOG:
      return {
        ...state,
        blogs: state.blogs.filter(({ id }) => id !== action.payload),
      };
    default:
      return state;
  }
};

export default reducer;
