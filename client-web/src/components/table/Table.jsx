import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import "./table.scss";
import { Link } from "react-router-dom";
import axios from "axios";

const Table = (props) => {
  const handleDelete = async (_id) => {
    try {
      await axios({
        method: "delete",
        url: `${props.deleteUrl}/${String(_id)}`,
        headers: {
          "ngrok-skip-browser-warning": "69420",
          Authorization: "Bearer " + localStorage.getItem("access_token"),
        },
      });
      toast.success("deleted successfully!");
      if (props.onDelete) {
        props.onDelete();
      }
    } catch (error) {
      // console.log(error.message);
      toast.error(error.response.data.message);
      if (error.response) {
        console.log("Server res data:", error.response.data);
        console.log("Server res satus:", error.response.status);
        console.log("Server res headers:", error.response.headers);
      }
      if (props.onError) {
        props.onError(error.response.data.message);
      }
    }
  };

  const actionColumn = {
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="action">
          <Link to={`/${props.slug}/${params.row._id}`}>
            <img src="/view.svg" alt="" />
          </Link>
          <div className="delete" onClick={() => handleDelete(params.row._id)}>
            <img src="/delete.svg" alt="" />
          </div>
        </div>
      );
    },
  };

  return (
    <div className="dataTable">
      <DataGrid
        className="dataGrid"
        rows={props.rows}
        columns={[...props.columns, actionColumn]}
        getRowId={(row) => row._id}
        pageSize={10}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        pageSizeOptions={[5, 10, 25, 50]} 
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableDensitySelector
        disableColumnSelector
      />
    </div>
  );
};

export default Table;
