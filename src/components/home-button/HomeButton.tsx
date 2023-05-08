import { Link } from "react-router-dom";
import { useHomeButtonStyles } from "./useHomeButtonStyles";

export const HomeButton = () => {
  const homeButtonStyle = useHomeButtonStyles();
  return (
    <Link className={homeButtonStyle.homeBtn} to={"/"}>
      Realworld Blog
    </Link>
  );
};
