import { makeStyles } from "@material-ui/core";

type AppStyleType = {
	body: React.CSSProperties;
}

export const useAppStyles = makeStyles<AppStyleType>(() => ({
	body: {
		margin:  '0',
		padding: '0',
		backgroundColor: '#EBEEF3',
		fontFamily: "'Inter', sans-serif",
	}
}));
