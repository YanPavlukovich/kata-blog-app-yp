import { makeStyles } from '@material-ui/core/styles';

type ArticlePageStylesType = {
	articlePage: React.CSSProperties;
}

export const useArticlePageStyles = makeStyles<ArticlePageStylesType>(() => ({
	articlePage: {
		backgroundColor: '#FFFFFF',
		padding: '15px',
	},
}));
