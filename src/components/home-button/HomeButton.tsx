import { Link } from "react-router-dom";
import { useHomeButtonStyles } from "./useHomeButtonStyles";

export const HomeButton = () => {
  const homeButtonStyle = useHomeButtonStyles();
  return (
    <div className={homeButtonStyle.homeBtn}>
      <Link to={"/"}>Realworld Blog</Link>
    </div>
  );
};
