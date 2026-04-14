"use client";

import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Road from "./Road";
import Car from "./Car";

export default function TrackBackground() {
  const containerRef = useRef(null);

  // Framer Motion hook to track scroll progress (0 at top, 1 at bottom)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const distance = useTransform(scrollYProgress, [0, 1], ["2%", "90%"]);

  const roadPath:string = "M189.5-72.5c6.38,410.68,8.93,713.22,0,865-1.74,29.53-6.85,103.35,35,175,44.71,76.54,122.45,110.91,155,125,69.47,30.07,129,32.9,185,35,247,9.25,518.3-34.53,675,5,22.37,5.64,68.66,19.44,102.88,58.08,39.56,44.65,42.63,99.49,42.63,100,0,.94,0,2.1,0,2.1v.36c-.52,36.06,20.88,601.92,21,605h0c12.47,321.13,4.52,549.89-44,757-9.27,39.56-23,90.94-62.5,142.5-9.85,12.84-56.54,71.67-150,110-104.58,42.89-200.16,32.41-270,25-508.45-53.95-570.59-42.35-625-5-85.83,58.92-124.28,162.6-140,205-22.56,60.83-25.34,118.05-30,230-15.46,371.75-13.79,408.94,5,470,20.72,67.33,49.51,160.86,135,220,51.93,35.92,109.27,52.7,235,50,192.86-4.13,579.35-33.09,740-15,16.59,1.87,51.36,6.56,85,30,42.79,29.82,63.62,75.94,80,135,32.88,118.55,33,235.81,25,325"; 

  return (
    // Change here to match illustrator canvas
    <div ref={containerRef} className="absolute w-[1500px] h-[4500px] overflow-hidden z-0">
      
      {/* Change Road component too to match illustrator canvas */}
      <Road roadPath={roadPath}/>
      
      <Car roadPath={roadPath} distance={distance}/>

    </div>
  );
}