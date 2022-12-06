import React from 'react'
import {
  Route,
  Routes
} from 'react-router-dom'
import { LeftBar, RightBar } from '../components'
import { ChildRoutes, PrivateRoute } from '../routes'
//import Home from './Home'
//import Orders from './Orders'



function Layout() {
  return (
    <div className="flex flex-row">
    {/*left side bar*/}
    <LeftBar/>
     

    {/*centre screen
    <div>Centre screen</div>*/}
    <Routes>

   {/* <Route
    path="/"
    name="Home"
    element={<Home/>}
    />
    <Route
    path="/orders"
    name="Home"
    element={<Orders/>}
  />*/}
  {ChildRoutes?.map((route, index)=> {
    return(
      <Route
        key={route?.id}
        path ={route?.path}
        name={route?.name}
        exact={route?.exact}
        element={
          <PrivateRoute
          route={route}>
            <route.element>
              </route.element>
          </PrivateRoute>
        }//rendering a complement
        
      />
    )
  })}

    </Routes>
    
    
    {/*right  side bar*/}
    <RightBar/>

    </div>
    
  
  )
}

export default Layout

