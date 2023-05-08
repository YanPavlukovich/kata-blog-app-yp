import { PostType } from "../../types/post";
import { PostCard } from "../post-card/PostCard";
import { usePostStyles } from "./usePostStyles";

type Props = PostType;
export const Post = (props: Props) => {
  const postStyle = usePostStyles();
  return (
    <div className={postStyle.post}>
      <PostCard {...props} />
    </div>
  );
};
