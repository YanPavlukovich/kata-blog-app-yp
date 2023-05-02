import { makeStyles } from "@material-ui/core";

type IndexStyleType = {
	body: React.CSSProperties;
}

export const useIndexStyles = makeStyles<IndexStyleType>(() => ({
	body: {
		margin:  '0',
		padding: '0',
		backgroundColor: '#EBEEF3',
		fontFamily: "'Inter', sans-serif",
	}
}));
