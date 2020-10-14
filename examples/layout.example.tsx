import React from 'react';
import Layout from '../lib/layout/layout';
import Header from '../lib/layout/header';
import Content from '../lib/layout/content';
import Footer from '../lib/layout/footer';
import '../lib/layout/layout.scss';
import Aside from '../lib/layout/aside';
import './layout.example.scss';

const LayoutExample = () => {
    return (
        <div>
            <div>
                <h1>基本布局</h1>
                <Layout style={{height: 300, width: 500}}>
                    <Header className={'x'}>header</Header>
                    <Content className={'y'}>content</Content>
                    <Footer className={'x'}>footer</Footer>
                </Layout>
            </div>
            <div>
                <h1>有侧边栏</h1>
                <Layout style={{height: 300, width: 500}}>
                    <Header className={'x'}>header</Header>
                    <Layout>
                        <Aside className={'z'} style={{width: 100, marginRight: 4}}>aside</Aside>
                        <Content className={'y'}>content</Content>
                    </Layout>
                    <Footer className={'x'}>footer</Footer>
                </Layout>
            </div>
            <div>
                <h1>嵌套布局</h1>
                <Layout style={{height: 300, width: 500}}>
                    <Aside className={'z'} style={{width: 100, marginRight: 4}}>aside</Aside>
                    <Layout>
                        <Header className={'x'} style={{marginTop: 0}}>header</Header>
                        <Content className={'y'}>content</Content>
                        <Footer className={'x'} style={{marginBottom: 0}}>footer</Footer>
                    </Layout>
                </Layout>
            </div>
        </div>

    );
};

export default LayoutExample;
