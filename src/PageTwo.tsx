import { Box, Card, CardContent, Typography } from "@mui/material";
import arrow from "./assets/arrow.png";
import pubgVideo from "./assets/pubgwash.mp4";
import { motion } from "framer-motion";
import cheers from "./assets/cheers.mov";
import { useNavigate } from "react-router-dom";
export default function PageTwo() {
  const navigate = useNavigate();
  const handleNextClick = () => {
    navigate("/page-one");
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

        <CardContent
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            padding: "0 20px",
          }}
        >

          <Typography variant="h1" sx={{ fontSize: "2rem", fontWeight: "bold", mb: 5 }}>
            Dear Ashley,
          </Typography>
          <Typography variant="caption" sx={{ fontSize: "1rem", color: "black", mb: 1 }}>
            Hope your day is as amazing as you are! Wishing you a year filled with happiness, adventure, and all the good things. 💖
          </Typography>

          <Typography variant="caption" sx={{ fontSize: "1rem", color: "black", mb: 1 }}>
            I am so grateful to have you as a friend. Thanks for always being there for me!
          </Typography>

          <Typography variant="caption" sx={{ fontSize: "1rem", color: "black" }}>
            Also, I thought it would be cool to code a cute website for your bday, I hope you like it! :)
          </Typography>
        </CardContent>

        <Box sx={{ position: "absolute", bottom: "20px", left: "20px" }}>
          <motion.img
            src={arrow}
            alt="arrow"
            style={{ width: "30px", cursor: "pointer" }}
            onClick={handleNextClick}
            initial={{ y: 0 }}
            animate={{ scaleX: -1 }}
            whileTap={{ y: 3 }}
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        </Box>
      </Card>


      {/* Right Page */}
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
        <CardContent>
        <video
            src={cheers}
            autoPlay
            loop
            muted
            style={{ width: "100%", height: "400px" }}
            onLoadedMetadata={(e) => e.currentTarget.volume = 0.2}
          />
          <Typography variant="caption" sx={{  fontWeight: "bold" }}>
            Remember this? :)
          </Typography>
          <video
            src={pubgVideo}
            controls
            muted
            style={{ width: "100%", height: "300px" }}
            onLoadedMetadata={(e) => e.currentTarget.volume = 0.2}
          />
 
        </CardContent>

      </Card>

    </Box>

  );
}
