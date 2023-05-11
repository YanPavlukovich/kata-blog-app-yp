import { makeStyles } from '@material-ui/core/styles';

type LikeStylesType = {
	span: React.CSSProperties;
	IconButton: React.CSSProperties;
}

export const useLikeStyles = makeStyles<LikeStylesType>(() => ({
	span: {
		fontSize: "0.8rem",
		color: "rgba(0, 0, 0, 0.5)",
		paddingLeft: '2px'
	},

	iconButton: {
		padding: '0'
	}
}));
