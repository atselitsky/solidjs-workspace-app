import { Component } from 'solid-js';
import { Routing } from '@/pages';
import { Header } from '@/widgets/header';
import { Navbar } from '@/widgets/navbar';
import { SuspenseRoute } from './providers';
import constants from '@/app/constants';
import './globals.css';

const App: Component = () => {
  return (
    <div class="app-layout">
      <SuspenseRoute>
        <Header />
        <Navbar links={constants['routes']} />
        <main>
          <Routing />
        </main>
      </SuspenseRoute>
    </div>
  );
};

export default App;
