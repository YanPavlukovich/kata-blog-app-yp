import { PostAuthorizationType } from "../../types/post";
import {
  useProfileStyles,
  useProfileInfoStyles,
  useProfileImageStyles,
} from "./useProfileStyles";
import { Link } from "react-router-dom";

type ProfleProps = {
  author: PostAuthorizationType;
  subtitle?: string;
  to?: string;
};

export const Profile = (props: ProfleProps) => {
  const profileStyle = useProfileStyles();
  const profileInfoStyle = useProfileInfoStyles();
  const profileImageStyle = useProfileImageStyles();
  const { author, subtitle, to } = props;

  const profileContent = (
    <div className={profileStyle.wrapper}>
      <div className={profileInfoStyle.profileInfo}>
        <h4 className={profileInfoStyle.profileInfoName}>{author.username}</h4>
        {subtitle && (
          <p className={profileInfoStyle.profileInfoSubtitle}>{subtitle}</p>
        )}
      </div>
      <div className={profileImageStyle.profileImage}>
        {author.image && (
          <img
            className={profileImageStyle.profileImageAvatar}
            src={author.image}
            alt=""
          />
        )}
      </div>
    </div>
  );

  return (
    <div className={profileStyle.a}>
      {to ? <Link to={to}>{profileContent}</Link> : profileContent}
    </div>
  );
};
