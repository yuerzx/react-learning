'use strict'
import React, { Component, PropTypes } from 'react'

const store = { firstName: '', lastName: '',  'point': '' }

const F1Qs = [
  {"Qs": "Age 18 ~ 25 years", "point": 15},
  {"Qs": "Age 26 ~ 30 years", "point": 5},
  {"Qs": "Age 31 ~ 35 years", "point": 45},
  {"Qs": "Age 36 ~ 45 years", "point": 65},
]

var QsItems = React.createClass({
  // propTypes : {
  //   qsText : React.PropTypes.string,
  //   qsPoint : React.PropTypes.number,
  // },

  render: function(){
    return(
        <div className="row">
          <div className="col-md-8">
            {this.props.text}
          </div>
          <div className = "col-md-4">
            <div className="checkbox">
              <label>
                <input type="checkbox" />
              </label>
            </div>
          </div>
        </div>
    )
  }

});

function listItems(qsText){
  return(
    <div className="row">
      <div className="col-md-8">
        In Case nothin here
        {qsText.text}
      </div>
      <div className = "col-md-4">
        <div className="checkbox">
          <label>
            <input type="checkbox" />
          </label>
        </div>
      </div>
    </div>
  )
}

const StepOne = React.createClass ({
    getInitialState() {
        return store
    },
    
    handleFirstNameChanged(event) {
      store.firstName = event.target.value
      this.setState(store)  
    },
    
    handleLastNameChanged(event) {
      store.lastName = event.target.value
      this.setState(store)  
    },


    
    render() {
        return (
        <div>
          {
            F1Qs.map((data, key)=>{
              return (
                  <QsItems text = {data.Qs} key={key} />
              )
            })
          }

        </div>
        )
    }
})

export { StepOne }
