import { makeStyles } from '@material-ui/core/styles';

type ArticleTitleStylesType = {
	articleTitle: React.CSSProperties;
}

export const useArticleTitleStyles = makeStyles<ArticleTitleStylesType>(() => ({
	articleTitle: {
		fontStyle: 'normal',
		fontWeight: 'normal',
		lineHeight: '28px',
		color: '#1890FF',
		margin: '0',
	},
}));
