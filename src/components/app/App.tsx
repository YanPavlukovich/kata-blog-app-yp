import { ArticlesPage } from "../../pages/article-page/ArticlesPage";
import { CreateArticlePage } from "../../pages/create-article-page/CreateArticlePage";
import { EditArticlePage } from "../../pages/edit-article-page/EditArticlePage";
import { EditProfilePage } from "../../pages/edit-profile-page/EditProfilePage";
import { ListArticlesPage } from "../../pages/list-articles-page/ListArticlesPage";
import { SignInPage } from "../../pages/sign-in-page/SignInPage";
import { SignUpPage } from "../../pages/sign-up-page/SignUpPage";
import { DeleteArticleModal } from "../delete-article-modal/DeleteArticleModal";
import { Header } from "../header/Header";
import { useAppStyles } from "./useAppStyles";

export const App = () => {
  const appStyles = useAppStyles();
  return (
    <div className={appStyles.body}>
      <Header />
      <ListArticlesPage />
      <ArticlesPage />
      <SignUpPage />
      <SignInPage />
      <EditProfilePage />
      <CreateArticlePage />
      <EditArticlePage />
      <DeleteArticleModal />
    </div>
  );
};
