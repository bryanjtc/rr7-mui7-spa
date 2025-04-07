import { StrictMode } from "react";
import { AppError } from "./AppError";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import LoginIcon from "@mui/icons-material/Login";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";

export function ErrorBoundary() {
  return <AppError />;
}

export default function Login() {
  const bgImage = "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2l0eXxlbnwwfHwwfHx8MA%3D%3D";
  const currentYear = new Date().getFullYear();
  const years = `2023 - ${currentYear}`;

  return (
    <StrictMode>
      <Box
        alignItems="stretch"
        display="flex"
        sx={{
          flexDirection: {
            xs: "column",
            md: "row",
          },
          height: {
            xs: "auto",
            md: "100vh",
          },
          minHeight: {
            xs: "min-content",
            md: "700px",
          },
          backgroundColor: "white.main",
        }}
      >

          <Box
            width="fill-available"
            alignItems="center"
            display="flex"
            justifyContent="center"
            maxWidth={{ xs: "100%", md: "50%" }}
            height={{ xs: "200px", md: "100%" }}
            minHeight={{ xs: "200px", md: "700px" }}
            sx={{
              backgroundImage: `url(${bgImage})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <img
              src={bgImage}
              style={{ display: "none" }}
              alt="bgImage"
            />
            <Typography
              variant="h1"
              textAlign="center"
              bgcolor="white.main"
              p={3}
              sx={{
                m: {
                  xs: 3,
                  md: 0,
                },
                fontSize: {
                  xs: "calc(2vw + 2vh)",
                  md: "3.5rem",
                },
              }}
              borderRadius="4px"
              width="min-content"
            >
              Company 1
            </Typography>
          </Box>
          <Box
            my={8}
            mx={4}
            display="flex"
            flexDirection="column"
            alignItems="stretch"
            justifyContent="center"
            minHeight={500}
            gap={2}
            width="fill-available"
          >
            <Typography
              component="h1"
              variant="h5"
              fontWeight="bold"
              align="left"
            >
              Nice to see you!
            </Typography>
            <Typography component="p" align="left">
              Select the company and enter your username and password to log in.
            </Typography>
            <Box width="fill-available" my={3}>
              <form>
                <FormControl
                  fullWidth={true}
                  required={true}
                >
                  <InputLabel htmlFor="company">Company</InputLabel>
                  <Select
                    notched={true}
                    id="company"
                    name="company"
                    label="Company"
                    value="Company 1"
                    fullWidth={true}
                  >
                    {[{ company: "Company 1" }]?.map((values) => (
                      <MenuItem value={values.company} key={values.company}>
                        {values.company}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <TextField
                  margin="normal"
                  required={true}
                  fullWidth={true}
                  id="username"
                  label="User"
                  type="text"
                  name="username"
                  autoComplete="email"
                />
                <TextField
                  margin="normal"
                  required={true}
                  fullWidth={true}
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                <Box
                  sx={{
                    display: "flex",
                    gap: 1,
                    flexDirection: { xs: "column", sm: "column", md: "row" },
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember password"
                  />
                  <Button
                    type="button"
                    variant="text"
                  >
                    Did you forget your password?
                  </Button>
                </Box>
                <Button
                  type="submit"
                  fullWidth={true}
                  variant="contained"
                  startIcon={<LoginIcon />}
                  sx={{ mt: 3, mb: 2 }}
                >
                  Log in
                </Button>
                <Button
                  type="button"
                  fullWidth={true}
                  variant="outlined"
                  sx={{ mb: 2 }}
                >
                  Log in with Microsoft
                </Button>
              </form>
              <Box display="flex">
                <img
                  className="logo"
                  aria-label="logo"
                  height="70px"
                />
              </Box>
              <Typography>
                © {years}. All rights reserved.
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography>Made with ❤️ by Team PayMe.</Typography>
                <Typography>
                  <Link href="mailto:info@mail.com" color="inherit">
                    info@mail.com
                  </Link>
                </Typography>
              </Box>
            </Box>
          </Box>
      </Box>
    </StrictMode>
  );
}
