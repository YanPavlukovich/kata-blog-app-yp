import { makeStyles } from '@material-ui/core/styles';

type HomeButtonStylesType = {
	homeBtn: React.CSSProperties;
}

export const useHomeButtonStyles = makeStyles<HomeButtonStylesType>(() => ({
	homeBtn: {
		fontSize: '18px',
		lineHeight: '28px',
		textDecoration: 'none',
		cursor: 'pointer',
		color: 'rgba(0, 0, 0, 0.85)',
	},
}));
