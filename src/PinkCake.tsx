import { useGLTF, useAnimations } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";

export default function Model() {
    const { scene, animations } = useGLTF("/birthdaycard/models/cakee.gltf");
    const { actions } = useAnimations(animations, scene);
  const [isCandleLit, setIsCandleLit] = useState(true);
  const analyserRef = useRef<AnalyserNode | null>(null);

  useEffect(() => {
    // Hide or show the candle flame
    const flame = scene.getObjectByName("flame_0");
    if (flame) {
      flame.visible = isCandleLit;
    }
  }, [isCandleLit, scene]);

  useEffect(() => {
    // Play first animation if available
    if (actions) {
      const firstAction = actions[Object.keys(actions)[0]];
      if (firstAction) firstAction.play();
    }
  }, [actions, scene]);

  useEffect(() => {
    const startMic = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
  
        const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
        const analyser = audioContext.createAnalyser();
        const microphone = audioContext.createMediaStreamSource(stream);
        microphone.connect(analyser);
        analyser.fftSize = 512;
        analyserRef.current = analyser;
  
        const dataArray = new Uint8Array(analyser.frequencyBinCount);
        let animationFrameId: number;
  
        const detectBlow = () => {
          analyser.getByteFrequencyData(dataArray);
          const volume = dataArray.reduce((acc, val) => acc + val, 0) / dataArray.length;
  
          if (volume > 70) {
            // console.log('blow detected', volume);
            setIsCandleLit(false);
          }
  
          animationFrameId = requestAnimationFrame(detectBlow);
        };
  
        detectBlow(); 
  
        return () => {
          stream.getTracks().forEach((track) => track.stop());
          cancelAnimationFrame(animationFrameId);
          if (analyserRef.current) analyserRef.current.disconnect();
        };
      } catch (error) {
        console.error("Microphone access denied or unavailable:", error);
      }
    };
  
    startMic();
  }, []);
  

  return (
    <group>
      <primitive object={scene} scale={3} />
      {isCandleLit && (
        <mesh position={[0, 1.5, 0]}>
          <pointLight intensity={2} color="orange" />
        </mesh>
      )}
    </group>
  );
}
