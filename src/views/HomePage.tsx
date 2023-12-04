import { Button, Container, Grid, Link, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

export default function HomePage() {
  const { t, i18n } = useTranslation();
  const str = 'news';
  return (
    <>
      <Container maxWidth={'lg'}>

        <Grid mb={3} mt={3}>
          <Typography component={"h1"}>{t(`homePage.TitleFormVolunteer`)}</Typography>
          <Link href="#" underline="none"  >

            <Button variant="contained" sx={{ width: "270px", height: "56px", borderRadius: "16px" }}>{t(`homePage.buttonFormVolunteer`)}</Button>

          </Link>
        </Grid>
        <Grid mb={3} mt={3}>
          <Typography component={"h1"}>{t(`homePage.TitleFormHelp`)}</Typography>
          <Link href="#" underline="none"  >

            <Button variant="contained" sx={{ width: "270px", height: "56px", borderRadius: "16px" }}>{t(`homePage.buttonFormHelp`)}</Button>

          </Link>
        </Grid>
      </Container>
    </>
  );
}
