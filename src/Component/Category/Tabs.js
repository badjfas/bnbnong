import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import { Box, Container, Button } from "@material-ui/core";
import { useQuery } from "react-apollo-hooks";
import { READ_PRODUCT } from "../../Queries/readProduct";
import All from "./All";
import Recomends from "./Recomends";
import Sale from "./Sale";
import New from "./New";

import styled from "styled-components";
import { Link } from "react-router-dom";

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

const Text = styled.span`
  font-size: 12px;
`;

const Containers = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  margin: 0 auto;
  white-space:pre-line;

`;

const ExLink= styled(Link)`
font-size: 12px;
color:black;
`;

const ExButton = styled(Button)`
width:25%;
padding:5px;
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
          <AntTab label="전체 상품" />
          <AntTab label="추천 상품" />
          <AntTab label="할인 상품" />
          <AntTab label="신 상품" />
        </AntTabs>
        <MenuItem value={value} index={0}>
          <Containers>
            <ExButton value={value}>
              <Text>Category1</Text>
            </ExButton>
            <ExButton>
              <Text>Category1</Text>
            </ExButton>
            <ExButton>
              <Text>Category1</Text>
            </ExButton>
            <ExButton>
              <Text>Category1</Text>
            </ExButton>
          </Containers>
          <p
            style={{
              border: `3px solid #EDEDEB`,
              marginTop: 3,
              marginBottom: 8,
            }}
          />
          <All />
        </MenuItem>
        <MenuItem value={value} index={1}>
          <Containers>
            <Button>
              <Text>Category1</Text>
            </Button>
          </Containers>
          <p
            style={{
              border: `3px solid #EDEDEB`,
              marginTop: 3,
              marginBottom: 8,
            }}
          />
          <Recomends />
        </MenuItem>
        <MenuItem value={value} index={2}>
          <Containers>
            <Button onClick={()=>(setValue(4))}>
              <Text>Category1</Text>
            </Button>
          </Containers>
          <p
            style={{
              border: `3px solid #EDEDEB`,
              marginTop: 3,
              marginBottom: 8,
            }}
          />
          <Sale />
        </MenuItem>
        <MenuItem value={value} index={3}>
          <Containers>
            <ExLink>
              <Text style={{fontSize:17}}>Category1</Text>
            </ExLink>
          </Containers>
          <p
            style={{
              border: `3px solid #EDEDEB`,
              marginTop: 3,
              marginBottom: 8,
            }}
          />
          <New />
        </MenuItem>
        <MenuItem value={value} index={4}>
          <Containers>
            <ExLink>
              <Text style={{fontSize:17}}>value4</Text>
            </ExLink>
          </Containers>
          <p
            style={{
              border: `3px solid #EDEDEB`,
              marginTop: 3,
              marginBottom: 8,
            }}
          />
          <New />
        </MenuItem>
        <Typography className={classes.padding} />
      </div>
    </div>
  );
};
