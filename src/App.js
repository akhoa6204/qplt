import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Following from './pages/Following';
import { publicRoutes, privateRoutes } from './routes';
import { DefaultLayout } from '~/components/Layout';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;
            let Layout = DefaultLayout;
            if (route.layout === null){
              Layout = Fragment
            } else if (route.layout) {
              Layout = route.layout
            }
            return (
              <Route
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
                key={index}
              ></Route>
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
