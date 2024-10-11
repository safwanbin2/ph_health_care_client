import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { TDoctor } from "@/interfaces";
import { Grid, Stack } from "@mui/material";
import Image from "next/image";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const TopRatedDoctorCard = ({ doctor }: { doctor: TDoctor }) => {
  const {
    profilePhoto,
    name,
    designation,
    address,
    qualification,
    currentWorkingPlace,
  } = doctor;
  return (
    <Grid item md={4}>
      <Card>
        <Image
          src={profilePhoto}
          alt="doctor image"
          width={1000}
          height={1000}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography color="gray">
            {qualification}, {currentWorkingPlace}
          </Typography>
          <Typography color="gray" mt={1} fontSize={14}>
            <LocationOnIcon /> {address}
          </Typography>
        </CardContent>
        <CardActions
          sx={{
            p: 2,
          }}
        >
          <Stack direction="row" gap={1}>
            <Button>Book Now</Button>
            <Button variant="outlined">View Profile</Button>
          </Stack>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default TopRatedDoctorCard;
