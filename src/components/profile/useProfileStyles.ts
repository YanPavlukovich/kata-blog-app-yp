import { makeStyles } from '@material-ui/core/styles';

type ProfileStylesType = {
	wrapper: React.CSSProperties,
	a: React.CSSProperties;
	profileInfo: React.CSSProperties;
	profileInfoName: React.CSSProperties;
	profileInfoSubtitle: React.CSSProperties;
	profileImage: React.CSSProperties;
	profileImageAvatar: React.CSSProperties;
}

export const useProfileStyles = makeStyles<ProfileStylesType>(() => ({
	wrapper: {
		display: 'flex',
		alignItems: 'flex-start',
		gap: '12px',
	},

	a: {
		textDecoration: 'none',
	}
}));

export const useProfileInfoStyles = makeStyles<ProfileStylesType>(() => ({
	profileInfo: {
		textAlign: 'right',
	},

	profileInfoName: {
		fontSize: '18px',
		lineHeight: '28px',
		color: 'rgba(0, 0, 0, 0.85)',
		margin: 'auto',
	},

	profileInfoSubtitle: {
		fontSize: '12px',
		lineHeight: '22px',
		color: 'rgba(0, 0, 0, 0.5)',
		margin: '0',
	}
}));

export const useProfileImageStyles = makeStyles<ProfileStylesType>(() => ({
	profileImage: {
		width: '46px',
		height: '46px',
		borderRadius: '50%',
		overflow: 'hidden',
		background: 'rgba(0, 0, 0, 0.75)',
	},

	profileImageAvatar: {
		width: '100%',
		height: '100%',
		objectFit: 'cover',
	}
}));
