import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import styles from "./card.module.css";
import { MainButton } from "../../atoms/button/Button";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { addReservation } from "@/store/reservasSlice";

export const CardHotel = ({ hotel, snackbar }) => {
  const dispatch = useDispatch();

  const listHotelsReservation = useSelector(
    (state) => state.reservation.hotelsReservation
  );

  const handleClick = () => {
    localStorage.setItem("selectedHotel", JSON.stringify(hotel));
  };

  const handleReservation = () => {
    const hotelExists = listHotelsReservation.some(
      (hotels) => hotels.name === hotel.name
    );
    if (hotelExists) {
      alert("El hotel ya está reservado");
    } else {
      console.log("Hotel agregado");
      dispatch(addReservation(hotel));
      snackbar(true);
    }
  };

  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          className={styles.imageHotel}
          sx={{ height: 140 }}
          image={hotel.photo}
          title={hotel.name}
        />

        <CardContent className={styles.containerInfo}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            className={styles.titleHotel}
          >
            {hotel.name}
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            className={styles.descriptionHotel}
          >
            {hotel.description}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            className={styles.countryCityHotel}
          >
            Country: {hotel.country}, City: {hotel.city}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            className={styles.priceHotel}
          >
            Price: ${hotel.price}
          </Typography>
        </CardContent>
        <CardActions className={styles.containerButton}>
          <Link href={`detail/${hotel.name}`}>
            <MainButton
              className={styles.buttonCardHotel}
              onClick={handleClick}
            >
              Detalles
            </MainButton>
          </Link>
          <MainButton
            className={styles.buttonCardHotel}
            onClick={handleReservation}
          >
            Reservas
          </MainButton>
        </CardActions>
      </Card>
    </>
  );
};
