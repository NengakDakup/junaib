'use client';
import React from 'react'
import { useEffect } from "react";

const BackToTop = () => {

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (typeof feather !== 'undefined') {
        feather.replace();
      } else {
        // If feather isn't loaded yet, wait for it
        const checkFeather = setInterval(() => {
          if (typeof feather !== 'undefined') {
            feather.replace();
            clearInterval(checkFeather);
          }
        }, 100);
      }
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const mybutton = document.getElementById("back-to-top");
      if (mybutton != null) {
          if (window.scrollY > 500) {
              mybutton.classList.add("flex");
              mybutton.classList.remove("hidden");
          } else {
              mybutton.classList.add("hidden");
              mybutton.classList.remove("flex");
          }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  
  function topFunction() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
  }

  return (
    <a href="#" onClick={topFunction} id="back-to-top" class="back-to-top fixed text-lg rounded-full z-10 bottom-5 end-5 h-9 w-9 text-center bg-green-600 text-white justify-center items-center flex">
      <i class="uil uil-arrow-up"></i>
    </a>
  )
}

export default BackToTop