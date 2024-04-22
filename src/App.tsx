// App.tsx
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; // Ensure this path is correct
import NotFound from './pages/NotFound'; // Assuming NotFound.tsx is also in the same directory

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
}
