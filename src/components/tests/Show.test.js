import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Show from './../Show';

const DropDown = () => document.querySelector('#seasons')
const TEST_FUNCTION = jest.fn()

const TEST_SHOW = {
    name: 'data.name',
    image: 'data.image',
    summary: 'stripTags(data.summary)',
    seasons:[{id:0,name:'test',summary:'new season',episodes:[]},{id:1,name:'test2',summary:'new season231',episodes:[{id:123,name:'first ep'}]}]
}

test('component renders when no seasons are selected and when rerenders with a season passed in', () => {
    const {rerender} = render(<Show
        show={TEST_SHOW}
        selectedSeason={'none'}
        handleSelect={TEST_FUNCTION}
        />)
        expect(screen.queryByText('first ep',{exact:false})).not.toBeInTheDocument()
        rerender(<Show
            show={TEST_SHOW}
            selectedSeason={1}
            handleSelect={TEST_FUNCTION}
            />)
            expect(screen.queryByText('first ep',{exact:false})).toBeInTheDocument()
});


test('renders Loading component when prop show is null', async() => {
    render(<Show/>)
    screen.findByText('Fetching data...',{exact:false})
});

test('renders same number of options seasons are passed in', () => {
    render(<Show
        show={TEST_SHOW}
        selectedSeason={'none'}
        handleSelect={TEST_FUNCTION}
        />)
    expect(document.querySelectorAll('option').length).toBe(3)
});

test('handleSelect is called when an season is selected', () => {
    render(<Show
        show={TEST_SHOW}
        selectedSeason={'none'}
        handleSelect={TEST_FUNCTION}
        />)
    fireEvent.change(DropDown(),{target:{value:1}})
    expect(DropDown()).toHaveValue('1')
    expect(TEST_FUNCTION).toHaveBeenCalled()
});

