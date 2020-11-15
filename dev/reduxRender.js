import React from  "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);
export default function renderComponent(ui, state={}) {
  const store = mockStore(state);
  return [render((
      <Provider store={store}>
          {ui}
      </Provider>
  )), store];
}