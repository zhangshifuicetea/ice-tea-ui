import React from 'react';
import * as renderer from 'react-test-renderer';
import Icon from '../icon/icon';
import {mount} from 'enzyme';

describe('icon', () => {
    it('render', () => {
        const json = renderer.create(<Icon name={'wechat'}/>).toJSON();
        expect(json).toMatchSnapshot();
    });

    it('onClick', () => {
        const fn = jest.fn();
        const component = mount(<Icon name={'wechat'} onClick={fn}/>)
        component.find('span').simulate('click');
        expect(fn).toBeCalled();
    })
});
