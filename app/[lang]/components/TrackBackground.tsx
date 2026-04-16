"use client";

import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Road from "./Road";
import Bus from "./Bus";
import useMediaQuery from "@/app/utils/useMediaQuery";

export default function TrackBackground() {
  const containerRef = useRef(null);

  // Framer Motion hook to track scroll progress (0 at top, 1 at bottom)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const distance = useTransform(scrollYProgress, [0, 1], ["6%", "86%"]);

  const isDesktop = useMediaQuery("(min-width: 1024px)");

  const desktopPath = "M189.5-72.5c6.38,410.68,8.93,713.22,0,865-1.74,29.53-6.85,103.35,35,175,44.71,76.54,122.45,110.91,155,125,69.47,30.07,129,32.9,185,35,247,9.25,518.3-34.53,675,5,22.37,5.64,68.66,19.44,102.88,58.08,39.56,44.65,42.63,99.49,42.63,100,0,.94,0,2.1,0,2.1v.36c-.52,36.06,20.88,601.92,21,605h0c12.47,321.13,4.52,549.89-44,757-9.27,39.56-23,90.94-62.5,142.5-9.85,12.84-56.54,71.67-150,110-104.58,42.89-200.16,32.41-270,25-508.45-53.95-570.59-42.35-625-5-85.83,58.92-124.28,162.6-140,205-22.56,60.83-25.34,118.05-30,230-15.46,371.75-13.79,408.94,5,470,20.72,67.33,49.51,160.86,135,220,51.93,35.92,109.27,52.7,235,50,192.86-4.13,579.35-33.09,740-15,16.59,1.87,51.36,6.56,85,30,42.79,29.82,63.62,75.94,80,135,32.88,118.55,33,235.81,25,325"; 
  const mobilePath = "M79-150C75.84-72.93,74-11.07,73,27,58.52,571.64,92.7,713.11,73,881a288.86,288.86,0,0,0,1,77c3,20.27,17.68,120.57,94,179,27.62,21.14,66.12,39,131,69,20,9.24,39.22,17.57,54,38,24.36,33.67,18.25,75.82,17,87-50.43,452.89-8.64,911.34-14,1367-1.22,103.83-.78,98.47-.27,144.36,0,0,.15,15.76.27,31.64.42,56-.73,244.46,0,377,.44,80.33-2.06,160.67-1,241,.67,50.73,1.82,93.42-14,149-11.67,41-26.59,93.43-69,130-66.32,57.19-122.37,8.83-180,55-50.13,40.16-52.18,131.75-57,314-1.28,48.4-.77,89,0,118,.28,54.34,2.23,98.36,4,129,1.23,21.34,3.49,52.56,8,115,4.26,58.92,4.21,55.72,4.74,66.08,3.13,61.32.88,73.43,3.26,120.92,3.36,67.1,7,83.47,21,96,16.62,14.87,43.08,15.91,96,18,46.49,1.83,65.47-3.3,99,7,27.33,8.4,40.57,17.52,45,21,24.08,18.92,33.38,43.37,38,56,11.64,31.81,9.36,57.94,5,102-4,40.37-11.5,70.48-20,104-9.73,38.38-19.69,69.58-27,91"; 

  const viewBoxXY = isDesktop ? ["1500", "4500"] : ["400", "5000"];
  const roadPath = isDesktop ? desktopPath : mobilePath;

  const canvasStyle = isDesktop 
    ? "absolute w-[1500px] h-[4500px] overflow-hidden" 
    : "absolute w-[400px] h-[5000px] overflow-hidden";
  
  return (
    // Change here to match illustrator canvas
    <div ref={containerRef} className={canvasStyle}>
      
      {/* Change Road component too to match illustrator canvas */}
      <Road roadPath={roadPath} viewBoxXY={viewBoxXY}/>
      
      <Bus roadPath={roadPath} distance={distance}/>

    </div>
  );
}