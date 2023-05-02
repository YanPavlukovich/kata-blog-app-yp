import { makeStyles } from "@material-ui/core/styles";

type ListStyleType = {
  posts: React.CSSProperties;
  pagination: React.CSSProperties;
}

export const useListStyles = makeStyles<ListStyleType>(() => ({
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
