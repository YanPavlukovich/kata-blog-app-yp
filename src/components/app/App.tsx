import { ListArticlesPage } from "../../pages/list-articles-page/ListArticlesPage";
import { Header } from "../header/Header";
import { useAppStyles } from "./useAppStyles";

export const App = () => {
  const appStyles = useAppStyles();
  return (
    <div className={appStyles.body}>
      <Header />
      <ListArticlesPage />
    </div>
  );
};
