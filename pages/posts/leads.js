import Head from 'next/head';
import React, { Component } from 'react';
import Layout, { siteTitle } from '../../components/layout';
import utilStyles from '../../styles/utils.module.css';
import Link from 'next/link';




class Leads extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        first: '',
        last: '',
        busiName: '',
        busiSec: '',
        info: '',
        date: ''
      };
    
    
    this.handleSubmit   = this.handleSubmit.bind(this);
    this.handleFirst    = this.handleFirst.bind(this);
    this.handleLast     = this.handleLast.bind(this);
    this.handleBusiName = this.handleBusiName.bind(this);
    this.handleBusiSec  = this.handleBusiSec.bind(this);
    this.handleinfo     = this.handleinfo.bind(this);
  }

  handleFirst(event) {
    this.setState({first: event.target.value});
  }

  handleLast(event) {
    this.setState({last: event.target.value})
  }

  handleBusiName(event) {
    this.setState({busiName: event.target.value})
  }

  handleBusiSec(event) {
    this.setState({busiSec: event.target.value})
  }

  handleinfo(event) {
    this.setState({info: event.target.value})
  }

  handleSubmit(event) {
    alert('First: ' + this.state.first + '   Last: ' + this.state.last + '   Busi: ' + this.state.busiName);
    event.preventDefault();
  }

  render() {
    return (
      <Layout branch>
        <form class="row g-3" id="leadsForm" onSubmit={this.handleSubmit} >
          <div class="col-12">
            <h3>Customer Information</h3>
            <br/>
            <br/>
          </div>
          <div class="col-md-6">
            <label for="firstName" class="form-label">First Name</label>
            <input value={this.state.first} onChange={this.handleFirst} class="form-control" type="text"  id="firstName"/>
          </div>
          <div class="col-md-6">
            <label for="lastName" class="form-label">Last Name</label>
            <input value={this.state.last} onChange={this.handleLast} class="form-control" type="text" id="lastName"/>
          </div>
          <div class="col-md-6">
            <label for="busiName" class="form-label">Business Name</label>
            <input value={this.state.busiName} onChange={this.handleBusiName} class="form-control" type="text" id="busiName"/>
          </div>
          <div class="col-md-6">
            <label for="busiSec" class="form-label">Business Sector</label>
            <input value={this.state.busiSec} onChange={this.handleBusiSec} class="form-control" type="text" id="busiSec"/>
          </div>
          <div class="form-group col-12">
            <label for="exampleFormControlTextarea1">Additional Information</label>
            <textarea value={this.state.info} onChange={this.handleinfo} class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
        

      </Layout>
    );
  }
}


export default Leads;
