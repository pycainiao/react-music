import React, { lazy, Suspense } from "react";
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
// import Player from "./view/Player"; // 播放器
// import Layout from "./view/Layout"; //

const Player = lazy(() => import("./view/play/Player"));
const Layout = lazy(() => import("./view/Layout"));
const Recommend = lazy(() => import("./view/recommend/Recommend"));
const RankComponent = lazy(() => import("./view/rank/RankComponent"));
const Search = lazy(() => import("./view/search/Search"));
const SingersComponent = lazy(() => import("./view/singers/SingersComponent"));
const AlbumComponent = lazy(() => import("./view/recommend/AlbumComponent"));
const SingerComponent = lazy(() => import("./view/singers/SingerComponent"));

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <Suspense fallback={null}>
          <Player />
          <Switch>
            <Route exact path="/recommend/:id" component={AlbumComponent} />
            <Route exact path="/singers/:id" component={SingerComponent} />
            <Route exact path="/rank/:id" component={AlbumComponent} />
            <Route exact path="/search" component={Search} />
            <Layout>
              <Route
                exact
                path="/"
                render={() => <Redirect to={"/recommend"} />}
              />
              <Route path="/recommend" component={Recommend} />
              <Route path="/singers" component={SingersComponent} />
              <Route path="/rank" component={RankComponent} />
            </Layout>
          </Switch>
        </Suspense>
      </HashRouter>
    </Provider>
  );
}

export default App;
/*
 * 路由为什么这样写
 * 根据设计.只有/recommend /singers /rank 才是共享一个头部的.因此.
 * 而,具体详情,是显示的单独页,不是嵌套的.如果是嵌套的.则需要在对应的主路由里嵌套
 * 但是,详情的路由,需放在前面,这样,才会优先匹配上
 * Layout为什么可以放到后面,这是因为共用的头部部分.因此,可以这样放
 *
 * */
