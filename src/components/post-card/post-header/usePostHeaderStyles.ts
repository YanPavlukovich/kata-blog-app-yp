import { makeStyles } from '@material-ui/core/styles';

type PostHeaderStylesType = {
  postHeader: React.CSSProperties;
  titleWrapper: React.CSSProperties;
  tagList: React.CSSProperties;
};


export const usePostHeaderStyles = makeStyles<PostHeaderStylesType>(() => ({
  postHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
		height: '60px'
  },

  titleWrapper: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
		wordWrap: 'break-word',
  },

  tagList: {
    display: 'flex',
    gap: '8px',
    marginTop: '5px',
  },
}));
