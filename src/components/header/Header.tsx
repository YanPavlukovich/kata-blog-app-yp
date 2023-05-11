import { AppBar, Toolbar } from "@material-ui/core";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useHeaderStyles } from "./useHeaderStyles";
import { useAppDispatch, useAppSelector } from "../../store/store-hooks";
import {
  removeUserData,
  selectIsAuth,
  selectUserData,
} from "../../store/slices/user-slice";
import { HomeButton } from "../home-button/HomeButton";
import { Profile } from "../profile/Profile";

export const Header = () => {
  const headerStyles = useHeaderStyles();
  const isAuth = useAppSelector(selectIsAuth);
  const { username, avatar } = useAppSelector(selectUserData);
  const dispatch = useAppDispatch();

  const onLogout = () => {
    dispatch(removeUserData());
  };
  return (
    <>
      <AppBar position="static" color="transparent">
        <Toolbar className={headerStyles.header}>
          <HomeButton />
          {isAuth ? (
            <div className={headerStyles.authBtns}>
              <Button
                component={Link}
                to={"/new-article"}
                variant="contained"
                color="success"
                size="small"
              >
                Create article
              </Button>
              <Profile author={{ username, image: avatar }} to={"/profile"} />
              <Button onClick={onLogout}>Log out</Button>
            </div>
          ) : (
            <div className={headerStyles.btns}>
              <Button variant="text" component={Link} to={"/sign-in"}>
                Sign in
              </Button>
              <Button
                variant="outlined"
                component={Link}
                to={"/sign-up"}
                color="success"
              >
                Sign up
              </Button>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};
