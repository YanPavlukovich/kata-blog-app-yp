import { createStyles, makeStyles } from '@material-ui/core/styles';

type AppStylesType = {
	root: React.CSSProperties;
}

export const useAppStyles = makeStyles<AppStylesType>(() =>
	createStyles({
		root: {
			margin:  0,
			padding: 0,
			fontFamily: "'Inter', sans-serif",
		},
	})
);
