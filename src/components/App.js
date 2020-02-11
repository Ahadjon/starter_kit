import React, { Component } from 'react';
import logo from '../logo.png';
import './App.css';
import Web3 from 'web3';
import Authorized from './Authorized';
import Unauthorized from './Unauthorized';

class App extends Component {
  async componentWillMount(){
    await this.loadWeb3()
    await this.fetchAccount()
    await this.checkAuthorization()
  }

  async loadWeb3(){
    if(window.ethereum){
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
    }
    else if(window.web3){
      window.web3 = new Web3(window.web3.currrentProvider)
    } 
    else {
      window.alert("Non ethereum browser detected. You should consider trying Metamask!!!")
    }
   }
   async fetchAccount(){
     const web3 = window.web3
     const accounts = await web3.eth.getAccounts()
     console.log(accounts)
     this.setState({ account: accounts[0]})
   }

   async checkAuthorization(){
    const authorizedAccounts = [
      '0xa05ffb5a6ad77A6922c6b508397EBe67B13d7b48',
      '0x79fC09Cda915fDE0297Ce3fd7738F7c40E73B194',
      '0xcD869cbFB82495e6125bdb9F0101373d98F48769',
      '0x1Aa38c2304A63Da2765990Ed0B227DE932F4e5a0',
      '0x9d62235F0482f6E5859Efe9D8A0719dD5992Fa1D'
    ]
    const authorized = authorizedAccounts.includes(this.state.account)
    this.setState({ authorized })
  }
  constructor(props){
    super(props)
    this.state = {
      account: '',
      authorized: false
    }
  }
  render() {
    let body 
      if(this.state.authorized){
        body =<Authorized account={this.state.account}/>   
      }else{
        body =<Unauthorized account={this.state.account}/>  
      }

    return (
      <div>
        <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
          <a
            className="navbar-brand col-sm-3 col-md-2 mr-0"
            href="http://www.dappuniversity.com/bootcamp"
            target="_blank"
            rel="noopener noreferrer"
          >
            Dapp FINTECH
          </a>
        </nav>
        <div className="container-fluid mt-5">
          <div className="row">
            <main role="main" className="col-lg-12 d-flex text-center">
              <div className="content mr-auto ml-auto">
                {body}
              </div>
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
