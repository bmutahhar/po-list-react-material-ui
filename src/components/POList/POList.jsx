import React from "react";
import clsx from "clsx";
import { Typography,IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import HeightOutlinedIcon from "@material-ui/icons/HeightOutlined";
import CloseIcon from "@material-ui/icons/Close";

import SearchBar from "./Searchbar";
import EnhancedTable from "./Table"
const useStyles = makeStyles((theme) => ({
  root: {
    width: "80%",
    height: "90%",
    display: "flex",
    justifyContent: "center",
    border: "1px solid black",
    borderRadius: "10px",
  },
  item: {
    backgroundColor: "pink",
  },
  icons: {
    fontSize: "28px",
    color:"#1f1f1f"
  },
  iconRotate: {
    transform: "rotate(30deg)",
    fontSize: "32px",
  },
  iconsContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    // backgroundColor: "orange",
    width: "10%",
    marginLeft: "auto",
    // flexGrow:1,
    // paddingRight:10,
  },
  title: {
    textDecoration: "underline",
    // backgroundColor: "pink",
    width: "90%",
    alignItems: "center",
    textAlign: "center",
    paddingLeft: 50,
    // flexGrow:5
  },
  grow: {
    flexGrow: 1,
    backgroundColor: "blue",
  },
}));

const POList = () => {
  const classes = useStyles();
  return (
    <Container>
      <Row
        width="100%"
        height="8%"
        backgroundColor="yellow"
        justify="space-between"
      >
        {/* <span className={classes.grow}/> */}
        <Typography variant="h4" className={classes.title}>
          PO List
        </Typography>
        <div className={classes.iconsContainer}>
        <IconButton>
          <HeightOutlinedIcon
            className={clsx(classes.iconRotate, classes.icons)}
          />
          </IconButton>
          <IconButton>
          <CloseIcon className={classes.icons} />
          </IconButton>
        </div>
      </Row>
      <Row width="100%" height="15%" backgroundColor="orange" justify="center">
        <SearchBarContainer>
          <SearchBar />
        </SearchBarContainer>
        <ButtonContainer>
          <Button>Save view as a template</Button>
          <Button>Choose a template view</Button>
        </ButtonContainer>
      </Row>
      <EnhancedTable/>
    </Container>
  );
};

export default POList;

const Container = styled.div`
  display: flex;
  background-color: green;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  width: 90%;
  height: 95%;
  border: 1px solid black;
  border-radius: 10px;
  overflow: hidden;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.justify};
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  background-color: ${(props) => props.backgroundColor};
  margin-bottom: ${(props) => props.marginBottom};
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  ${'' /* padding-bottom: 10px; */}
  width: 30%;
  height: 100%;
`;

const Button = styled.button`
width:80%;
height:35%;
background-color:#a4f0a4;
border-radius:25px;
border: 1px solid black
${'' /* margin:10px; */}
cursor:pointer;

`;

const SearchBarContainer = styled.div`
  display: flex;
  height: 100%;
  width: 70%;
  align-items: center;
  justify-content: flex-end;
`;
