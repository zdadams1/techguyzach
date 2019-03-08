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
                          <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Kitchen
                            
                            </a>
                        
                          </h4>
                        </div>
                        <div id="collapseOne" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">
                          <div className="panel-body">
                            <ul>
                              <li><a href="#">Cups</a></li>
                              <li><a href="#">Forks</a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="panel panel-default">
                        <div className="panel-heading" role="tab" id="headingTwo">
                          <h4 className="panel-title">
                            <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Electronics
                            </a>
                          </h4>
                        </div>
                        <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                          <div className="panel-body">
                            <ul>
                              <li><a href="#">New</a></li>
                              <li><a href="#">Used</a></li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="panel panel-default">
                        <div className="panel-heading" role="tab" id="headingTwo">
                          <h4 className="panel-title">
                            <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Toys
                            </a>
                          </h4>
                        </div>
                        <div id="collapseThree" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                          <div className="panel-body">
                            <ul>
                              <li><a href="#">Balls</a></li>
                              <li><a href="#">Cars</a></li>
                            </ul>
                          </div>
                        </div>
                      </div>

                    

                    </div>
                  </div>
                </div>
                <div className="side">
                  <h2>Price Range</h2>
                  <div className="form-check">
                        <input className="form-check-input" type="radio" name="filter" id="all" defaultValue="option1"
                            defaultChecked onChange={() => this.props.loadProducts()}  />
                        <label className="form-check-label" htmlFor="exampleRadios1">
                            All
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="filter" id="under" defaultValue="option2"
                           onChange={() => this.props.lessThan()}   />
                        <label className="form-check-label" htmlFor="exampleRadios1">
                            Under $100
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="filter" id="over" defaultValue="option3"  
                        onChange={() => this.props.greatThan()}
                        />
                        <label className="form-check-label" htmlFor="exampleRadios2">
                            Over $100
                        </label>
                    </div>
                </div>
              
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