import { createStyles, makeStyles } from '@material-ui/core/styles';

type ArticleFormStylesType = {
	hasTags?: boolean;
	root: React.CSSProperties;
	title: React.CSSProperties;
	fontSubmit: React.CSSProperties;
	tagContainer: React.CSSProperties;
	tagWrapper: React.CSSProperties;
	label: React.CSSProperties;
	tags: React.CSSProperties;
	addButtonWrapper: React.CSSProperties;
	error: React.CSSProperties;
}

export const useArticleFormStyles = makeStyles<ArticleFormStylesType>(() =>
	createStyles({
		root: {
			position: 'relative',
			background: '#FFFFFF',
			border: '1px solid #D9D9D9',

			boxShadow: "0px 22px 106px rgba(0, 0, 0, 0.07), 0px 9.19107px 44.2843px rgba(0, 0, 0, 0.0503198), 0px 4.91399px 23.6765px rgba(0, 0, 0, 0.0417275), 0px 2.75474px 13.2728px rgba(0, 0, 0, 0.035), 0px 1.46302px 7.04911px rgba(0, 0, 0, 0.0282725), 0px 0.608796px 2.93329px rgba(0, 0, 0, 0.0196802)",

			borderRadius: '6px',
			padding: '48px 32px',
			width: '100%',
			boxSizing: 'border-box',
			minHeight: 'fit-content',

			display: 'flex',
      flexDirection: 'column',
		},

		title: {
			font: 'normal 500 20px',
			lineHeight: '28px',
			textAlign: 'center',
			color: 'rgba(0, 0, 0, 0.75)',
			margin: '0 0 0 0',
		},

		fontSubmit: ({ hasTags }: { hasTags?: boolean }) => ({
			width: '320px',
			boxSizing: 'border-box',
			backgroundColor: '#1890FF',
			borderRadius: '4px',
			padding: '8px 12px',
			border: '1px solid #1890FF',
			color: '#FFFFFF',
			cursor: 'pointer',
			marginTop: hasTags ? '10px' : '9px',
			'&:hover': {
				backgroundColor: '#FFFFFF',
				color: '#1890FF',
			}
		}),

		inputText: {
			height: '168px',
		}
	})
);


export const useArticleFormTagsStyles = makeStyles<ArticleFormStylesType>(() =>
	createStyles({
		tagContainer: {
			marginTop: '21px',
      position: 'relative',
      width: 'fit-content',
      height: 'fit-content',
		},

		tagWrapper: {
			display: 'grid',
			gridTemplateColumns: '300px 120px',
			alignItems: 'start',
			gap: '18px',
		},

		label: {
			font: 'normal 400 14px',
			lineHeight: '22px',
			color: 'rgba(0, 0, 0, 0.75)',
		},

		tags: {
			marginTop: '10px',
		},

		addButtonWrapper: ({ hasTags }: { hasTags?: boolean }) => ({
      position: 'relative',
      left: hasTags ? '450px' : undefined,
			bottom: hasTags ? '38px' : undefined,
			width: 'fit-content',
			textTransform: "none",
      border: "1px solid #1890FF",
      color: "#1890FF",
    }),

		error: {
			fontStyle: 'normal',
			fontWeight: 400,
			fontSize: '14px',
			lineHeight: '22px',
			color: '#F5222D'
		}
	},
));
