import { Routes, Route } from 'solid-app-router';
import { Component } from 'solid-js';

// const Home = lazy(()=>import('../'))
export const Routing: Component = () => {
  return (
    <Routes>
      <Route path="/" component={() => <div>Home page</div>} />
      <Route path="*" component={() => <div>404 Page not found</div>} />
    </Routes>
  );
};
