import axios from 'axios';
import { render, screen } from '@testing-library/react';
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';

jest.mock('axios');
configure({ adapter: new Adapter() });

// test the api 
describe('mock api call', () => {
  test("get data from axios api call", () => {
    const mockedResponse = { data: { name: "Auxiliary Generating Microchip" } };
    axios.get.mockResolvedValue(mockedResponse);

    const app = require('./layout/Layout');
    app.apiCall();
    expect(axios.get).toHaveBeenCalled();
    expect(axios.get).toHaveBeenCalledWith('https://idme-interview.herokuapp.com');
  })
})

describe('rendering on the different viewports', () => {
  // test on the laptop
  it('renders correctly on the laptop', () => {
    window.innerWidth = 1200;
    render(<App />);
    expect(screen.queryByTestId('laptop-view')).toHaveStyle({ display: 'table' });
    expect(screen.queryByTestId('mobile-view')).toHaveStyle({ display: 'none' });
  })

  // test on the mobile
  it('renders correctly on the mobile', () => {
    window.innerWidth = 500;
    render(<App />);
    expect(screen.queryByTestId('laptop-view')).toHaveStyle({ display: 'table' });
    expect(screen.queryByTestId('mobile-view')).toHaveStyle({ display: 'block' });
  })
})






