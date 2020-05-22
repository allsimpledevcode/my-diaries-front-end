import React, { Component, Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Loading } from "components";

const PrivateRoute = lazy(() => import('common/PrivateRoute/PrivateRoute'));
const Login = lazy(() => import('routes/Login/Login'));
const Signup = lazy(() => import('routes/Signup/Signup'));
const Directory = lazy(() => import('routes/Directory/Directory'));
const Favourites = lazy(() => import('routes/Favourites/Favourites'));
const ViewArticle = lazy(() => import('components/ViewArticle/ViewArticle'));
const NewArticle = lazy(() => import('components/NewArticle/NewArticle'));

class Main extends Component {
  constructor(props) {
    super(props);
  }
  render() { 
    return (
      <>
        <Suspense fallback={<Loading/>}>
          <Switch>
            <PrivateRoute path="/directory" exact component={Directory} />
            <PrivateRoute path="/directory/new" component={NewArticle}/>
            <PrivateRoute path="/directory/:diaryId/edit" component={NewArticle}/>
            <PrivateRoute path="/directory/:diaryId" component={ViewArticle} />
            <PrivateRoute path="/favourites" component={Favourites} />
            <Route path="/login" component={Login}/>
            <Route path="/signup" component={Signup}/>
            {/* <Redirect from="/" to="/login" /> */}
          </Switch>
        </Suspense>
      </>
    );
  }
}

export default Main;