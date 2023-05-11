import { makeStyles } from '@material-ui/core/styles';

type PostCardStylesType = {
	postDescription: React.CSSProperties;
	postButtons: React.CSSProperties;
}

export const usePostCardStyles = makeStyles<PostCardStylesType>(() => ({
	postDescription: {
		marginTop: '10px',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		color: 'rgba(0, 0, 0, 0.5)'
	},

	postButtons: {
		display: 'flex',
		gap: '12px',
	}
}));
