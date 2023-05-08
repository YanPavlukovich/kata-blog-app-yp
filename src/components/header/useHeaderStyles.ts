import { makeStyles } from "@material-ui/core/styles";

type HeaderStylesType = {
	header: React.CSSProperties;
}

export const useHeaderStyles = makeStyles<HeaderStylesType>(() => ({
	header: {
		background: '#ffffff',
		padding: '15px 22px',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
	}
}));
