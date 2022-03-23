/**
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { NotFound } from '@strapi/helper-plugin';
import pluginId from '../../pluginId';
import HomePage from '../HomePage';
import Dashboard from '../Dashboard';
import { Web3ReactProvider } from '@web3-react/core'
import Web3 from 'web3';
import { MetaMaskProvider } from '../../hooks/metamask';
import CSVFile from '../CSVFile';

function getLibrary(provider, connector) {
  return new Web3(provider)
}

const App = () => {
  return (
    <div>
       <Web3ReactProvider getLibrary={getLibrary}>
        <MetaMaskProvider>
          <Switch>
            <Route path={`/file-content`} component={CSVFile} exact />
            <Route path={`/Dashboard`} component={Dashboard} exact />
            <Route component={NotFound} />
          </Switch>
          </MetaMaskProvider>
        </Web3ReactProvider>
    </div>
  );
};

export default App;
