import { usePostHeaderStyles } from "./usePostHeaderStyles";
import { PostHeaderInfo, PostHeaderInfoProps } from "./PostHeaderInfo";
import { PostHeaderProfile, PostHeaderProfileProps } from "./PostHeaderProfile";

type Props = PostHeaderInfoProps & PostHeaderProfileProps;

export const PostHeader = (props: Props) => {
  const postHeaderStyle = usePostHeaderStyles();
  const {
    titleContent,
    favoritesCount,
    favorited,
    tagList,
    createdAt,
    author,
    slug,
  } = props;

  return (
    <div className={postHeaderStyle.postHeader}>
      <PostHeaderInfo
        titleContent={titleContent}
        favoritesCount={favoritesCount}
        favorited={favorited}
        tagList={tagList}
        slug={slug}
      />
      <PostHeaderProfile createdAt={createdAt} author={author} />
    </div>
  );
};
