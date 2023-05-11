import { Routes, Route } from "react-router-dom";
import { ListArticlesPage } from "../../pages/list-articles-page/ListArticlesPage";
import { Layout } from "../layout/Layout";
import { ArticlePage } from "../../pages/article-page/ArticlePage";
import { SignUpPage } from "../../pages/sign-up-page/SignUpPage";
import { ProtectRoute } from "../protect-route/ProtectRote";
import { useAppSelector } from "../../store/store-hooks";
import { selectIsAuth } from "../../store/slices/user-slice";
import { SignInPage } from "../../pages/sign-in-page/SignInPage";
import { ProfilePage } from "../../pages/edit-profile-page/ProfilePage";

export const App = () => {
  const isAuth = useAppSelector(selectIsAuth);

  return (
    <Routes>
      <Route path={"/"} element={<Layout />}>
        <Route index element={<ListArticlesPage />} />
        <Route path={"/articles"} element={<ListArticlesPage />} />
        <Route path={"articles/:id"} element={<ArticlePage />} />
        <Route
          path={"profile"}
          element={
            <ProtectRoute isAllowed={isAuth} redirectPath={"/sign-in"}>
              <ProfilePage />
            </ProtectRoute>
          }
        />
        <Route
          path={"sign-in"}
          element={
            <ProtectRoute isAllowed={!isAuth} redirectPath={"/"}>
              <SignInPage />
            </ProtectRoute>
          }
        />
        <Route
          path={"sign-up"}
          element={
            <ProtectRoute isAllowed={!isAuth} redirectPath={"/"}>
              <SignUpPage />
            </ProtectRoute>
          }
        />
      </Route>
    </Routes>
  );
};
