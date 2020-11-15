import React from  "react";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import renderComponent from '../../../dev/reduxRender';
import ErrorMessage from '../ErrorMessage';
import { initialState as error} from '../../redux/reducers/error'

describe('ErrorMessage', () => {

  afterAll(cleanup);

  test('should render', () => {
    const ui = renderComponent(<ErrorMessage />, { error });
    expect(ui).toMatchSnapshot();
  })
  
  test('should render with error message', () => {
    renderComponent(<ErrorMessage />, { error: {error: "TEST-ERROR", message: "TEST-MESSAGE"} });    
    screen.findByText("TEST-MESSAGE");
  })  
})
