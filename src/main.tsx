import { Router } from 'solid-app-router';
import { render } from 'solid-js/web';
import { HopeProvider } from '@hope-ui/solid';
import App from './app';

render(
  () => (
    <Router>
      <HopeProvider>
        <App />
      </HopeProvider>
    </Router>
  ),
  document.getElementById('root') as HTMLElement
);
