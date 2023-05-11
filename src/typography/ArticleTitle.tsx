import React from "react";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { useArticleTitleStyles } from "./useArticleTitleStyles";

type TitleLevel = 1 | 3;
type Props = {
  level: TitleLevel;
  children: React.ReactNode;
  to?: string | null;
};

const Title = (props: Props) => {
  const { level, children } = props;

  switch (level) {
    case 1:
      return (
        <Typography sx={{ fontSize: 32 }} variant="h1">
          {children}
        </Typography>
      );
    case 3:
      return (
        <Typography sx={{ fontSize: 20 }} variant="h3">
          {children}
        </Typography>
      );
    default:
      return null;
  }
};

export const ArticleTitle = (props: Props) => {
  const { level, children, to } = props;
  const titleStyle = useArticleTitleStyles();

  const StyledTitle = <Title level={level}>{children}</Title>;

  return to ? (
    <Link
      className={titleStyle.articleTitle}
      to={to}
      style={{ textDecoration: "none" }}
    >
      {StyledTitle}
    </Link>
  ) : (
    StyledTitle
  );
};
