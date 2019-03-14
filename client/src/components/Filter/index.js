import React, { Component } from 'react'


export default class Filter extends Component {


  render() {
  

    return (


        <div>
             <div className="col-md-2 col-md-pull-10">
              <div className="sidebar">
                <div className="side">
                  <h2>Categories</h2>
                  <div className="fancy-collapse-panel">
                    <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                    <div className="panel panel-default">
                        <div className="panel-heading" role="tab" id="headingOne">
                          <h4 className="panel-title">
                          <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="false" aria-controls="collapseOne">All
                            
                            </a>
                        
                          </h4>
                        </div>
                        <div id="collapseOne" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">
                          <div className="panel-body">
                            <ul>
                            <li><a onClick={() => this.props.filters('random')}>Random</a></li>
                            <li><a onClick={() => this.props.filters('more')}>Load More</a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="panel panel-default">
                        <div className="panel-heading" role="tab" id="headingTwo">
                          <h4 className="panel-title">
                            <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Kitchen
                            </a>
                          </h4>
                        </div>
                        <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                          <div className="panel-body">
                            <ul>
                            <li><a onClick={() => this.props.filters('cup')}>Cups</a></li>
                            <li><a onClick={() => this.props.filters('fork')}>Forks</a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="panel panel-default">
                        <div className="panel-heading" role="tab" id="headingThree">
                          <h4 className="panel-title">
                            <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Electronics
                            </a>
                          </h4>
                        </div>
                        <div id="collapseThree" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                          <div className="panel-body">
                            <ul>
                              <li><a onClick={() => this.props.filters('new')}>New</a></li>
                              <li><a onClick={() => this.props.filters('used')}>Used</a></li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="panel panel-default">
                        <div className="panel-heading" role="tab" id="headingFour">
                          <h4 className="panel-title">
                            <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseFour" aria-expanded="false" aria-controls="collapsFour">Toys
                            </a>
                          </h4>
                        </div>
                        <div id="collapseFour" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFour">
                          <div className="panel-body">
                            <ul>
                              <li><a onClick={() => this.props.filters('figure')}>Figurines</a></li>
                              <li><a onClick={() => this.props.filters('other')}>Other</a></li>
                            </ul>
                          </div>
                        </div>
                      </div>

                    

                    </div>
                  </div>
                </div>
                {/* <div className="side">
                  <h2>Price Range</h2>
                  <div className="form-check">
                         <input className="form-check-input" type="radio" name="filter" id="all" value="all"
                            checked={this.props.selected1}  onChange={() => this.props.reLoadAllProducts()}  />
                        <label className="form-check-label" htmlFor="exampleRadios1">
                            All
                        </label> 
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="filter" id="under" value="lessThan"
                           checked={this.props.selected2} onChange={() => this.props.lessThan()}   />
                        <label className="form-check-label" htmlFor="exampleRadios1">
                            Under $100
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="filter" id="over" value="greatThan"  
                         checked={this.props.selected3} onChange={() => this.props.greatThan()}
                        />
                        <label className="form-check-label" htmlFor="exampleRadios2">
                            Over $100
                        </label>
                    </div>
                </div> */}
              
                {/* <div className="side">
                  <h2>Size</h2>
                  <div className="size-wrap">
                    <p className="size-desc">
                      <a href="#" className="size size-1">xs</a>
                      <a href="#" className="size size-2">s</a>
                      <a href="#" className="size size-3">m</a>
                      <a href="#" className="size size-4">l</a>
                      <a href="#" className="size size-5">xl</a>
                      <a href="#" className="size size-5">xxl</a>
                    </p>
                  </div>
                </div> */}

              </div>
            </div>
        </div>
      
    )
  }
}