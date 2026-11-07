"use client";
import { useEffect, useRef } from "react";
import Lenis from "lenis";
export default function SmoothScroll({children}:{children:React.ReactNode}) { const frame=useRef<number|null>(null); useEffect(()=>{ const lenis=new Lenis({duration:1.15,smoothWheel:true,wheelMultiplier:.9,touchMultiplier:1.15}); const raf=(time:number)=>{lenis.raf(time);frame.current=requestAnimationFrame(raf);}; frame.current=requestAnimationFrame(raf); return ()=>{if(frame.current!==null)cancelAnimationFrame(frame.current);lenis.destroy();}; },[]); return <>{children}</>; }