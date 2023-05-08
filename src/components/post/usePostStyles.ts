import { makeStyles } from '@material-ui/core/styles';

type PostStylesType = {
	post: React.CSSProperties;
}

export const usePostStyles = makeStyles<PostStylesType>(() => ({
	post: {
		background: '#FFFFFF',
		borderRadius: '5px',
		filter: 'drop-shadow(0px 4px 12px rgba(0, 0, 0, 0.15))',
		padding: '15px',
	},
}));
