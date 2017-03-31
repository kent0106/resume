import React from 'react';
import { Link } from "react-router";
class leftNavBar extends React.Component {
    render(){
      return(
        <section className="sidebar">
          <img src="http://a3.topitme.com/1/db/53/1124092893c8e53db1l.jpg" alt="person img" className="person" />
          <h1>张三的个人{this.props.title}</h1>
          <Link to="/" activeClassName="leftNav-active" onlyActiveOnIndex={true}>
            <i className="iconfont icon-zhuye" ></i>简介
          </Link>
          /*<Link to="/product" activeClassName="leftNav-active">
            <i className="iconfont icon-zuopinanli"></i>作品
          </Link>*/
        </section>
      )
    }
}

export default leftNavBar;
