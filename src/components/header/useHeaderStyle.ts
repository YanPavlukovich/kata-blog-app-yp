import { makeStyles } from "@material-ui/core/styles";

type HeaderStyleType = {
	header: React.CSSProperties;
}

export const useHeaderStyle = makeStyles<HeaderStyleType>(() => ({
	header: {
		background: '#ffffff',
		padding: '15px 22px',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
	}
}));
