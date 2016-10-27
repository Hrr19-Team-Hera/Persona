import React, { Component} from 'react'


export default class Howitworks extends Component {
  render() {
    return (
          <div className='row jumbotron' style={{backgroundColor: 'white'}}>
            <h1 className='display-3' style={{textAlign: 'center'}}>How It Works</h1>
            <a href='#howitworks'></a>
            <div className="col-sm-6 col-md-4">
              <div className="thumbnail">
                <img src="..." alt="..." />
                <div className="caption">
                  <h3>Link your social accounts</h3>
                  <p>Sign up for Persona and have your twitter, facebook, and LinkedLin accounts linked to Persona</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div className="thumbnail">
                <img src="..." alt="..." />
                <div className="caption">
                  <h3>Analyze your personality</h3>
                  <p>Persona's smart robots will look at your posts on social media and run an analysis on your personality and values</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div className="thumbnail">
                <img src="..." alt="..." />
                <div className="caption">
                  <h3>Find true friends</h3>
                  <p>We will then introduce you to other people in your area who share similar personality traits and value systems with you.</p>
                </div>
              </div>
            </div>
          </div>
    )
  }
}