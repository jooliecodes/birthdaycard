import { Box, Card, CardContent, Grid2, Typography } from "@mui/material";
import image1 from "./assets/ash.jpg";
import image2 from "./assets/image2.jpg";
import image3 from "./assets/npl.jpg";
import image4 from "./assets/pubg1.jpg";
import image5 from "./assets/pubgsquad.jpg";
import image6 from "./assets/sf.jpg";
import pinkpubg from "./assets/pinkpubg.jpg";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import arrow from "./assets/arrow.png";
export default function PageOne() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/");
  };

  const handleNextClick = () => {
    navigate("/page-two");
  }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        width: "100vw",
        gap: 0,
        position: "relative",
      }}
    >
      {/* Left Page */}
      <Card
        sx={{
          width: 600,
          height: 800,
          textAlign: "center",
          boxShadow: 3,
          backgroundColor: "whitesmoke",
          border: "1px solid black",
          borderRight: "none",
          borderRadius: "10px 0 0 10px",
          position: "relative",
        }}
      >

        <CardContent>
          <Typography variant="h1" sx={{ fontSize: "2rem", fontWeight: "bold", mt: 2 }}>
            Happy Birthday, Ashley!
          </Typography>
          <Box>
            <img src={pinkpubg} alt="bdaypicture" style={{ width: "100%", borderRadius: "18px", marginTop: '2rem', border: '1px solid black' }} />
          </Box>
          <Box sx={{ position: "absolute", bottom: "20px", left: "20px" }}>

            <motion.img
              src={arrow}
              alt="arrow"
              style={{ width: "30px", cursor: "pointer", }}
              onClick={handleBackClick}
              initial={{ scaleX: 1 }}
              animate={{ scaleX: -1 }}
              whileTap={{ y: 3 }}
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 300 }}
            />


          </Box>
        </CardContent>
      </Card>

      {/* Right Page (Collage with Scroll) */}
      <Card
        sx={{
          width: 600,
          height: 800,
          textAlign: "center",
          boxShadow: 3,
          backgroundColor: "whitesmoke",
          border: "1px solid black",
          borderLeft: "none",
          borderRadius: "0 10px 10px 0",
          position: "relative",
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            aligs: "center",
            justifyContent: "center",
            height: "100%",
            width: "100%",
          }}
        >
          {/* Scrollable Image Section */}
          <Box
            sx={{
              width: "100%",
              height: "650px",
              overflowY: "auto",
              borderRadius: "8px",
              scrollSnapType: "y mandatory",
              "&::-webkit-scrollbar": { width: "6px" },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "gray",
                borderRadius: "10px",
              },
            }}
          >
            <Typography variant="h2" sx={{ fontSize: "1.5rem", fontWeight: "bold", mb: 2 }}>
              Memories
            </Typography>
            <Grid2 container spacing={1} sx={{ display: "flex", flexWrap: "wrap" }}>
            <Grid2 size={12}>
                <img src={image4} alt="bdaypicture" style={{ width: "100%", borderRadius: "8px", marginTop: '2rem' }} />
              </Grid2>
              <Grid2 size={12}>
                <img src={image2} alt="bdaypicture" style={{ width: "100%", borderRadius: "8px" }} />
              </Grid2>
              <Grid2 size={6}>
                <img src={image1} alt="bdaypicture" style={{ width: "90%", borderRadius: "8px" }} />
              </Grid2>
              <Grid2 size={6}>
                <img src={image3} alt="bdaypicture" style={{ width: "100%", borderRadius: "8px" }} />
              </Grid2>
           
              <Grid2 size={12}>
                <img src={image5} alt="bdaypicture" style={{ width: "100%", borderRadius: "8px" }} />
              </Grid2>
              <Grid2 size={12}>
                <img src={image6} alt="bdaypicture" style={{ width: "100%", borderRadius: "8px" }} />
              </Grid2>

            </Grid2>
          </Box>



          {/* Navigation Button */}

          <Box sx={{ position: "absolute", bottom: "20px", right: "20px" }}>
            <motion.img
              src={arrow}
              alt="arrow"
              style={{ width: "30px", cursor: "pointer" }}
              onClick={handleNextClick}
              initial={{ y: 0 }}
              whileTap={{ y: 3 }}
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </Box>

        </CardContent>
        <Box
          sx={{
            position: "absolute",
            top: 0,
            right: -10,
            width: 10,
            height: "100%",
            boxShadow: "inset -2px 0 5px rgba(0, 0, 0, 0.2)",
            zIndex: 1,
            border: '1px solid black',
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: 0,
            right: -12,
            width: 10,
            height: "100%",
            boxShadow: "inset -2px 0 5px rgba(0, 0, 0, 0.2)",
            zIndex: 1,
            border: '1px solid black',
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: 0,
            right: -15,
            width: 10,
            height: "100%",
            boxShadow: "inset -2px 0 5px rgba(0, 0, 0, 0.2)",
            zIndex: 1,
            border: '1px solid black',
            borderRadius: 1,
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: 0,
            right: -15,
            width: 10,
            height: "100%",
            boxShadow: "inset -2px 0 5px rgba(0, 0, 0, 0.2)",
            zIndex: 1,
            border: '1px solid black',
            borderRadius: 1,
          }}
        />

      </Card>

    </Box>
  );
}
