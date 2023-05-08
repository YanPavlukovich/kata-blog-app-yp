import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { useHeaderStyles } from "./useHeaderStyles";

export const Header = () => {
  const headerStyles = useHeaderStyles();
  return (
    <div className={headerStyles.header}>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <Typography variant="h6">Blog Platform</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};
