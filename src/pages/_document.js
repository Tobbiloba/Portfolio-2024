import { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'
import gsap from 'gsap';
import { CustomEase } from 'gsap/dist/CustomEase';
gsap.registerPlugin(CustomEase);
CustomEase.create('cubic-text', '0.25, 1, 0.5, 1');
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
