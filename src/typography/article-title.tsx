import React from "react";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

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
      return <Typography variant="h1">{children}</Typography>;
    case 3:
      return <Typography variant="h3">{children}</Typography>;
    default:
      return null;
  }
};

export const ArticleTitle = (props: Props) => {
  const { level, children, to } = props;

  const StyledTitle = <Title level={level}>{children}</Title>;

  return to ? (
    <Link to={to} style={{ textDecoration: "none" }}>
      {StyledTitle}
    </Link>
  ) : (
    StyledTitle
  );
};
