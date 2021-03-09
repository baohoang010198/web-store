import React from 'react'
import { useFirebaseApp } from 'reactfire';
import 'firebase/auth'
import { useHistory } from 'react-router-dom';
function LogOut(props) {

    const firebase = useFirebaseApp();
    let history = useHistory();

    const handleClick = () => {
        firebase.auth().signOut();
        history.push("/login");
        
      }
    return (
        <>
            <div style={{textAlign:"center",display:"inline"}}  onClick={ handleClick }>Logout</div>
        </>
    )
}


export default LogOut

