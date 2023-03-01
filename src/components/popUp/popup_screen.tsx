import { DialogActions, DialogContent, DialogTitle, useMediaQuery } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import { createStyles, makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import React from 'react';
import EmailFields from '../email_fields/email_fields';
import style from './popup.module.scss';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
    dialog: {
        position: 'fixed',
        left: 10,
        top: 50
      }
  });
  
  const useStyles = makeStyles({
    dialog: {
 
      position: 'absolute',
      left: 10,
      top: 50
    }
  });

  
  export default function ResponsiveDialog()  {
 

const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <div className={style.fixed}>
       <Button variant="outlined" color="inherit" onClick={handleClickOpen}>
        Contact
      </Button>
      <Dialog

        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
        PaperProps={{
            style: {
                zIndex:9999,
              backgroundColor: 'rgba(255,255,255)',
              boxShadow: 'none',
              backdropFilter: 'blur(10px)'
            },
          }}
      >
        <DialogTitle id="responsive-dialog-title">{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
        <EmailFields></EmailFields>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Discard
          </Button>
         
        </DialogActions>
      </Dialog>
      
    </div>
  );
}
