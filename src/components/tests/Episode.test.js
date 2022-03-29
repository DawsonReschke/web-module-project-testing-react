import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Episode from './../Episode';

const DEFAULT_IMAGE_URL = 'https://i.ibb.co/2FsfXqM/stranger-things.png'

beforeEach(()=>{
    render(<Episode 
        episode= { {id :1, name:"exaple", season:1, number:1, summary:"Test", runtime:20}}
        />)
})

test("renders the summary test passed as prop", () => {
    const summaryExists1 = screen.getByText('Test')
    const summaryExists2 = screen.findByText('Test') 
    const summaryExists3 = screen.queryByText('Test')
    expect(summaryExists1).toBeDefined()
    expect(summaryExists2).toBeDefined()
    expect(summaryExists3).toBeDefined()
    
});

test("renders default image when image is not defined", () => {
    const image = screen.queryByRole('img')
    expect(image).toHaveAttribute('src',DEFAULT_IMAGE_URL)
});
