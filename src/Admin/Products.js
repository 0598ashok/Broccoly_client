import React, { useState, useEffect } from "react";
import "../css/AdminPackages.css";
import "../css/AdminProducts.css";
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
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import { ToastContainer, toast, Zoom } from "react-toastify";
import "../css/AdminSidebar.css";
import AdminSidebar from "./AdminSidebar";

const Products = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
          <Button
            variant="contained"
            onClick={handleOpen}
            style={{ textTransform: "capitalize", backgroundColor: "#508e00" }}
          >
            Add Products
          </Button>
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle className="admin_product_modal_head">
              Add Product
            </DialogTitle>
            <DialogContent>
              <form>
                <Grid container spacing={2} className="mt-4">
                  <Grid item xs={12} className="text-center">
                    <input
                      type="file"
                      name="file"
                      id="file"
                      style={{ display: "none" }}
                      required
                      // onChange={handleFileUpload}
                    />
                    <label htmlFor="file" style={{width:"100%",marginBottom:"0px"}}>
                      <Button
                        className="admin_productimg_uploadbtn"
                      >
                        Upload image
                      </Button>
                    </label>
                    <span style={{color:"#939b95",fontSize:"13px"}}>*** To upload image for product ***</span>
                  </Grid>

                  <Grid item xs={12} className="text-center">
                    <div>
                      <img
                        src="http://localhost:3000/static/media/gluten_free_oats_sm.c139d03fce3f4f3f853d.jpg"
                        style={{ width: "250px" }}
                      />
                    </div>
                  </Grid>

                  <Grid item xs={6}>
                    <TextField
                      name="producatname"
                      label="Product Name"
                      required
                      fullWidth
                      className="text_field"
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <TextField
                      select
                      name="gender"
                      label="Gender"
                      // required
                      fullWidth
                    >
                      <MenuItem value="male">Male</MenuItem>
                      <MenuItem value="female">Female</MenuItem>
                      <MenuItem value="others">Others</MenuItem>
                    </TextField>
                  </Grid>

                  <Grid item xs={12}>
                    {/* <TextareaAutosize
                      name="description"
                      aria-label="Description"
                      placeholder="Enter description here..."
                      required
                      style={{ width: "100%", minHeight: "100px" }}
                      className="admin_product_description"
                    /> */}
                    <textarea className="form-control admin_product_description" rows={5}  placeholder="Enter description here...">
                      
                    </textarea>
                  </Grid>

                  <Grid item xs={6}>
                    <TextField
                      select
                      name="productplan"
                      label="Select Product Plan"
                      // required
                      fullWidth
                    >
                      <MenuItem value="vegetarianplan">
                        Vegetarian Plan
                      </MenuItem>
                      <MenuItem value="coreplan">Core Plan</MenuItem>
                      <MenuItem value="bothplans">Both</MenuItem>
                    </TextField>
                  </Grid>

                  <Grid item xs={6}>
                    <TextField
                      select
                      name="mealtype"
                      label="Select Meal Type"
                      // required
                      fullWidth
                    >
                      <MenuItem value="breakfast">Breakfast</MenuItem>
                      <MenuItem value="maincourse">Main Course</MenuItem>
                      <MenuItem value="snacks">Snacks</MenuItem>
                    </TextField>
                  </Grid>
                </Grid>
              </form>
            </DialogContent>
            <DialogActions style={{boxShadow:"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
              <Button onClick={handleClose} color="secondary">
                Cancel
              </Button>
              <Button color="primary" type="button">
                Add Product
              </Button>
            </DialogActions>
          </Dialog>
          <div className="view-packages mt-4">
            <h2 style={{ fontSize: "25px", fontWeight: "500" }}>
              View all products
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
                      Product Name
                    </TableCell>

                    <TableCell style={{ color: "#ffffff" }}>
                      Product Plan
                    </TableCell>
                    <TableCell style={{ color: "#ffffff" }}>
                      Product Type
                    </TableCell>
                    <TableCell style={{ color: "#ffffff" }}>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>---</TableCell>
                    <TableCell>---</TableCell>
                    <TableCell>---</TableCell>

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

export default Products;
