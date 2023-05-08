import { makeStyles } from '@material-ui/core/styles';

type TagStylesType = {
	tag: React.CSSProperties;
}

export const useTagStyles = makeStyles<TagStylesType>(() => ({
	tag: {
		display: 'inline-block',
		fonstStyle: 'normal',
		fontWeight: 'normal',
		fontSize: '12px',
		lineHeight: '15px',
		color: 'rgba(0, 0, 0, 0.5)',
		padding: '3px 5px',
		border: '1px solid rgba(0, 0, 0, 0.5)',
		borderRadius: '2px',
	},
}));
