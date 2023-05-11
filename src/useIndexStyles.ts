import { styled } from '@mui/styles';

export type GlobalStyleType = object;

export const GlobalStyle = styled('div')<GlobalStyleType>({
		margin:  0,
		padding: 0,
		backgroundColor: '#EBEEF3',
		fontFamily: "'Inter', sans-serif",
});
