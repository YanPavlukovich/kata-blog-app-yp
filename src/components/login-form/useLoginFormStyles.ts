import { createStyles, makeStyles } from '@material-ui/core/styles';

type LoginFormStylesType = {
	root: React.CSSProperties;
}

export const useLoginFormStyles = makeStyles<LoginFormStylesType>(() =>
	createStyles({
		root: {
			background: '#FFFFFF',

			boxShadow: "0px 22px 106px rgba(0, 0, 0, 0.07), 0px 9.19107px 44.2843px rgba(0, 0, 0, 0.0503198), 0px 4.91399px 23.6765px rgba(0, 0, 0, 0.0417275), 0px 2.75474px 13.2728px rgba(0, 0, 0, 0.035), 0px 1.46302px 7.04911px rgba(0, 0, 0, 0.0282725), 0px 0.608796px 2.93329px rgba(0, 0, 0, 0.0196802)",

			width: '384px',
			margin: '0 auto',
			boxSizing: 'border-box',
			padding: '36px 32px',
		},

		formTitle: {
			margin: '0 0 21px',
			fontWeight: 500,
			fontSize: '20px',
			lineHeight: '28px',
			textAlign: 'center',
			color: 'rgba(0, 0, 0, 0.75)',
		},

		formSubmit: {
			width: '100%',
			boxSizing: 'border-box',
			background: '#fff',
			borderRadius: '4px',
			padding: '8px 12px',

			color: '#fff',
			cursor: 'pointer',
      marginTop: '10px',
		},

		helpText: {
			fontSize: '12px',
			fontWeight: 400,
			fontStyle: 'normal',
			lineHeight: '20px',
			textAlign: 'center',
			margin: '8px 0 0',
			color: '#8C8C8C',
		},

		a: {
			color: '#1890FF'
		}
	})
);
