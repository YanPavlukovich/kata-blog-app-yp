import { List, ListItem, ListItemText } from "@material-ui/core";

export const ListArticlesPage = () => {
  return (
    <List>
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
  );
};
