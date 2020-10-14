import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route, NavLink} from 'react-router-dom';
import IconExample from './icon.example';
import DialogExample from './dialog.example';
import LayoutExample from './layout.example';
import {Aside, Content, Footer, Header, Layout} from '../lib/layout/layout';
import logo from '../assets/logo.png';
import './index.scss';
import {Icon} from '../lib';
import ButtonExample from './button.example';
import InputExample from './input.example';

ReactDOM.render(
    <Router>
        <Layout className={'site-page'}>
            <Header className={'site-header'}>
                <div className="logo">
                    <img src={logo} alt="logo" height={60}/>
                </div>
                <div/>
                <a href={'https://github.com/zhangshifuicetea/ice-tea-ui'} target={'blank'} rel="noopener" style={{display: 'block'}}>
                    <Icon name={'github'} style={{fontSize: 32, marginRight: 30}}/>
                </a>
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
                            <NavLink to={'/layout'}>Layout</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/dialog'}>Dialog</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/input'}>Input</NavLink>
                        </li>
                    </ul>
                </Aside>
                <Content className={'site-content'}>
                    <Route path={'/icon'} component={IconExample}/>
                    <Route path={'/button'} component={ButtonExample}/>
                    <Route path={'/layout'} component={LayoutExample}/>
                    <Route path={'/dialog'} component={DialogExample}/>
                    <Route path={'/input'} component={InputExample}/>
                </Content>
            </Layout>
            <Footer className={'site-footer'}>&copy; Zhang Shifu</Footer>
        </Layout>
    </Router>,
    document.getElementById('root')
);
