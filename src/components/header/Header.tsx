import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { useHeaderStyle } from "./useHeaderStyle";

export const Header = () => {
  const headerStyles = useHeaderStyle();
  return (
    <div className={headerStyles.header}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Blog Platform</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};
