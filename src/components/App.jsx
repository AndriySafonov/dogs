import DogDetails from 'pages/DogDetails';
import Dogs from 'pages/Dogs';
import Home from 'pages/Home';
import { Route, Routes } from 'react-router-dom';
import { Gallery } from './Gallery';
import { Subbreeds } from './Subbreeds';
import { Layout } from './Layout';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="dogs" element={<Dogs />} />
          <Route path="dogs/:dogId" element={<DogDetails />}>
            <Route path="subbreeds" element={<Subbreeds />} />
            <Route path="gallery" element={<Gallery />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
