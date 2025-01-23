import { useParams } from "react-router-dom";
import { useUserById } from "../Apis";
import { Box, CircularProgress, Container, Typography } from "@mui/material";

const UserDetails = () => {
  const { userId } = useParams();
  const { data, isLoading, error } = useUserById(userId);

  if (isLoading) {
    return (
      <Box sx={{ textAlign: "center", my: 10 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Typography
        variant="h4"
        color="error"
        sx={{ my: 2, textAlign: "center" }}
      >
        {error.message}
        <br />
        There is no data for this user
      </Typography>
    );
  }

  return (
    <Box>
      <Container>
        <Typography variant="h4" color="initial" sx={{ my: 4 }}>
          {data.name}
        </Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              sm: "repeat( auto-fit, minmax(320px, 1fr) )",
            },
            gap: 3,
          }}
        >
          <Typography variant="body1" color="initial">
            Email: <br /> {data?.email}
          </Typography>
          <Typography variant="body1" color="initial">
            Phone: <br /> {data?.phone}
          </Typography>
          <Typography variant="body1" color="initial">
            Website: <br /> {data?.website}
          </Typography>
          <Typography variant="body1" color="initial">
            Address: <br /> {data?.address?.city} - {data?.address?.street}
          </Typography>
          <Typography variant="body1" color="initial">
            Company: <br /> {data?.company?.name}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default UserDetails;
