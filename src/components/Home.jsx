import React from "react";
import { useUserContext } from "./context/usercontext";
import { Container, Grid, Typography, TextField, Button, Paper, Box } from "@mui/material";

function Home() {
  const { name, setName, email, setEmail, phone, setPhone, handleFormSubmit } = useUserContext();
  const formId = 11;

  return (
    <Container>
      <Grid container justifyContent="center" alignItems="center" spacing={2}>
        <Grid item xs={12} md={7}>
          <Typography variant="h3" component="h3" color="white" gutterBottom>
            <span style={{ color: "#d32f2f" }}>Enter Your Data</span>
          </Typography>
        </Grid>
        <Grid item xs={12} md={7}>
          <Paper elevation={3}>
            <Box p={4}>
              <form
                onSubmit={(e) => handleFormSubmit(e, { name, email, phone }, formId)}
              >
                <TextField
                  fullWidth
                  margin="normal"
                  label="Enter the Name"
                  variant="outlined"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <TextField
                  fullWidth
                  margin="normal"
                  label="name@gmail.com"
                  type="email"
                  variant="outlined"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                  fullWidth
                  margin="normal"
                  label="Phone Number"
                  type="number"
                  variant="outlined"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, bgcolor: "#1f3265", color: "white" }}
                >
                  Add To List
                </Button>
              </form>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Home;
