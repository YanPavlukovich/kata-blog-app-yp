import { useState } from "react";
import { PostHeader } from "./post-header/PostHeader";
import { usePostCardStyles } from "./usePostCardStyles";
import { PostType } from "../../types/post";
import { Link } from "react-router-dom";
import { Typography, Button, Popover } from "@mui/material";

type Props = PostType & {
  postControl?: boolean;
  onDelete?: any;
};

export const PostCard = (props: Props) => {
  const postCardStyle = usePostCardStyles();
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const {
    title,
    favorited,
    favoritesCount,
    tagList,
    author,
    createdAt,
    description,
    slug,
    postControl,
    onDelete,
  } = props;

  const handlePopoverOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    setIsPopoverOpen(true);
  };

  const handlePopoverClose = () => {
    setIsPopoverOpen(false);
  };

  return (
    <>
      <PostHeader
        titleContent={title}
        favorited={favorited}
        favoritesCount={favoritesCount}
        tagList={tagList}
        author={author}
        createdAt={createdAt}
        slug={slug}
      />
      <div className={postCardStyle.postDescription}>
        <Typography sx={{ fontSize: 12 }}>{description}</Typography>
        {postControl && (
          <div className={postCardStyle.postButtons}>
            <Button size="small" color="error" onClick={handlePopoverOpen}>
              Delete
            </Button>
            <Popover
              open={isPopoverOpen}
              anchorEl={anchorEl}
              onClose={handlePopoverClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              <Typography sx={{ p: 2 }}>
                Are you sure to delete this article?
              </Typography>
              <Button onClick={onDelete} sx={{ mr: 1 }}>
                Yes
              </Button>
              <Button onClick={handlePopoverClose}>No</Button>
            </Popover>
            <Button
              component={Link}
              to={"/edit"}
              variant="contained"
              color="success"
              size="small"
            >
              Edit
            </Button>
          </div>
        )}
      </div>
    </>
  );
};
