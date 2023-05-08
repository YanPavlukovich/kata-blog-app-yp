import { ArticleTitle } from "../../../typography/article-title/ArticleTitle";
import { Like, LikeProps } from "../../like/Like";
import { usePostHeaderStyles } from "./usePostHeaderStyles";

import { Tag } from "../../tag/Tag";

export type PostHeaderInfoProps = LikeProps & {
  titleContent: string;
  tagList: string[];
  slug?: string;
};

export const PostHeaderInfo = (props: PostHeaderInfoProps) => {
  const titleStyle = usePostHeaderStyles();
  const tagStyle = usePostHeaderStyles();
  const { titleContent, favoritesCount, favorited, tagList, slug } = props;
  const tags = tagList.map((tag, i) => <Tag key={`tag_${i}`} tag={tag} />);

  return (
    <>
      <div className={titleStyle.titleWrapper}>
        <ArticleTitle level={3} to={slug ? `/articles/${slug}` : null}>
          {titleContent}
        </ArticleTitle>
        <Like
          favorited={favorited}
          favoritesCount={favoritesCount}
          slug={slug}
        />
      </div>
      <div className={tagStyle.tagList}>{tags}</div>
    </>
  );
};
