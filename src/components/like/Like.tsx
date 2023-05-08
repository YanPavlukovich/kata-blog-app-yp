import { useEffect, useState } from "react";
import { IconButton } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

import { useFavorited } from "../../API/favorited/favorited-hooks";
import { useAppSelector } from "../../store/store-hooks";
import { selectIsAuth } from "../../store/slices/user-slice";

export type LikeProps = {
  favorited: boolean;
  favoritesCount: number;
  slug: string;
};

export const Like = (props: LikeProps) => {
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
    <IconButton onClick={likeHandler} color="secondary">
      {liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
      <span>{count}</span>
    </IconButton>
  );
};
