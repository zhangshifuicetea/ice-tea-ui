import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route, NavLink} from 'react-router-dom';
import IconExample from './icon.example';
import DialogExample from './dialog.example';
import LayoutExample from './layout.example';
import {Aside, Content, Footer, Header, Layout} from '../lib/layout/layout';
import logo from '../assets/logo.png';
import './index.scss';

ReactDOM.render(
    <Router>
        <Layout className={'site-page'}>
            <Header className={'site-header'}>
                <div className="logo">
                    <img src={logo} alt="logo" height={60}/>
                </div>
            </Header>

            <Layout className={'site-main'}>
                <Aside className={'site-aside'}>
                    <h2>组件</h2>
                    <ul>
                        <li>
                            <NavLink to={'/icon'}>Icon</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/button'}>Button</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/dialog'}>Dialog</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/layout'}>Layout</NavLink>
                        </li>
                    </ul>
                </Aside>
                <Content className={'site-content'}>
                    <Route path={'/icon'} component={IconExample}/>
                    <Route path={'/dialog'} component={DialogExample}/>
                    <Route path={'/layout'} component={LayoutExample}/>
                </Content>
            </Layout>
            <Footer className={'site-footer'}>&copy; Zhang Shifu</Footer>
        </Layout>
    </Router>,
    document.getElementById('root')
);
