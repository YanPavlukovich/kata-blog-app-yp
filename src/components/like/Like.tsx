import { useEffect, useState } from "react";
import { IconButton } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

import { useFavorited } from "../../API/favorited/favorited-hooks";
import { useAppSelector } from "../../store/store-hooks";
import { selectIsAuth } from "../../store/slices/user-slice";
import { useLikeStyles } from "./useLikeStyles";

export type LikeProps = {
  favorited: boolean;
  favoritesCount: number;
  slug: string;
};

export const Like = (props: LikeProps) => {
  const likeStyle = useLikeStyles();
  const { favorited, favoritesCount, slug } = props;

  const isAuth = useAppSelector(selectIsAuth);

  const [liked, setLiked] = useState<boolean>(false);
  const [count, setCount] = useState<number>(0);
  const [add, remove] = useFavorited(slug);

  useEffect(() => {
    setLiked(favorited);
    setCount(favoritesCount);
  }, [favorited, favoritesCount]);

  const likeHandler = () => {
    if (isAuth) {
      if (liked) {
        setLiked(false);
        setCount(count - 1);
        remove();
      } else {
        setLiked(true);
        setCount(count + 1);
        add();
      }
    }
  };

  return (
    <IconButton
      className={likeStyle.iconButton}
      onClick={likeHandler}
      color="secondary"
    >
      {liked ? (
        <FavoriteIcon fontSize="small" />
      ) : (
        <FavoriteBorderIcon color="disabled" fontSize="small" />
      )}
      <span className={likeStyle.span}>{count}</span>
    </IconButton>
  );
};
