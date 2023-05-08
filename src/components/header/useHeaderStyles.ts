import { makeStyles } from "@material-ui/core/styles";

type HeaderStylesType = {
	header: React.CSSProperties;
	btns: React.CSSProperties;
	authBtns: React.CSSProperties;
}

export const useHeaderStyles = makeStyles<HeaderStylesType>(() => ({
	header: {
		background: '#ffffff',
		padding: '15px 22px',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
	},

	btns: {
		display: 'flex',
		alignItems: 'center',
		gap: '20px',
	},

	authBtns: {
		display: 'flex',
		alignItems: 'center',
		gap: '25px',
	}
}));
