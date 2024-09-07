// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';

import NxWelcome from './nx-welcome';

import { Route, Routes, Link } from 'react-router-dom';

import LeafletMap from './LeafletMap';

export function App() {
  return (
    <div>
      <NxWelcome title="eve-react" />

      {/* START: routes */}
      {/* These routes and navigation have been generated for you */}
      {/* Feel free to move and update them to fit your needs */}
      <br />
      <hr />
      <br />
      <div role="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/page-2">Page 2</Link>
          </li>
          <li>
            <Link to="/map">Map</Link> {/* Add a link to the Map page */}
          </li>
        </ul>
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              This is the generated root route.{' '}
              <Link to="/page-2">Click here for page 2.</Link>
            </div>
          }
        />
       <Route
          path="/map"
          element={<LeafletMap />}  {/* Render LeafletMap on the /map route */}
        />
      </Routes>
      {/* END: routes */}
    </div>
  );
}

export default App;
