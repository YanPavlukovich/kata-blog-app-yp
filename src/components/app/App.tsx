import { Routes, Route } from "react-router-dom";
import { useAppStyles } from "./useAppStyles";
import { ListArticlesPage } from "../../pages/list-articles-page/ListArticlesPage";
import { Layout } from "../layout/Layout";

export const App = () => {
  const appStyles = useAppStyles();

  return (
    <div className={appStyles.body}>
      <Routes>
        <Route path={"/"} element={<Layout />}>
          <Route index element={<ListArticlesPage />} />
          <Route path={"/articles"} element={<ListArticlesPage />} />
          <Route
            path={"articles/:id"}
            element={
              "Здесь будет открываться карточка выбранного поста по нажатию на хэдер карточки в списке на главной странице"
            }
          />
        </Route>
      </Routes>
    </div>
  );
};
