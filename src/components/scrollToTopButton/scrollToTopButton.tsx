import Box from "@material-ui/core/Box";
import Fab from "@material-ui/core/Fab";
import {
  createTheme,
  createStyles,
  makeStyles,
  Theme,
  ThemeProvider,
} from "@material-ui/core/styles";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Zoom from "@material-ui/core/Zoom";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import MailIcon from "@material-ui/icons/Mail";
import ViewCompactIcon from "@material-ui/icons/ViewCompact";
import Link from "next/link";
import React from "react";
import styles from "./scrollToTopButton.module.scss";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: React.ReactElement;
}

function ScrollTop(props: Props) {
  const { children, window } = props;
  const classes = useStyles();
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    scroll();
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

function scroll(): void {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

function ScrollToTop1() {
  return (
    <div className={styles.scrollToTop}>
      <div className={styles.buttonStyle}>
        <div className="scroll-to-top">
          <div onClick={() => scrollTo()} className={styles.floating_button}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="black"
              width="2rem"
              height="2rem"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: 380,
      transform: "translateZ(0px)",
      flexGrow: 1,
    },
    speedDial: {
      position: "absolute",
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
  })
);

const actions = [
  {
    icon: (
      <Link href="/about" prefetch>
        <MailIcon />
      </Link>
    ),
    name: "Contact",
  },
  { icon: <ViewCompactIcon></ViewCompactIcon>, name: "Projects" },

  {
    icon: (
      <Link href="/about" prefetch>
        <InfoIcon />
      </Link>
    ),
    name: "About",
  },
  {
    icon: (
      <Link href="/" prefetch>
        <HomeIcon />
      </Link>
    ),
    name: "Home",
  },
];

const theme = createTheme({
  overrides: {
    MuiButton: {
      root: {
        margin: "5rem",

        position: "fixed",
      },
    },
  },
  palette: {
    primary: {
      main: "#FFFFFFCC",
      light: "#666666",
    },
    secondary: { main: "#222222" },
  },
});

export default function ScrollToTop() {
  return (
    <div className={styles.bottomRight}>
      <div className={styles.SpeedDial}></div>
      <div className={styles.BackButton}>
        <ThemeProvider theme={theme}>
          <ScrollTop>
            <Fab size="small" color="primary" aria-label="scroll back to top">
              <KeyboardArrowUpIcon />
            </Fab>
          </ScrollTop>
        </ThemeProvider>
      </div>
    </div>
  );
}

/*
        <Box>
      <SpeedDial
        color="light"
        ariaLabel="SpeedDial openIcon example"
        className={classes.speedDial}
        hidden={hidden}
        icon={<MenuRoundedIcon/>}
        openIcon={<CloseRoundedIcon/>}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
        
        
      >
        {actions.map((action) => (
          <SpeedDialAction
            color="secondary"
            key={action.name}
            icon={action.icon}
            tooltipOpen
            tooltipTitle={action.name}
            onClick={handleClose}
          />
        ))}
      </SpeedDial>
      </Box>
    */

/*
  export default function ScrollToTop() {
   

    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    const isSrollable = useMediaQuery(
      { minDeviceWidth: 1224 },
      { deviceWidth: 1600 } // `device` prop
   )
  
      return (
        <div id="container-floating" className={styles.expanded}>



  <div id="floating-button" className={styles.buttonStyle}>

    
  </div >
  
  <div className={styles.floating_container}>
  <div className={styles.floating_button}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="2rem" height="2rem"><path d="M0 0h24v24H0z" fill="none"/><path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/></svg></div>
  <div className={styles.element_container}>
    
      <div className={styles.buttonMenuItem}>
      zxcxvdcdad
      <div className={styles.material_icons}>email
</div>
    </div>
    
    
  
  </div>
</div>
</div>
          
    
        
      );
    }
*/
