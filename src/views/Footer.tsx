import * as React from 'react';
import { Box, Grid, Link, Typography, Container, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useTranslation } from 'react-i18next';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import PlaceIcon from '@mui/icons-material/Place';



// Replace these with your own social media URLs
const socialMediaLinks = {
  facebook: '#',
  twitter: '#',
  instagram: '#',
};

const Footer: React.FC = () => {
  const { t, i18n } = useTranslation();

  return (
    <Box
      sx={{
        bgcolor: 'rgb(177, 176, 167)',
        color: 'text.secondary',
        py: 3,
        borderTop: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Container>
        <Grid container spacing={2} justifyContent="space-between">
          <Grid item xs={6} sm={6} md={6} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              KrayBy
            </Typography>
            <IconButton
              aria-label="Facebook"
              color="inherit"
              component="a"
              href={socialMediaLinks.facebook}
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
              aria-label="Twitter"
              color="inherit"
              component="a"
              href={socialMediaLinks.twitter}
            >
              <TwitterIcon />
            </IconButton>
            <IconButton
              aria-label="Instagram"
              color="inherit"
              component="a"
              href={socialMediaLinks.instagram}
            >
              <InstagramIcon />
            </IconButton>
          </Grid>


          <Grid item xs={6} sm={6} md={6} display={"flex"} flexDirection={"column"} sx={{ textAlign: 'center', }}>
            <Typography variant="subtitle1" color="text.primary" gutterBottom>
              {t(`footer.titleContact`).toUpperCase()}
            </Typography>
            <Grid mb={1} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}><LocalPhoneIcon /><div style={{ marginLeft: "5x" }}>
              {t(`footer.phone`)}
            </div>
            </Grid>
            <Grid mb={1}  style={{ display: "flex", alignItems: "center", justifyContent: "center" }}><LocalPostOfficeIcon /><div style={{ marginLeft: "5x" }}>
              {t(`footer.posta`)}
            </div>
            </Grid>
            <Grid mb={1} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}><PlaceIcon /><div style={{ marginLeft: "5x" }}>
              {t(`footer.adress`)}
            </div>
            </Grid>
          </Grid>
        </Grid>

      </Container>
    </Box>
  );
};

export default Footer;
