// import React, { useEffect } from 'react';
// import jwt_decode from 'jwt-decode';
import './Login.css';

function Login(props) {
    // const [user, setUser] = React.useState({});

    // function handleCredentialResponse(response) {
    //     console.log("Encoded JWT ID token: " + response.credential);
    //     let userObject = jwt_decode(response.credential);
    //     console.log(userObject);
    //     setUser(userObject);

    //     // Após a autenticação bem-sucedida, chame a função para definir isAuthenticated como true
    //     props.setAuthenticated();
    // }

    // useEffect(() => {
    //     google.accounts.id.initialize({
    //         client_id: '394323047185-va2rp8rso0bgor9s49o65rp4otul602r.apps.googleusercontent.com',
    //         callback: handleCredentialResponse,
    //     });
    //     google.accounts.id.renderButton(
    //         document.getElementById('signInDiv'),
    //         { theme: 'outline', size: 'large' }
    //     );
    // }, []);

    return (
        <>
            <div className='div-logo'>
                <h1>ColaboraCIn</h1>
            </div>
        </>
        // <div className='Login'>
        //     <div id='signInDiv'></div>
        //     {user &&
        //         <div>
        //             <img src={user.picture} alt="Profile" />
        //             <h3>{user.name}</h3>
        //             <p>{user.email}</p>
        //             <h2>{user.email_verified ? 'Email verificado' : 'Email não verificado'}</h2>
        //         </div>}
        // </div>
    );
}

export default Login;
