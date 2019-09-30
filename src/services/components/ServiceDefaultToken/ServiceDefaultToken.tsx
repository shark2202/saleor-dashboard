import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import { Theme } from "@material-ui/core/styles";
import { fade } from "@material-ui/core/styles/colorManipulator";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import { FormattedMessage } from "react-intl";

export interface ServiceDefaultTokenProps {
  token: string;
  onTokenClose: () => void;
}

const useStyles = makeStyles(
  (theme: Theme) => ({
    cancel: {
      marginRight: theme.spacing.unit
    },
    closeContainer: {
      display: "flex",
      justifyContent: "flex-end",
      position: "relative",
      right: -theme.spacing.unit,
      top: -theme.spacing.unit
    },
    copy: {
      marginTop: theme.spacing.unit,
      position: "relative",
      right: theme.spacing.unit
    },
    paper: {
      background: fade(theme.palette.primary.main, 0.05),
      padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px`
    },
    root: {
      boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.05)"
    },
    text: {
      display: "grid",
      gridColumnGap: theme.spacing.unit * 3 + "px",
      gridTemplateColumns: "1fr 60px",
      marginBottom: theme.spacing.unit * 3
    }
  }),
  {
    name: "ServiceTokenCreateDialog"
  }
);

function handleCopy(token: string) {
  navigator.clipboard.writeText(token);
}

const ServiceDefaultToken: React.FC<ServiceDefaultTokenProps> = props => {
  const { token, onTokenClose } = props;
  const classes = useStyles(props);

  return (
    <Card className={classes.root}>
      <CardContent>
        <div className={classes.text}>
          <Typography>
            <FormattedMessage defaultMessage="We’ve created your default token. Make sure to copy your new personal access token now. You won’t be able to see it again." />
          </Typography>
          <div className={classes.closeContainer}>
            <IconButton onClick={onTokenClose}>
              <CloseIcon />
            </IconButton>
          </div>
        </div>
        <Paper className={classes.paper} elevation={0}>
          <Typography variant="caption">
            <FormattedMessage defaultMessage="Generated Token" />
          </Typography>
          <Typography>{token}</Typography>
          <Button
            className={classes.copy}
            color="primary"
            onClick={() => handleCopy(token)}
          >
            <FormattedMessage
              defaultMessage="Copy token"
              description="button"
            />
          </Button>
        </Paper>
      </CardContent>
    </Card>
  );
};

ServiceDefaultToken.displayName = "ServiceDefaultToken";
export default ServiceDefaultToken;
