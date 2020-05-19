import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import { Box, Button } from "@material-ui/core";
import styled from "styled-components";

const AntTabs = withStyles({
  root: {
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    borderBottom: "1px solid #e8e8e8",
    width:"100%",
  },
  indicator: {
    backgroundColor: "#1890ff",
  },
})(Tabs);

const AntTab = withStyles((theme) => ({
  root: {
    display: "flex",
    margin: "0 auto",
    justifyContent: "center",
    alignItems: "center",
    textTransform: "none",
    fontWeight: theme.typography.fontWeightRegular,
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:hover": {
      color: "#40a9ff",
      opacity: 1,
    },
    "&$selected": {
      color: "#1890ff",
      fontWeight: theme.typography.fontWeightMedium,
    },
    "&:focus": {
      color: "#40a9ff",
    },
  },
  selected: {},
}))((props) => <Tab disableRipple {...props} />);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  padding:24,
  demo1: {
    backgroundColor: theme.palette.background.paper,
  },
}));

const MenuItem = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box padding={1}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};
const Container = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
`;



export default () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <div className={classes.demo1}>
        <AntTabs value={value} onChange={handleChange} aria-label="ant example">
          <AntTab label="상세정보" />
          <AntTab label="상품후기" />
          <AntTab label="QnA" />
        </AntTabs>

        <MenuItem value={value} index={0}>
          <Container>
            asdasdasdasd
          </Container>
        </MenuItem>

        <MenuItem value={value} index={1}>
          상세정보
        </MenuItem>

        <MenuItem value={value} index={2}>
          상세정보
        </MenuItem>
        <Typography className={classes.padding} />
      </div>
    </div>
  );
};
