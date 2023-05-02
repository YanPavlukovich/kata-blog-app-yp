import { List, ListItem, ListItemText } from "@material-ui/core";
import Pagination from "@mui/material/Pagination";
import { useListStyles } from "./useListStyles";

export const ListArticlesPage = () => {
  const listStyles = useListStyles();
  return (
    <div>
      <List className={listStyles.posts}>
        <ListItem>
          <ListItemText primary="Article 1" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Article 2" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Article 3" />
        </ListItem>
      </List>
      <Pagination
        className={listStyles.pagination}
        count={10}
        shape="rounded"
      />
    </div>
  );
};

// style={{ display: "flex", flexDirection: "column", gap: 25 }}
