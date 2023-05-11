import { createStyles, makeStyles } from '@material-ui/core/styles';

type ProfilePageStylesType = {
	successMessage: React.CSSProperties;
}

export const useProfilePageStyles = makeStyles<ProfilePageStylesType>(() =>
	createStyles({
		successMessage: {
			position: 'fixed',
			right: '450px',
			bottom: '215px',
			width: '300px',
		},
	})
);
