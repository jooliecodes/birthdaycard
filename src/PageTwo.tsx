import { Box, Card, CardContent, Stack, Tooltip, Typography } from "@mui/material";
import arrow from "./assets/arrow.png";
import pubgVideo from "./assets/pubgwash.mp4";
import { motion } from "framer-motion";
import cheers from "./assets/cheers.mov";
import { useNavigate } from "react-router-dom";
import gc437 from "./assets/gc437.png";
import { useState } from "react";
import ashdrift from "./assets/ashdrift.mp4";
import bestdriver from "./assets/bestdriver.mp4";

export default function PageTwo() {
  const navigate = useNavigate();
  const [blurred, setBlurred] = useState(false);
  const [showPrice, setShowPrice] = useState(false);

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
            Also, I thought it would be cool to code a cute website for your bday, I hope you like it! :) Oh and I want to spoil you a little so click below to reveal the gift!!!
          </Typography>
          {/* create a click to reveal number */}
          <Tooltip title="Click to reveal the gift" placement="top">

            <Box
              onClick={() => setBlurred(!blurred)}
              sx={{
                width: 250,
                textAlign: "center",
                cursor: "pointer",
                transition: "filter 0.5s ease-in-out",
                filter: blurred ? "blur(0px)" : "blur(8px)",
                backgroundColor: "#f5f5f5",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: '1rem',
              }}
            >
              <img src={gc437} alt="giftcard" style={{ width: "100%", borderRadius: "18px", }} />
            </Box>
          </Tooltip>
          <Tooltip title="Reveal the gift value" placement="top">

            <Box
              onClick={() => setShowPrice(!showPrice)}
              sx={{
                width: 200,
                textAlign: "center",
                cursor: "pointer",
                transition: "filter 1s ease-in-out",
                filter: showPrice ? "blur(0px)" : "blur(8px)",
                backgroundColor: "#f5f5f5",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: '1rem',
              }}
            >
              <Stack direction="column" spacing={1} alignItems="center">
                <Typography variant="h6" fontWeight="bold" fontSize={"12px"} sx={{ color: "black", }}>
                  $75
                </Typography>
                <Typography variant="h6" fontWeight="bold" fontSize={"10px"} sx={{ color: "black", }}>
                  DM me for the code
                </Typography>

              </Stack>

            </Box>
          </Tooltip>
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
        <Typography variant="h6" sx={{ fontSize: "1rem" }}>
          pubg moments i could find hehe
        </Typography>
          <video
            src={pubgVideo}
            controls
            
            style={{ width: "100%", height: "250px" }}
            onLoadedMetadata={(e) => e.currentTarget.volume = 0.5}
          />
          <video
            src={ashdrift}
            controls
            loop
           
            style={{ width: "100%", height: "250px" }}
            onLoadedMetadata={(e) => e.currentTarget.volume = 0.5}
          />

        <video 
        src={bestdriver}
        controls
        loop
      
        style={{ width: "100%", height: "250px" }}
        onLoadedMetadata={(e) => e.currentTarget.volume = 0.5}
        />
        </CardContent>

      </Card>

    </Box>

  );
}
