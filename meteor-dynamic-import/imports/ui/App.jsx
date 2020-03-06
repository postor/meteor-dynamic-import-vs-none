import React, { useState } from 'react';
import { Meteor } from 'meteor/meteor';
// import AccountsUIWrapper from './AccountsUIWrapper.js';
// import Hello from './Hello.jsx';
// import Info from './Info.jsx';
// import A0 from './comps/A0';
// import A1 from './comps/A1';
// import A2 from './comps/A2';
// import A3 from './comps/A3';
// import A4 from './comps/A4';
// import A5 from './comps/A5';
// import A6 from './comps/A6';
// import A7 from './comps/A7';

import { withTracker } from 'meteor/react-meteor-data';
import Links from '../api/links';

const App = ({ links = [] }) => {
  let [curPage, setCurPage] = useState(0)
  let [pages, setPages] = useState([null,null,null,null,null,null,null])
  if (!pages[curPage]) {
    switch (curPage) {
      case 1: {
        import('./comps/A1').then(Page => {
          let arr = pages.concat()
          arr[curPage] = Page.default
          setPages(arr)
        })
      }
        break;
      case 2: {
        import('./comps/A2').then(Page => {
          let arr = pages.concat()
          arr[curPage] = Page.default
          setPages(arr)
        })
      }
        break;
      case 3: {
        import('./comps/A3').then(Page => {
          let arr = pages.concat()
          arr[curPage] = Page.default
          setPages(arr)
        })
      }
        break;
      case 4: {
        import('./comps/A4').then(Page => {
          let arr = pages.concat()
          arr[curPage] = Page.default
          setPages(arr)
        })
      }
        break;
      case 5: {
        import('./comps/A5').then(Page => {
          let arr = pages.concat()
          arr[curPage] = Page.default
          setPages(arr)
        })
      }
        break;
      case 6: {
        import('./comps/A6').then(Page => {
          let arr = pages.concat()
          arr[curPage] = Page.default
          setPages(arr)
        })
      }
        break;
      case 7: {
        import('./comps/A7').then(Page => {
          let arr = pages.concat()
          arr[curPage] = Page.default
          setPages(arr)
        })
      }
        break;
      default: {
        import('./comps/A0').then(Page => {
          let arr = pages.concat()
          arr[curPage] = Page.default
          setPages(arr)
        })
      }
        break
    }
    return (<div>loading...</div>)
  }
  let Page = pages[curPage]
  return (<div>
    {pages.map((x, i) => (<a key={i} onClick={() => setCurPage(i)} style={{ margin: 10 }}>page{i}</a>))}
    <Page />
  </div>
  )
};

export default InfoContainer = withTracker(() => {
  Meteor.subscribe('links');
  return {
    links: Links.find().fetch(),
  };
})(App);
