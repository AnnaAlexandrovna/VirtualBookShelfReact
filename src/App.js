import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './containers/Home';
import Subject from './containers/Subjects';
import Favorites from './containers/Favorites';
import { Routers } from './constants/routes';
import Book from './containers/Book';
import Collection from './containers/Collection';
import Search from './containers/Search';
import { LanguageProvider } from './utils/providers/languageProvider';
import { Provider } from 'react-redux';
import { configureStoreVB } from './store';
import { ViewportProvider } from './utils/providers/viewportProvider';
import { Authorization } from './containers/Authorization';
import Login from './containers/Login';
import AddFavorites from './utils/favorites/addFavorites';
import Logout from './containers/Logout';
import Alert from './containers/Alert';

const store = configureStoreVB();
const App = () => {
    return <ViewportProvider>
        <Provider store={store}>
            <AddFavorites />
            <LanguageProvider>
                <Alert>
                    <Router>
                        <Switch>
                            <Route path={Routers.subject} component={Subject} id={Routers.subject} />
                            <Route path={Routers.favorites} component={Favorites} />
                            <Route path={Routers.book} component={Book} />
                            <Route path={Routers.collection} component={Collection} />
                            <Route path={Routers.search} component={Search} />
                            <Route path={Routers.authorization} component={Authorization} />
                            <Route path={Routers.login} component={Login} />
                            <Route path={Routers.logout} component={Logout} />
                            <Route path={Routers.home} component={Home} />
                        </Switch>
                    </Router>
                </Alert>
            </LanguageProvider>
        </Provider>
    </ViewportProvider>;
};

export default App;