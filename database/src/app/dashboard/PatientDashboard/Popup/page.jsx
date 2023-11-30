'use client'
import { useState } from "react";
import { motion } from "framer-motion"; 
import React from 'react'


const page = () => {
    const [isOn, setIsOn] = useState(false);

    const toggleSwitch = () => setIsOn(!isOn);
    return (
<>
<div className="switch" data-isOn={isOn} onClick={toggleSwitch}>
      <motion.div className="handle" layout transition={spring} />
    </div>
    </>
  )
}

export default page