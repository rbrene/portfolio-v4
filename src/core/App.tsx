import React from 'react';
import { Main, PreLoader, SocialMedia } from '../components';
import { Hero } from '../components/routes';


export default function App() {
  return (
    <PreLoader>
      <SocialMedia />
      <Main>
        <Hero />
      </Main>
    </PreLoader>
  );
};