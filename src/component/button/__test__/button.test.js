import React from 'react';
import ReactDOM from 'react-dom';
import Button from '../button';
import {render, cleanup} from '@testing-library/react'
// import 'jest-dom/extend-expect'
import renderer from 'react-test-renderer'

afterEach(cleanup);
it('renders without crashing', () => {
    const div=document.createElement("div");
    ReactDOM.render(<Button></Button>, div)
    
});

it('renders button correctly', () => {
    const {getByTestId}=render(<Button label='Click me please'></Button>)
    expect(getByTestId('button')).toHaveTextContent('Click me please')
});

it('renders button correctly', () => {
    const {getByTestId}=render(<Button label='Click me'></Button>)
    expect(getByTestId('button')).toHaveTextContent('Click me')
});

it('matches snapshot', () => {
    const tree  = renderer.create(<Button label='Click me'></Button>).toJSON();
    expect(tree).toMatchSnapshot();
});
