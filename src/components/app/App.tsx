import { Routes, Route } from "react-router-dom";
import { useAppStyles } from "./useAppStyles";
import { ListArticlesPage } from "../../pages/list-articles-page/ListArticlesPage";

export const App = () => {
  const appStyles = useAppStyles();

  return (
    <div className={appStyles.body}>
      <Routes>
        <Route index element={<ListArticlesPage />} />
        <Route path={"/articles"} element={<ListArticlesPage />} />
      </Routes>
    </div>
  );
};
