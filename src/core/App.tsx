import React from 'react';
import { Main, SocialMedia } from '../components';
import { Hero } from '../components/routes';


export default function App() {
  return (
    <>
      <SocialMedia />
      <Main>
        <Hero />
      </Main>
    </>
  );
};