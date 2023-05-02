import { ListArticlesPage } from "../../pages/list-articles-page/ListArticlesPage";
import { Header } from "../header/Header";

export const App = () => {
  return (
    <div>
      <Header />
      <ListArticlesPage />
    </div>
  );
};
