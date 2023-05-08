import { Chip } from "@mui/material";
import { useTagStyles } from "./useTagStyles";

export type TagProps = {
  tag: string;
};

export const Tag = (props: TagProps) => {
  const tagStyles = useTagStyles();
  const { tag } = props;
  return <Chip label={tag} className={tagStyles.tag} />;
};
