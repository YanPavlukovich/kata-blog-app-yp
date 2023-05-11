import { createStyles, makeStyles } from '@material-ui/core/styles';

type CheckboxStylesType = {
	root: React.CSSProperties;
	error: React.CSSProperties;
}

export const useCheckboxStyles = makeStyles<CheckboxStylesType>(() =>
createStyles({
	root: {
		marginBottom: 12,
		marginTop: 12,
		marginLeft: 12,
	},
	error: {
		color: "#F5222D",
		fontSize: 14,
		lineHeight: '22px',
		marginTop: 4,
	},
})
);
