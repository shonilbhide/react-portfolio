"use client"; // Add this line at the top

import React, { useEffect, useRef, useState, useMemo, Suspense } from 'react';
import Image from "next/image";
import { Canvas, useFrame } from '@react-three/fiber';
import { Billboard, Text, TrackballControls } from '@react-three/drei';
import { generate } from 'random-words';
import { educations } from "@/utils/data/educations";
import { BsPersonWorkspace } from "react-icons/bs";
import GlowCard from "../../helper/glow-card";
import * as THREE from 'three';

function Word({ children, ...props }) {
  const color = new THREE.Color();
  const fontProps = { font: '/Inter-Bold.woff', fontSize: 2.5, letterSpacing: -0.05, lineHeight: 1, 'material-toneMapped': false };
  const ref = useRef();
  const [hovered, setHovered] = useState(false);
  const over = (e) => (e.stopPropagation(), setHovered(true));
  const out = () => setHovered(false);
  // Change the mouse cursor on hover
  useEffect(() => {
    if (hovered) document.body.style.cursor = 'pointer';
    return () => (document.body.style.cursor = 'auto');
  }, [hovered]);
  // Tie component to the render-loop
  useFrame(({ camera }) => {
    ref.current.material.color.lerp(color.set(hovered ? '#fa2720' : 'white'), 0.1);
  });
  return (
    <Billboard {...props}>
      <Text ref={ref} onPointerOver={over} onPointerOut={out} onClick={() => console.log('clicked')}>
        {children}
      </Text>
    </Billboard>
  );
}

function Cloud({ count = 4, radius = 20 }) {
  // Create a count x count random words with spherical distribution
  const words = useMemo(() => {
    const temp = [];
    const spherical = new THREE.Spherical();
    const phiSpan = Math.PI / (count + 1);
    const thetaSpan = (Math.PI * 2) / count;
    for (let i = 1; i < count + 1; i++)
      for (let j = 0; j < count; j++) temp.push([new THREE.Vector3().setFromSpherical(spherical.set(radius, phiSpan * i, thetaSpan * j)), generate()]);
    return temp;
  }, [count, radius]);
  return words.map(([pos, word], index) => <Word key={index} position={pos}>{word}</Word>);
}

function WordCloud() {
  return (
    <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 35], fov: 90 }}>
      <fog attach="fog" args={['#202025', 0, 80]} />
      <Suspense fallback={null}>
        <group rotation={[10, 10.5, 10]}>
          <Cloud count={8} radius={20} />
        </group>
      </Suspense>
      <TrackballControls />
    </Canvas>
  );
}

function Education() {
  return (
    <div id="education" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-full">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
        </div>
      </div>
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl opacity-20"></div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Educations
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="py-8">
        <div className="w-full">
          {/* <div className="flex justify-center items-start">
            <div className="w-3/4 h-3/4">
              <WordCloud />
            </div>
          </div> */}

          <div className='w-full'>
            <div className="w-full justify-center flex flex-col gap-6">
              {
                educations.map(education => (
                  <GlowCard key={education.id} identifier={`education-${education.id}`}>
                    <div className="w-full justify-center p-3 relative text-white">
                      <Image
                        src="/blur-23.svg"
                        alt="Hero"
                        width={3080}
                        height={200}
                        className="absolute bottom-0 opacity-80"
                      />
                      <div className="flex justify-center">
                        <p className="text-xs sm:text-sm text-[#16f2b3]">
                          {education.duration}
                        </p>
                      </div>
                      <div className="flex items-center gap-x-8 px-3 py-5">
                        <div className="text-violet-500  transition-all duration-300 hover:scale-125">
                          <BsPersonWorkspace size={36} />
                        </div>
                        <div className='justify-center'>
                          <p className="text-base sm:text-xl mb-2 font-medium uppercase">
                            {education.title}
                          </p>
                          <p className="text-sm sm:text-base">{education.institution}</p>
                        </div>
                      </div>
                    </div>
                  </GlowCard>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
