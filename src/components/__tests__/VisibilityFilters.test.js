import React from  "react";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from 'redux-mock-store';
import VisibilityFilters from '../VisibilityFilters';
import { setFilter } from '../../redux/actions';

describe('VisibilityFilters', () => {

  function renderComponent(ui, state={}) {
    const store = configureStore([])(state);
    return [render((
        <Provider store={store}>
            {ui}
        </Provider>
    )), store];
  }

  afterAll(cleanup);

  test('should render', async () => {
    const ui = renderComponent(<VisibilityFilters />);
    expect(ui).toMatchSnapshot();
  })
  
  test('should render all', () => {
    renderComponent(<VisibilityFilters />, { visibilityFilters: "all" });
    const element = screen.getByText("all");
    expect(element).toHaveClass("filter--active");
  })

  test('should dispatch setFilters on clicked all', () => {
    const [, store] = renderComponent(<VisibilityFilters />);
    fireEvent.click(screen.getByText("all"));
    expect(store.getActions()).toContainEqual(setFilter("all"));
  })
  
  test('should dispatch setFilters on clicked completed', () => {
    const [, store] = renderComponent(<VisibilityFilters />);
    fireEvent.click(screen.getByText("completed"));
    expect(store.getActions()).toContainEqual(setFilter("completed"));
  })

  test('should dispatch setFilters on clicked incomplete', () => {
    const [, store] = renderComponent(<VisibilityFilters />);
    fireEvent.click(screen.getByText("incomplete"));
    expect(store.getActions()).toContainEqual(setFilter("incomplete"));    
  })

})
