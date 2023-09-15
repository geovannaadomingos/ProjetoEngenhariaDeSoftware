import { useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';
import './Login.css';

function Login() {

    const [user, setUser] = useState({});

    function handleCredentialResponse(response) {
        console.log("Encoded JWT ID token: " + response.credential);
        var userObject = jwt_decode(response.credential);
        console.log(userObject)
        setUser(userObject);


    }

    useEffect(() => {
        /* Google */
        google.accounts.id.initialize({
            client_id: '267038055707-5g4l6voof87f5a7e3hsr9g09dtbkdspp.apps.googleusercontent.com',
            callback: handleCredentialResponse,
        });
        google.accounts.id.renderButton(
            document.getElementById('signInDiv'),
            { theme: 'outline', size: 'large' }
        );
    }, []);


    return (
        <div className='Login'>
            <div id='signInDiv'></div>
            {user &&
                <div>
                    <img src={user.picture}></img>
                    <h3>{user.name}</h3>
                    <p>{user.email}</p>
                    <h2>{user.email_verified}</h2>
                </div>}
        </div>
    );
}

export default Login;