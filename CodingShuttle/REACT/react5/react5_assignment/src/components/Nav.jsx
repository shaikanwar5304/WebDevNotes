import React from 'react'
import {Link} from "react-router-dom"
import Card1 from './Pages/Card1';
import Card2 from './Pages/Card2';
import Card3 from './Pages/Card3';
function Nav() {
    return (
      <div>
        Nav
        <div>
          <Link to="/Nav/Card1" element={<Card1 />}>
            Link1
          </Link>
          <Link to="/Nav/Card2" element={<Card2 />}>
            Link2
          </Link>
          <Link to="/Nav/Card3" element={<Card3 />}>
            Link3
          </Link>
        </div>
      </div>
    );
}
export default Nav