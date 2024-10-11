import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { TDoctor } from "@/interfaces";
import { Grid, Stack } from "@mui/material";

const TopRatedDoctorCard = ({ doctor }: { doctor: TDoctor }) => {
  const { profilePhoto, name } = doctor;
  return (
    <Grid item md={4}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 250 }}
          image={profilePhoto}
          title="doctor image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
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
