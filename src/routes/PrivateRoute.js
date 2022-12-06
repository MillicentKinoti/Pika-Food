import { Login } from "../pages"

function PrivateRoute({children,route}) {
    const userprofile = {
        name: "Aaron Smith",
        isAuthenticated: false
    }
    //check whether you need permission to access a page
    if (!route?.permission){
        return children
    }
    else {
        //check id user is authenticated
        if (userprofile?.isAuthenticated){
            return  children
        } else {
          return <Login/>
        }



        //return <div>
            //You need permission to access this page
        //</div>
    }
  
}

export default PrivateRoute