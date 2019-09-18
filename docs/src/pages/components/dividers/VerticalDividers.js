import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';
import FormatAlignCenterIcon from '@material-ui/icons/FormatAlignCenter';
import FormatAlignRightIcon from '@material-ui/icons/FormatAlignRight';
import FormatBoldIcon from '@material-ui/icons/FormatBold';
import FormatItalicIcon from '@material-ui/icons/FormatItalic';
import FormatUnderlinedIcon from '@material-ui/icons/FormatUnderlined';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles(theme => ({
  root: {
    width: 'fit-content',
    border: '1px solid rgba(0, 0, 0, 0.12)',
    borderRadius: 4,
    backgroundColor: theme.palette.background.paper,
    '& svg': {
      color: 'rgba(0, 0, 0, 0.54)',
      margin: theme.spacing(2),
    },
  },
  divider: {
    margin: theme.spacing(1, 0.5),
  },
}));

export default function ToggleButtons() {
  const classes = useStyles();

  return (
    <Grid container alignItems="center" className={classes.root}>
      <FormatAlignLeftIcon />
      <FormatAlignCenterIcon />
      <FormatAlignRightIcon />
      <Divider orientation="vertical" className={classes.divider} />
      <FormatBoldIcon />
      <FormatItalicIcon />
      <FormatUnderlinedIcon />
    </Grid>
  );
}
