import { createStyles, makeStyles } from '@material-ui/core/styles';

type InputStylesType = {
  root: React.CSSProperties;
  inputLabel: React.CSSProperties;
  input: React.CSSProperties;
  inputError: React.CSSProperties;
}

export const useInputStyles = makeStyles<InputStylesType>(() =>
  createStyles({
    root: {
      marginBottom: 12,
    },
    inputLabel: {
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: 14,
      lineHeight: 22,
      color: '#1890FF',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
    input: {
      fontFamily: 'inherit',
      background: 'paper',
      border: '1px solid',
      borderColor: '#D9D9D9',
      borderRadius: 4,
      color: '#1890FF',
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: 16,
      lineHeight: 24,
      width: '100%',
      boxSizing: 'border-box',
      padding: '8px 12px',
      '&::placeholder': {
        color: 'rgba(0, 0, 0, 0.5)',
      },
    },
    inputError: {
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: 14,
      lineHeight: 22,
      color: '#F5222D',
    },
  })
);
