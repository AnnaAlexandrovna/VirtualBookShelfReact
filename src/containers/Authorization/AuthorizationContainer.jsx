import './AuthorizationContainer.scss';
import { GithubLoginButton } from 'react-social-login-buttons';
import H1 from '../../components/H1';
import { gitHubUrl } from '../../constants/urls';
import React, { useContext } from 'react';
import { languageContext } from '../../utils/providers/languageProvider';

const AuthorizationContainer = React.memo(() => {
    const goToGit = () => { window.location = gitHubUrl; };
    const { translate } = useContext(languageContext);
    return <div className='authorization-page-container'>
        <div>
            <H1 text={translate('login.loginTitle')} />
            <div className='authorization-page-container_buttons-section'>
                <div>
                    <GithubLoginButton onClick={goToGit} />
                </div>
            </div>
        </div>
    </div>;
});
export default AuthorizationContainer;
