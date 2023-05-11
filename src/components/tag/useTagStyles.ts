import { makeStyles } from '@material-ui/core/styles';

type TagStylesType = {
	tagItem: React.CSSProperties;
}

export const useTagStyles = makeStyles<TagStylesType>(() => ({
	tagItem: {
		display: 'inline-block',
		fonstStyle: 'normal',
		fontWeight: 'normal',
		fontSize: '12px',
		lineHeight: '15px',
		color: 'red',
		padding: '3px 5px',
		border: '1px solid rgba(0, 0, 0, 0.5)',
		borderRadius: '2px',
	},
}));
