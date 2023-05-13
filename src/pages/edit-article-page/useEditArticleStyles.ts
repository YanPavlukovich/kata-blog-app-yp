import { createStyles, makeStyles } from '@material-ui/core/styles';

type EditArticlePageStylesType = {
	successMessage: React.CSSProperties;
}

export const useEditArticlePageStyles = makeStyles<EditArticlePageStylesType>(() =>
	createStyles({
		successMessage: {
			width: '300px',
			position: 'fixed',
			right: '30px',
			bottom: '30px',
		},
	})
);
