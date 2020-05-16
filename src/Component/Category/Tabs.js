import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import { Box, Container, Button } from "@material-ui/core";
import { useQuery } from "react-apollo-hooks";
import { READ_PRODUCT } from "../../Queries/readProduct";
import All from "./All";
import styled from "styled-components";

const AntTabs = withStyles({
  root: {
    maxWidth: `${(props) => props.theme.maxWidth}`,
    borderBottom: "1px solid #e8e8e8",
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
  padding: {
    padding: theme.spacing(2),
  },
  demo1: {
    backgroundColor: theme.palette.background.paper,
  },
}));

const CategoryItem = (props) => {
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
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

const Text = styled.span`
  font-size: 12px;
`;

const Containers = styled.div``;

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
          <AntTab label="Tab 1" />
          <AntTab label="Tab 2" />
          <AntTab label="Tab 3" />
          <AntTab label="Tab 4" />
        </AntTabs>
        <Containers>
          <Button>
            <Text>Category1</Text>
          </Button>
          <Button>
            <Text>Category1</Text>
          </Button>
          <Button>
            <Text>Category1</Text>
          </Button>
          <Button>
            <Text>Category1</Text>
          </Button>
          <Button>
            <Text>Category1</Text>
          </Button>
          <Button>
            <Text>Category1</Text>
          </Button>
          <Button>
            <Text>Category1</Text>
          </Button>
          <Button>
            <Text>Category1</Text>
          </Button>
        </Containers>
        <p style={{ border: `3px solid #EDEDEB`, marginTop: 3 }} />
        <CategoryItem value={value} index={0}>
          <All />
        </CategoryItem>
        <CategoryItem value={value} index={1}>
          Item Two
        </CategoryItem>
        <CategoryItem value={value} index={2}>
          Item Three
        </CategoryItem>
        <Typography className={classes.padding} />
      </div>
    </div>
  );
};
