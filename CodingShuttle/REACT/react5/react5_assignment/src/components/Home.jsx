import React from 'react'
import Nav from './Nav'
import {Link,Outlet} from "react-router-dom"
import Validate from './Validate'
import OnlyLogin from './OnlyLogin'

function Home() {

    let login
    if(Validate())login = "Logout"
    else {login ="Login"}

  return (
    <div>
      <button>
          <Link
            to="/Nav">
            Nav
          </Link>
      </button>
      <button>
        <Link to="/Login" state={{key:"fromHome"}} element={<OnlyLogin />}>
          {login}
        </Link>
      </button>
    </div>
  );
}

export default Home