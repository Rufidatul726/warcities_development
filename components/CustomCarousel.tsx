"use client";

import { CustomCarouselProps } from '@types'
import React, {useEffect, useState} from 'react'
import Image from "next/image";

const CustomCarousel = ({src1, src2, src3, src4, src5}: CustomCarouselProps) => {
    const [currentImage, setCurrentImage] = useState(0);
    const images = [src1, src2, src3, src4, src5];
    const length = images.length;

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage(currentImage === length - 1 ? 0 : currentImage + 1);
        }, 3500 );
        return () => clearInterval(interval);
    }, [currentImage]);
    
    return (
        <Image src={images[currentImage]} alt="hero" fill className="object-contain rounded-3xl" />
    );
}

export default CustomCarousel