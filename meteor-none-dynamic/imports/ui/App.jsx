import React, { useState } from 'react';
import { Meteor } from 'meteor/meteor';
// import AccountsUIWrapper from './AccountsUIWrapper.js';
// import Hello from './Hello.jsx';
// import Info from './Info.jsx';
import A0 from './comps/A0';
import A1 from './comps/A1';
import A2 from './comps/A2';
import A3 from './comps/A3';
import A4 from './comps/A4';
import A5 from './comps/A5';
import A6 from './comps/A6';
import A7 from './comps/A7';

import { withTracker } from 'meteor/react-meteor-data';
import Links from '../api/links';

const pages = [A0, A1, A2, A3, A4, A5, A6, A7]

const App = ({ links = [] }) => {
  let [curPage, setCurPage] = useState(0)
  let Page = pages[curPage]
  return (<div>
    {pages.map((x, i) => (<a onClick={() => setCurPage(i)} style={{margin:10}}>page{i}</a>))}
    <Page />
    <ul>{links.map(link => (<li key={link._id}>{link.title}</li>))}</ul>
  </div>
  )
};

export default InfoContainer = withTracker(() => {
  Meteor.subscribe('links');
  return {
    links: Links.find().fetch(),
  };
})(App);
