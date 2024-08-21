import React, { useState } from "react";
import { useUserContext } from "./context/usercontext";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  TextField,
  Box,
} from "@mui/material";

function ListPages() {
  const { data, handleDelete, handleUpdate } = useUserContext();
  const [editingUserId, setEditingUserId] = useState(null);
  const [updatedName, setUpdatedName] = useState("");
  const [updatedEmail, setUpdatedEmail] = useState("");
  const [updatedPhone, setUpdatedPhone] = useState("");

  const handleEditClick = (user) => {
    setEditingUserId(user.id);
    setUpdatedName(user.name);
    setUpdatedEmail(user.email);
    setUpdatedPhone(user.phone);
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    if (editingUserId) {
      handleUpdate(editingUserId, {
        name: updatedName,
        email: updatedEmail,
        phone: updatedPhone,
      });
      setEditingUserId(null);
    }
  };

  return (
    <Box p={3}>
      <TableContainer component={Paper}>
        <Table aria-label="user table">
          <TableHead>
            <TableRow>
              <TableCell>S.No</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((user, index) => (
              <TableRow key={index}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>
                  {editingUserId === user.id ? (
                    <TextField
                      fullWidth
                      variant="outlined"
                      value={updatedName}
                      onChange={(e) => setUpdatedName(e.target.value)}
                    />
                  ) : (
                    user.name
                  )}
                </TableCell>
                <TableCell>
                  {editingUserId === user.id ? (
                    <TextField
                      fullWidth
                      type="email"
                      variant="outlined"
                      value={updatedEmail}
                      onChange={(e) => setUpdatedEmail(e.target.value)}
                    />
                  ) : (
                    user.email
                  )}
                </TableCell>
                <TableCell>
                  {editingUserId === user.id ? (
                    <TextField
                      fullWidth
                      variant="outlined"
                      value={updatedPhone}
                      onChange={(e) => setUpdatedPhone(e.target.value)}
                    />
                  ) : (
                    user.phone
                  )}
                </TableCell>
                <TableCell>
                  {editingUserId === user.id ? (
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleEditSubmit}
                    >
                      Update
                    </Button>
                  ) : (
                    <>
                      <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => handleEditClick(user)}
                        sx={{ mr: 1 }}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="contained"
                        color="error"
                        onClick={() => handleDelete(user.id)}
                      >
                        Delete
                      </Button>
                    </>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default ListPages;
