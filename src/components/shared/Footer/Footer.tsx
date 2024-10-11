import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import facebook from "@/assets/landing_page/facebook.png";

const Footer = () => {
  return (
    <Box bgcolor="#243642" py={4}>
      <Container>
        <Stack direction="row" justifyContent="center" gap={4}>
          <Typography color="#ffffff">Consultation</Typography>
          <Typography color="#ffffff">Health Plans</Typography>
          <Typography color="#ffffff">Medicine</Typography>
          <Typography color="#ffffff">Diagnostic</Typography>
          <Typography color="#ffffff">NGOs</Typography>
        </Stack>
        <Stack direction="row" justifyContent="center" gap={2} my={3}>
          <Image src={facebook} height={30} width={30} alt="facebook icon" />
          <Image src={facebook} height={30} width={30} alt="facebook icon" />
          <Image src={facebook} height={30} width={30} alt="facebook icon" />
          <Image src={facebook} height={30} width={30} alt="facebook icon" />
        </Stack>
        <div className="border-b-[1px] border-white border-dashed"></div>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          mt={3}
        >
          <Typography color="#ffffff">
            @2023 PH HealthCare. All Rights Reserved.
          </Typography>
          <Typography color="#ffffff" component="h1" variant="h4">
            P
            <Box component="span" color="primary.main">
              H
            </Box>{" "}
            Health Care
          </Typography>
          <Typography color="#ffffff">
            Privacy Policy | Terms & Conditions
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
