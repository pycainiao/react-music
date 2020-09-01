import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Player from "./view/Player"; // 播放器
import Layout from "./view/Layout";
import Recommend from "./view/recommend/Recommend";
import RankComponent from "./view/rank/RankComponent";
import Search from "./view/search/Search";
import SingersComponent from "./view/singers/SingersComponent";
import AlbumComponent from "./view/recommend/AlbumComponent";
import SingerComponent from "./view/singers/SingerComponent";
function App() {
  return (
    <BrowserRouter>
      <Player />
      <Switch>
        <Route exact path="/recommend/:id" component={AlbumComponent} />
        <Route exact path="/singers/:id" component={SingerComponent} />
        <Route exact path="/rank/:id" component={AlbumComponent} />
        <Route exact path="/search" component={Search} />
        <Layout>
          <Route exact path="/" render={() => <Redirect to={"/recommend"} />} />
          <Route path="/recommend" component={Recommend} />
          <Route path="/singers" component={SingersComponent} />
          <Route path="/rank" component={RankComponent} />
        </Layout>
      </Switch>
    </BrowserRouter>
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
