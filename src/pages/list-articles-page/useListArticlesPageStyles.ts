import { makeStyles } from "@material-ui/core/styles";

type ListArticlesPageStyleType = {
  posts: React.CSSProperties;
  pagination: React.CSSProperties;
}

export const useListArticlesPageStyles = makeStyles<ListArticlesPageStyleType>(() => ({
  posts: {
    display: "flex",
    flexDirection: "column",
    gap: "25px",
  },
  pagination: {
    display: "flex",
    justifyContent: "center",
    marginTop: "25px",
  },
}));
