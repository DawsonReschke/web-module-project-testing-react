import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Display from './../Display';

const getDataButton = () => screen.getByText('Press to Get Show Data')

beforeEach(()=>{
    render(<Display/>)
})

test('renders Show component when the button is clicked ', async () => {
    fireEvent.click(getDataButton())
    await screen.findAllByText('Stranger Things',{exact:false})
});

test('renders show season options matching your data when the button is clicked', async() => {
    fireEvent.click(getDataButton())
    await screen.findAllByText('Stranger Things',{exact:false})
    expect(screen.getAllByRole('option').length).toBe(5)
});
