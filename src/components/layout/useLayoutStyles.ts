import { makeStyles } from '@material-ui/core/styles';

type LayoutStylesType = {
	layout: React.CSSProperties;
}

export const useLayoutStyles = makeStyles<LayoutStylesType>(() => ({
	layout: {
		width: '938px',
		margin: '0 auto',
		paddingTop: '26px',
		minHeight: '810px',
	},
}));
