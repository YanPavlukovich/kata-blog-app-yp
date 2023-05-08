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
  },

  titleWrapper: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },

  tagList: {
    display: 'flex',
    gap: '8px',
    marginTop: '5px',
  },
}));
