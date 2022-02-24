import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/home/Home';

// eslint-disable-next-line react/function-component-definition
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
