import React, { useState, useEffect } from "react";
import "../css/AdminPackages.css";
import {
  Button,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Grid,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import MenuItem from "@material-ui/core/MenuItem";
import { ToastContainer, toast, Zoom } from "react-toastify";
import "../css/AdminSidebar.css";
import AdminSidebar from "./AdminSidebar";

const Packages = () => {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);

  // Define a function to handle the opening of the dialog
  const handleOpen = () => {
    setOpen(true);
  };
  const handleOpen1 = () => {
    setOpen1(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleClose1 = () => {
    setOpen1(false);
  };

  return (
    <div>
      <AdminSidebar>
        <ToastContainer
          position="top-center"
          autoClose={1500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          transition={Zoom}
        />
        <div className="add-package-product mt-4">
          <div style={{ color: "#968787", fontSize: "14px" }}>
            {" "}
            <p>
              You can create and manage different packages and plans for your
              meals in the admin dashboard. Choose from a variety of options
              such as package names, durations, and set the prices and discounts
              accordingly. You can also edit or delete existing packages and
              plans at any time. To add a new package or plan, click on the “Add
              Packages” button below .
            </p>
          </div>

          <Dialog
            open={open1}
            onClose={handleClose1}
            maxWidth="sm"
            fullWidth={true}
          >
            <DialogTitle>Add Package Name</DialogTitle>
            <DialogContent className="d-flex pt-4 foradd_new_packagename_ip">
              <input type="text" className="form-control" />
              <span>/kcal</span>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose1} color="secondary">
                Cancel
              </Button>
              <Button color="primary" type="button">
                Add Package Name
              </Button>
            </DialogActions>
          </Dialog>
          <Button
            variant="contained"
            onClick={handleOpen}
            style={{ textTransform: "capitalize", backgroundColor: "#508e00" }}
          >
            Add Packages
          </Button>
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Add Package</DialogTitle>
            <DialogContent>
              <form>
                <Grid container spacing={2} className="mt-4">
                  <Grid item xs={6} >
                    <TextField
                      select
                      name="packageName"
                      label="Package Name"
                      required
                      fullWidth
                     
                    >
                      <MenuItem value="option1">Option 1</MenuItem>
                      <MenuItem value="option2">Option 2</MenuItem>
                      <MenuItem value="option3">Option 3</MenuItem>
                     
                    </TextField>
                    <p onClick={handleOpen1} className="foradd_new_packagename">
                     To add new packagename
                    </p>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      name="duration"
                      label="Duration"
                      required
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      name="actualPrice"
                      label="Actual Price"
                      required
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      name="discount"
                      label="Discount"
                      required
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      name="finalPrice"
                      label="Final Price"
                      required
                      fullWidth
                    />
                  </Grid>
                </Grid>
              </form>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="secondary">
                Cancel
              </Button>
              <Button color="primary" type="button">
                Add Package
              </Button>
            </DialogActions>
          </Dialog>
          <div className="view-packages mt-4">
            <h2 style={{ fontSize: "25px", fontWeight: "500" }}>
              View all packages
            </h2>
            {/* {loader ? (
              <Grid item xs={12}>
                <Box>
                  <Skeleton />
                  <Skeleton animation="wave" />
                  <Skeleton animation="wave" />
                  <Skeleton animation="wave" />
                  <Skeleton animation="wave" />
                  <Skeleton animation="wave" />
                  <Skeleton animation={false} />
                </Box>
              </Grid>
            ) : ( */}
            <TableContainer component={Paper} className="mt-2">
              <Table>
                <TableHead style={{ backgroundColor: "#508e00" }}>
                  <TableRow>
                    <TableCell style={{ color: "#ffffff" }}>
                      Package Name
                    </TableCell>
                    <TableCell style={{ color: "#ffffff" }}>Duration</TableCell>
                    <TableCell style={{ color: "#ffffff" }}>Quantity</TableCell>
                    <TableCell style={{ color: "#ffffff" }}>
                      Actual Price
                    </TableCell>
                    <TableCell style={{ color: "#ffffff" }}>Discount</TableCell>
                    <TableCell style={{ color: "#ffffff" }}>
                      Final Price
                    </TableCell>
                    <TableCell style={{ color: "#ffffff" }}>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>packageName</TableCell>
                    <TableCell>duration</TableCell>
                    <TableCell>quantity</TableCell>
                    <TableCell>actualPrice</TableCell>
                    <TableCell>discount</TableCell>
                    <TableCell>finalPrice</TableCell>
                    <TableCell>
                      <div className="d-flex justify-content-arround">
                        <Button>
                          <EditIcon
                            style={{ cursor: "pointer", fontSize: "20px" }}
                            onClick={() => handleOpen()}
                          />
                        </Button>
                        <Button>
                          <DeleteIcon
                            style={{
                              cursor: "pointer",
                              color: "orange",
                              fontSize: "20px",
                            }}
                          />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
            {/* )} */}
          </div>
        </div>
      </AdminSidebar>
    </div>
  );
};

export default Packages;
