import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import IconButton from "@material-ui/core/IconButton";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import AddBoxOutlinedIcon from "@material-ui/icons/AddBoxOutlined";
import FileCopyOutlinedIcon from "@material-ui/icons/FileCopyOutlined";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";

export default function EnhancedTable() {
  const classes = useStyles();
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("poNumber");
  const [page, setPage] = React.useState(0);
  const [rows, setRows] = useState([]);

  const Icon = ({ icon, onClick }) =>
    icon === "copy" ? (
      <IconButton
        style={{ margin: 0, padding: 5, color: "#000" }}
        onClick={onClick}
      >
        <FileCopyOutlinedIcon />
      </IconButton>
    ) : (
      <IconButton
        style={{ margin: 0, padding: 5, color: "#000" }}
        onClick={onClick}
      >
        <DeleteOutlineIcon />
      </IconButton>
    );

  function createData(poNumber, project, cDate, tags, tar, tr, lc) {
    return {
      poNumber,
      project,
      cDate,
      tags,
      tar,
      tr,
      lc,
    };
  }

  useEffect(() => {
    setRows([
      createData(1, "Project B", "15-09-2020", 62, 2, "32/62", "15-12-2020"),
      createData(2, "Project B", "15-09-2020", 122, 3, "102/122", "15-12-2020"),
      createData(3, "Project B", "15-09-2020", 11, 5, "2/11", "15-12-2020"),
      createData(4, "Project B", "15-09-2020", 53, 10, "43/53", "15-12-2020"),
      createData(5, "Project C", "13-12-2020", 0, 0, "0/0", "13-12-2020"),
      createData(6, "Project C", "13-12-2020", 0, 0, "0/0", "13-12-2020"),
      createData(7, "Project C", "13-12-2020", 0, 0, "0/0", "13-12-2020"),
      createData(8, "Project C", "13-12-2020", 0, 0, "0/0", "13-12-2020"),
      createData(9, "Project C", "13-12-2020", 0, 0, "0/0", "13-12-2020"),
      createData(10, "Project C", "13-12-2020", 0, 0, "0/0", "13-12-2020"),
    ]);
  }, []);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleDeleteClick = (index) => {
    setRows([...rows.slice(0, index).concat(rows.slice(index + 1))]);
  };

  const handleCopyClick = (index, row) => {
    let newRows = rows.slice(0);
    newRows.splice(rows, 0, row);
    setRows(newRows);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleColorChange = (cellValue) => {
    const numerator = parseInt(cellValue.split("/")[0]);
    const denomenator = parseInt(cellValue.split("/")[1]);
    if (denomenator === 0) return "#ed979a";

    const calcValue = numerator / denomenator;
    if (calcValue <= 9 / 10 && calcValue>=5/10) return "#a4f3a3";
    else if (calcValue >= 5 / 10 && calcValue <= 1/10) return "#edc984";
    else if (calcValue >= 1 / 10) return "#ed979a";
    else return "inherit";
  };

  const emptyRows = 5 - Math.min(5, rows.length - page * 5);

  return (
    <div className={classes.root}>
      <TableContainer>
        <Table
          className={classes.table}
          aria-labelledby="tableTitle"
          size="medium"
          aria-label="enhanced table"
        >
          <EnhancedTableHead
            classes={classes}
            order={order}
            orderBy={orderBy}
            onRequestSort={handleRequestSort}
            rowCount={rows.length}
          />
          <TableBody>
            {stableSort(rows, getComparator(order, orderBy))
              .slice(page * 5, page * 5 + 5)
              .map((row, index) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                    <TableCell
                      align="center"
                      width="2%"
                      style={{ border: "none", padding: 10 }}
                    >
                      <Icon
                        icon="delete"
                        onClick={(event) => handleDeleteClick(index)}
                      />
                    </TableCell>
                    <TableCell
                      align="center"
                      width="2%"
                      style={{ border: "none", padding: 10 }}
                    >
                      <Icon
                        icon="copy"
                        onClick={() => handleCopyClick(index, row)}
                      />
                    </TableCell>
                    <TableCell className={classes.cellLink} align="center">
                      {row.poNumber}
                    </TableCell>
                    <TableCell className={classes.cellLink} align="center">
                      {row.project}
                    </TableCell>
                    <TableCell align="center" className={classes.cellItems}>
                      {row.cDate}
                    </TableCell>
                    <TableCell style={{ width: "5%", padding: 10 }}>
                      <div className={classes.boldItems}>
                        {row.tags}
                        <AddBoxOutlinedIcon fontSize="small" />
                      </div>
                    </TableCell>
                    <TableCell
                      align="center"
                      width="5%"
                      className={classes.cellItems}
                      style={{ fontSize: 18 }}
                    >
                      {row.tar}
                    </TableCell>
                    <TableCell
                      align="center"
                      width="5%"
                      style={{
                        fontSize: 18,
                        fontWeight: "bold",
                        padding: 10,
                        background: handleColorChange(row.tr),
                      }}
                    >
                      {row.tr}
                    </TableCell>
                    <TableCell
                      align="center"
                      width="10%"
                      className={classes.cellItems}
                    >
                      {row.lc}
                    </TableCell>
                  </TableRow>
                );
              })}
            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[]}
        component="div"
        count={rows.length}
        rowsPerPage={5}
        page={page}
        onChangePage={handleChangePage}
        //   onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </div>
  );
}

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  { id: "deleteicon", label: "" },
  { id: "copyicon", label: "" },
  {
    id: "poNumber",
    numeric: false,
    disablePadding: false,
    label: "PO #",
  },
  { id: "project", numeric: false, disablePadding: false, label: "Project" },
  {
    id: "cDate",
    numeric: false,
    disablePadding: false,
    label: "Creation Date",
  },
  { id: "tags", numeric: true, disablePadding: false, label: "Tags" },
  {
    id: "tar",
    numeric: true,
    disablePadding: false,
    label: "Tags Awaiting Review",
  },
  {
    id: "tr",
    numeric: false,
    disablePadding: false,
    label: "Tags Reviewed",
  },
  {
    id: "lc",
    numeric: false,
    disablePadding: false,
    label: "Last Changed",
  },
];

function EnhancedTableHead(props) {
  const { classes, order, orderBy, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align="center"
            // padding={headCell.disablePadding ? "none" : "default"}
            sortDirection={orderBy === headCell.id ? order : false}
            style={
              headCell.id === "poNumber" || headCell.id === "tags"
                ? {
                    whiteSpace: "nowrap",
                    fontWeight: "bold",
                    fontSize: 20,
                    padding: 10,
                  }
                : { fontWeight: "bold", fontSize: 15, padding: 10 }
            }
          >
            {headCell.label !== "" ? (
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : "asc"}
                onClick={createSortHandler(headCell.id)}
              >
                {headCell.label}
                {orderBy === headCell.id ? (
                  <span className={classes.visuallyHidden}>
                    {order === "desc"
                      ? "sorted descending"
                      : "sorted ascending"}
                  </span>
                ) : null}
              </TableSortLabel>
            ) : (
              ""
            )}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: "inherit",
  },

  table: {
    backgroundColor: "inherit",
  },
  visuallyHidden: {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    top: 20,
    width: 1,
  },
  cellLink: {
    textDecoration: "underline",
    color: "#0053df",
    cursor: "pointer",
    fontWeight: "bold",
    width: "5%",
    padding: 10,
  },
  boldItems: {
    fontSize: 18,
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  cellItems: {
    fontWeight: "bold",
    width: "5%",
    padding: 10,
  },
}));
