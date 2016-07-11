/**
*
* QsSelect
*
*/

import React from 'react';
import { steps } from "./signup/index";
import Multistep from "./multisteps";
require("bootstrap-loader");

class QsList extends React.Component {
  render() {
    return (
      <div>
        <Multistep initialStep={1} steps={steps}/>
      </div>
    );
  }
}

export default QsList;
