import {
  FormControlLabel,
  Checkbox as MUICheckbox,
  Typography,
} from "@material-ui/core";
import { useCheckboxStyles } from "./useCheckboxStyles";

type Props = {
  label?: string;
  error?: string;
  register: any;
  name: string;
};

export const Checkbox = (props: Props) => {
  const checkboxStyle = useCheckboxStyles();
  const { label, register, name, error } = props;

  return (
    <div className={checkboxStyle.root}>
      <FormControlLabel
        control={<MUICheckbox color="primary" {...register(name)} />}
        label={
          label ? (
            <Typography
              className={checkboxStyle.typography}
              variant="body1"
              color="textPrimary"
            >
              {label}
            </Typography>
          ) : null
        }
      />
      {error ? (
        <Typography variant="body2" className={checkboxStyle.error}>
          {error}
        </Typography>
      ) : null}
    </div>
  );
};
