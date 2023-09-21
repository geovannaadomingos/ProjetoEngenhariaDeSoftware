import { useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';
import './Login.css';
import logo from '../assets/colabora.png';
import { useNavigate } from 'react-router-dom';

function Login({ setIsLogged }) {
    const navigate = useNavigate();
    const [isLogged, setIsEmailVerified] = useState(false);

    function handleCredentialResponse(response) {
        let userObject = jwt_decode(response.credential);
        if (userObject.email_verified) {
            setIsEmailVerified(true);
            setIsLogged(true);
            navigate('/home', { state: { userEmail: userObject.email } })
        }
    }

    useEffect(() => {
        google.accounts.id.initialize({
            client_id: '813218912225-ol7uraoupe922rtm5qqke1kuhd97o1iv.apps.googleusercontent.com', //ID Gustavo
            callback: handleCredentialResponse,
        });

        google.accounts.id.renderButton(
            document.getElementById('signInDiv'),
            { theme: 'filled_black', shape: 'pill', size: 'large', text: 'continue_with', width: '300' }
        )
        google.accounts.id.prompt();
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
