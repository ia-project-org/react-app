import React from "react";
import { Container, Paper, Typography, Box, TextField, FormControlLabel, Button, Checkbox } from "@mui/material";
import "../styles/login.css";
import Logo from "../components/logo.jsx";

function Login() {
    const handleSubmit = () => console.log("login");

    return (
        <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            <Container
                maxWidth="xs"
                sx={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    marginTop: 10,
                    flexGrow: 1,
                }}
            >
                <Paper elevation={5} sx={{ padding: 4, px: 5 }}>
                    <Logo 
                        width="60px"  
                        alt="My App Logo"
                        sx={{
                            mx: "auto",
                            textAlign: "center",
                            mb: 3,
                        }}
                    />
                    <Typography component="h1" variant="h5" sx={{ textAlign: "center" }}>
                        Welcome back to Logoipsum
                    </Typography>
                    <Typography component="h1" variant="caption" sx={{ textAlign: "center", mb: 5 }}>
                        Enter your username and password to continue
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            required
                            id="email"
                            label="Email address"
                            placeholder="Enter your email address..."
                            fullWidth
                            slotProps={{
                                input: { style: { fontSize: "0.8rem" } },
                                inputLabel: { shrink: true },
                            }}
                            sx={{ mb: 3 }}
                        />
                        <TextField
                            required
                            id="password"
                            label="Password"
                            placeholder="Enter your password..."
                            fullWidth
                            type="password"
                            slotProps={{
                                input: { style: { fontSize: "0.8rem" } },
                                inputLabel: { shrink: true },
                            }}
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    value="remember"
                                    color="primary"
                                    sx={{
                                        transform: "scale(0.8)",
                                    }}
                                />
                            }
                            label={
                                <Typography sx={{ fontSize: "0.75rem" }}>Remember me</Typography>
                            }
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "flex-start",
                                width: "100%",
                                ml: -1.5,
                                mb: 3,
                                mt: -1,
                            }}
                        />
                        <Button type="submit" variant="contained" fullWidth sx={{ mt: 1 }}>
                            Sign In
                        </Button>
                    </Box>
                </Paper>
            </Container>

            <footer
                style={{
                    position: "fixed",
                    bottom: 0,
                    left: 0,
                    width: "100%", 
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "10px 20px",
                }}
            >
                <Typography variant="caption" color="text.secondary">
                    © Logoipsum Inc. All rights reserved
                </Typography>
                <Typography
                    variant="caption"
                    color="text.secondary"
                    sx={{ cursor: "pointer" }}
                    onClick={() => console.log("contact support click isnt handled yet :/")}
                >
                    Contact Support
                </Typography>
            </footer>
        </div>
    );
}

export default Login;
