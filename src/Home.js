import React, { Component } from 'react';
import { withNamespaces, Trans } from 'react-i18next';
import logo from './react.svg';
import './Home.css';

class Home extends Component {
  componentDidMount() {
    // console.log('localStorage.get("i18nextLng")');
    // console.log(localStorage);
    // how to create
    // this.currentLng = JSON.stringify(localStorage;
    this.isUnmounted = true;
    this.forceUpdate();
    
    
  }
  

  
  render() {
    const { t, i18n } = this.props;

    const changeLanguage = lng => {
      i18n.changeLanguage(lng);
    };

    // console.log("localStorage");
    // console.log(localStorage);
    // const currentLng = '';//localStorage.get("i18nextLng");

    // const currentLng = () = localStorage.get("i18nextLng");

    return (
      <div className="Home">
        <div className="Home-header">
          <img src={logo} className="Home-logo" alt="logo" />
          <h2>{t('message.welcome')}</h2>
        </div>
        <div className="Home-intro">
          <Trans i18nKey="guideline">
            To get started, edit <code>src/App.js</code> or <code>src/Home.js</code> and save to
            reload.
          </Trans>
        </div>
        <div>{this.isUnmounted && localStorage.getItem('i18nextLng')}</div>
        <button onClick={() => changeLanguage('de')}>de</button>
        <button onClick={() => changeLanguage('en')}>en</button>
        <ul className="Home-resources">
          <li>
            <a href="https://github.com/jaredpalmer/razzle">Docs</a>
          </li>
          <li>
            <a href="https://github.com/jaredpalmer/razzle/issues">Issues</a>
          </li>
          <li>
            <a href="https://palmer.chat">Community Slack</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default withNamespaces('translations')(Home);
