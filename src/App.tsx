import React, { FC } from "react";
import { Provider } from "react-redux";
// components
import { Layout } from "./container/Layout";
import { ErrorBoundary } from "./components/ErrorBoundary/ErrorBoundary";
// redux
import { store } from "./store/store";
// global css
import "./App.css";

const App: FC = () => {
  return (
    <Provider store={store}>
      <ErrorBoundary>
        <Layout />
      </ErrorBoundary>
    </Provider>
  );
};

export { App };
