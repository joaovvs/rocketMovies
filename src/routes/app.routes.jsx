import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Create } from '../pages/Create';
import { Profile } from '../pages/Profile';
import { Preview } from '../pages/Preview';



export function AppRoutes(){
   return( 
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<Create />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/preview/:id" element={<Preview />} />
      </Routes>
   );
}
