import React, { useState } from "react";
import {
  Button,
  CardContent,
  Card,
  Grid,
  TextField,
  Select,
  InputLabel,
  MenuItem,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";

const FormContainer = ({ handleClick }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [enjoying, setEnjoying] = useState("");

  const handleFormSubmit = () => {
    alert(
      `Hello ${
        firstName} ${lastName
      },\nJob Title: ${jobTitle}\nDo you enjoy your job?: ${enjoying}`
    );
  };

  return (
    <div style={{ padding: "0px 32px" }}>
      <Card>
        <CardContent>
          <Grid container spacing={1}>
            <Grid xs={12} sm={6} item>
              <TextField
                label="First name"
                placeholder="Enter first name"
                fullWidth
                required
                onChange={(e) => setFirstName(e.target.value)}
              />
            </Grid>
            <Grid xs={12} sm={6} item>
              <TextField
                label="Last name"
                placeholder="Enter last name"
                fullWidth
                required
                onChange={(e) => setLastName(e.target.value)}
              />
            </Grid>

            <Grid xs={12} sm={6} item>
              <FormControl fullWidth>
                <InputLabel id="job-title-label">Job Title</InputLabel>
                <Select
                  labelId="job-title-label"
                  id="job-title-select"
                  value={jobTitle}
                  label="Job Title"
                  onChange={(e) => setJobTitle(e.target.value)}
                >
                  <MenuItem value={"Associate Software Engineer"}>
                    Associate Software Engineer
                  </MenuItem>
                  <MenuItem value={"Software Engineer"}>
                    Software Engineer
                  </MenuItem>
                  <MenuItem value={"Senior Engineer"}>Senior Engineer</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid xs={12} sm={6} item>
              <FormLabel id="demo-radio-buttons-group-label">
                Are you enjoying this internship?
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="Yes"
                name="radio-buttons-group"
                row
                onChange={(e) => setEnjoying(e.target.value)}
              >
                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="No" control={<Radio />} label="No" />
              </RadioGroup>
            </Grid>

            <Grid xs={12} item>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={() => handleFormSubmit()}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};

export default FormContainer;

// useEffect to perform logic to determine state, rather than setting a default state
