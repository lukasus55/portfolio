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

  const roadPath:string = "M189.5-72.5c6.38,410.68,8.93,713.22,0,865-1.74,29.53-6.85,103.35,35,175,44.71,76.54,122.45,110.91,155,125,69.47,30.07,129,32.9,185,35,196.44,7.36,574.88-16.44,675,5,36.27,7.77,65.5,26.5,65.5,26.5a181.75,181.75,0,0,1,54,53c7.74,12,25.8,40.62,26,78.54,0,1.25,0,2.16,0,2.46-.52,36.15,21,605,21,605,5.42,143.15-3.62,63-4,444,0,0-.13,130.75-40,313-7.16,32.71-20.94,88.16-62.5,142.5-9.44,12.34-54.78,75-150,110-101.82,37.4-192.47,31.5-270,25-313.2-26.25-504.08-69.91-625-5-51.73,27.77-85,70-85,70a733.47,733.47,0,0,0-55,135c-22.69,76.86-26,135.12-30,230-3.59,85.5-4.48,123.46,5,470,1,37.09,3.27,93.3,40,145,14.58,20.53,39.71,47.54,95,75,104.1,51.71,205.62,50.63,235,50,192.86-4.13,579.35-33.09,740-15,16.59,1.87,51.36,6.56,85,30,42.79,29.82,63.62,75.94,80,135,32.88,118.55,33,235.81,25,325"; 

  return (
    // Change here to match illustrator canvas
    <div ref={containerRef} className="absolute w-[1500px] h-[4500px] overflow-hidden z-0">
      
      {/* Change Road component too to match illustrator canvas */}
      <Road roadPath={roadPath}/>
      
      <Car roadPath={roadPath} distance={distance}/>

    </div>
  );
}