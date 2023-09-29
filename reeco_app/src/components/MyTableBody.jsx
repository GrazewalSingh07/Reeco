import {
  Button,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import { AiFillDelete, AiFillEdit, AiTwotoneSave } from "react-icons/ai";
import { AiFillPrinter } from "react-icons/ai";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData, updateData } from "../redux/Data/action";

export const MyTableBody = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state?.data);
  const [question, setQuestion] = useState("");
  const [curr, setCurr] = useState(null);
  const [open, setOpen] = React.useState(false);
  const [edit, setEdit] = useState(false);
  const [editVal, setEditVal] = useState(null);
  useEffect(() => {
    dispatch(getData());
  });

  const handleClickRight = (data) => {
    dispatch(updateData({ ...data, status: "approved" }, data.id));
    // dispatch(getData());
  };
  const handleClickWrong = (data) => {
    setQuestion(data.title);
    setCurr(data);
    setOpen(!open);
  };
  const handleSaveMissing = (val) => {
    switch (val) {
      case "yes": {
        dispatch(updateData({ ...curr, status: "Missing urgent" }, curr.id));
      };
      break;
      case "no": {
        dispatch(updateData({ ...curr, status: "Missing" }, curr.id));
      };
      break;
      default:{

      }
    }
    setOpen(false);
  };
  const handleClickEdit = (data) => {
    setEditVal(data);
    setEdit(!edit);
  };

  const handleEdit = () => {
    dispatch(updateData({ ...editVal }, editVal.id));
    setEdit(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    setEditVal({ ...editVal, total: editVal?.quantity * editVal?.price });
  }, [editVal?.quantity, editVal?.price]);

  return (
    <div className="box  m-auto  py-4 max-w-[90%] rounded-lg mt-3">
      <div className="flex justify-around">
        <TextField
          placeholder="search"
          sx={{ borderRadius: "!important 20px", width: 370 }}
        />
        <div className="flex items-center">
          <Button
            variant="outlined"
            className="!rounded-3xl !border-1 !border-green-800 !text-green-800"
          >
            Add Item
          </Button>
          <AiFillPrinter className="!text-lg text-red-500 mx-2" />
        </div>
      </div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Product Name</TableCell>
            <TableCell>Brand</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Quantity</TableCell>
            <TableCell>Total</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((el) => {
            return (
              <TableRow>
                <TableCell>
                  <img className="w-10 h-10" src={el.image} alt="" />
                </TableCell>
                <TableCell>{el.title}</TableCell>
                <TableCell>{el.brand}</TableCell>
                <TableCell>${el.price}/6*1LB </TableCell>
                <TableCell>{el.quantity}*6*1LB</TableCell>
                <TableCell>${el.total}</TableCell>
                <TableCell><Chip label={el.status} color={el.status=='approved'?'success': el.status== "Missing urgent"?"error":"warning"} /></TableCell>
                <TableCell className="!flex">
                  <IconButton
                    onClick={() => {
                      handleClickRight(el);
                    }}
                  >
                    <AiTwotoneSave className="text-green-500 text-xl" />
                  </IconButton>
                  <IconButton
                    onClick={() => {
                      handleClickWrong(el);
                    }}
                  >
                    <AiFillDelete className="mx-1 text-red-500 text-xl" />
                  </IconButton>
                  <IconButton
                    onClick={() => {
                      handleClickEdit(el);
                    }}
                  >
                    <AiFillEdit className="text-xl" />
                  </IconButton>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{" Missing Product"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {question} - urgent?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              handleSaveMissing("yes");
            }}
          >
            Yes
          </Button>
          <Button
            onClick={() => {
              handleSaveMissing("no");
            }}
          >
            No
          </Button>
        </DialogActions>
      </Dialog>

      {edit && (
        <Dialog
          open={edit}
          onClose={() => {
            setEdit(false);
          }}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{editVal?.title}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {editVal?.brand}
            </DialogContentText>
            <div className="flex p-4">
              <img className="w-[30%]" src={editVal?.image} alt="" />
              <div>
                <div className="flex">
                  <p className="w-20">Price</p>
                  <TextField
                    type="number"
                    sx={{ width: 100 }}
                    placeholder="price"
                    onChange={(e) => {
                      if(e.target.value>=0){
                        setEditVal({ ...editVal, price: e.target.value });
                      }
                    
                    }}
                    value={editVal?.price}
                  />
                </div>
                <div className="flex py-2">
                  <p className="w-20">Quantity</p>
                  <div className="flex justify-between w-[50%]">
                    <IconButton
                     variant='contained'
                      color="success"
                      onClick={() => {
                        setEditVal({
                          ...editVal,
                          quantity: editVal?.quantity + 1,
                        });
                      }}
                    >
                      +
                    </IconButton>
                    <TextField
                      type="number"
                      value={editVal?.quantity}
                      placeholder="quantity"
                    />
                    <IconButton
                    variant='contained'
                      onClick={() => {
                        if(editVal.quantity>0){
                          setEditVal({
                            ...editVal,
                            quantity: editVal?.quantity - 1,
                          });
                        }
                      }}
                      color="success"
                    >
                      -
                    </IconButton>
                  </div>
                </div>
                <div className="flex py-2">
                  <p className="w-20">Total</p>
                  {editVal?.total}
                </div>
              </div>
            </div>
            <div>
              <p>Choose reason <span>(optional)</span></p>
             <div className="w-[90%] flex justify-around" >
             <Chip variant="outlined" label="Missing product"/>
              <Chip variant="outlined"  label="Quntity is not same"/>
              <Chip  variant="outlined"  label="Price is not same"/>
              <Chip variant="outlined" label="others"/>
               
             </div>
            </div>
          </DialogContent>
          <DialogActions>
            <Button
              color="success"
              variant="outlined"
              onClick={() => {
                setEditVal(null);
                setEdit(false);
              }}
            >
              Cancel
            </Button>
            <Button color="success" variant="contained" onClick={handleEdit}>
              Send
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </div>
  );
};
