import { Canvas } from "@react-three/fiber";
// import PinkCake from "./PinkCake";
import { Environment, OrbitControls } from "@react-three/drei";
import { Box, Card, CardContent, Grid2, Typography } from "@mui/material";
import arrow from "./assets/arrow.png";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import bgImage from "./assets/cutebg.png"; 
import PinkCake from "./PinkCake";

export default function FrontCover() {
  const navigate = useNavigate();

  const handleClickOpen = () => {
    navigate("/page-one");
    console.log("Button clicked, navigating to page one");
    // setOpen(true);
  };



  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        width: "100vw",
        padding: 0,
        margin: 0,
        position: "fixed",
        top: 0,
        left: 0,
      }}
    >

      <Card
        sx={{
          width: 600,
          height: 800,
          textAlign: "center",
          boxShadow: 3,
          position: "relative",
          overflow: "visible",
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          borderRadius: 1,
        }}
      >

        <Grid2 container size={12} alignItems="center" justifyContent="center">
          <CardContent sx={{ padding: 0 }}>
            <Typography
              sx={{
                fontSize: "2.7rem",
                textAlign: "center",
                fontFamily: "'Press Start 2P', sans-serif",
                color: "white",
                textShadow: "-3px -3px 0 black, 3px -3px 0 black, -3px 3px 0 black, 3px 3px 0 black",
                fontWeight: "bold",
                textTransform: 'uppercase',
                margin: '20px 0 20px 20px',
              }}
            >
              Happy Birthday Ashley
            </Typography>
            <Typography variant="h1" sx={{ color: "yellow", textAlign: 'center', fontFamily: "'Press Start 2P', sans-serif", textShadow: "-2px -2px 0 black, 2px -2px 0 black, -2px 2px 0 black, 2px 2px 0 black", fontSize: '16px', marginTop: '20px' }}>
              Make a wish!
            </Typography>
            <Typography variant="h4" sx={{color: "hotpink", textAlign: 'center', fontFamily: "'Press Start 2P', sans-serif", textShadow: "-2px -2px 0 black, 2px -2px 0 black, -2px 2px 0 black, 2px 2px 0 black", fontSize: '13px', marginTop: '20px' }}>
              Blow out the candle by 
            </Typography>
            <Typography variant="h4" sx={{color: "hotpink", textAlign: 'center', fontFamily: "'Press Start 2P', sans-serif", textShadow: "-2px -2px 0 black, 2px -2px 0 black, -2px 2px 0 black, 2px 2px 0 black", fontSize: '13px', marginTop: '20px' }}>
              blowing into the mic
            </Typography>
            <Grid2 size={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '23px' }}>
            <Canvas
              style={{ width: "600px", height: "400px" }}
              camera={{ position: [9, 8, 0], fov: 60 }}
            >
              <ambientLight intensity={.3} />
              <pointLight position={[10, 10, 10]} />
              <PinkCake />
              <OrbitControls />
              <Environment preset="city" />
            </Canvas>

            </Grid2>
     
            <Box sx={{ position: "absolute", bottom: "20px", right: "20px" }}>
              <motion.img
                src={arrow}
                alt="arrow"
                style={{ width: "30px", cursor: "pointer" }}
                onClick={handleClickOpen}
                initial={{ y: 0 }}
                whileTap={{ y: 3 }}
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
            </Box>


          </CardContent>
        </Grid2>
        {/* Right fake page edge */}
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