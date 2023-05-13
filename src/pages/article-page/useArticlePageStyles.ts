import { makeStyles } from '@material-ui/core/styles';

type ArticlePageStylesType = {
	articlePage: React.CSSProperties;
}

export const useArticlePageStyles = makeStyles<ArticlePageStylesType>(() => ({
	articlePage: {
		backgroundColor: '#FFFFFF',
		padding: '15px',
		filter: 'drop-shadow(0px 4px 12px rgba(0, 0, 0, 0.15))',
		borderRadius: '5px',
	},
}));
