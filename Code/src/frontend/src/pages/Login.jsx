import React, { useEffect } from 'react';
import jwt_decode from 'jwt-decode';
import './Login.css';
import logo from '../assets/colabora.png';

function Login(props) {
    const [user, setUser] = React.useState({});

    function handleCredentialResponse(response) {
        console.log("Encoded JWT ID token: " + response.credential);
        let userObject = jwt_decode(response.credential);
        console.log(userObject);
        setUser(userObject);

        // Após a autenticação bem-sucedida, chame a função para definir isAuthenticated como true
        // props.setAuthenticated();
    }

    useEffect(() => {
        google.accounts.id.initialize({
            client_id: '394323047185-va2rp8rso0bgor9s49o65rp4otul602r.apps.googleusercontent.com',
            callback: handleCredentialResponse,
        });
        google.accounts.id.renderButton(
            document.getElementById('signInDiv'),
            { theme: 'outline', size: 'large' }
        );
    }, []);

    return (
        <div className='div'>
            <div className='div-logo'>
                <h1 className='div-logo-h1'>ColaboraCIn</h1>
                <img
                    src={logo}
                    alt="Logo"
                    className='div-logo-img'
                />
            </div>
            <div className='div-button'>
                <h2 className='div-button-h2'>Faça seu login com a conta de domínio cin.ufpe.br e tenha acesso aos materiais do ColaboraCIn:</h2>
                <div id='signInDiv'></div>
            </div>
        </div>
    );
}

export default Login;
