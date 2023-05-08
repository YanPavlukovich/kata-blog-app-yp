import { useListArticlesPageStyles } from "./useListArticlesPageStyles";
import { Post } from "../../components/post/Post";
import { Pagination } from "@mui/material";
import { useArticlesGetter } from "../../API/articles/articles-hooks";
import { useAppDispatch, useAppSelector } from "../../store/store-hooks";
import {
  selectActivePage,
  selectArticlesCount,
  selectPageSize,
  setActivePage,
} from "../../store/slices/articles-slice";
import { ChangeEvent } from "react";

export const ListArticlesPage = () => {
  const listStyle = useListArticlesPageStyles();
  const posts = useArticlesGetter();

  const dispatch = useAppDispatch();
  const postsCount = useAppSelector(selectArticlesCount);
  const activePage = useAppSelector(selectActivePage);
  const pageSize = useAppSelector(selectPageSize);

  const postsElements = posts.map((post) => (
    <Post key={`slug_${post.slug}`} {...post} />
  ));

  const onPageChange = (event: ChangeEvent<unknown>, page: number) => {
    dispatch(setActivePage(page));
  };

  return (
    <>
      <div className={listStyle.posts}>{postsElements}</div>
      <div className={listStyle.pagination}>
        <Pagination
          count={Math.ceil(postsCount / pageSize)}
          page={activePage}
          onChange={onPageChange}
          showFirstButton
          showLastButton
        />
      </div>
    </>
  );
};
