import React, { Component } from 'react';
import Button from '../components/Button'
// import Input from '../components/Input'
class MemberInput extends Component {
 state = {
   $class: '',
   vin: '',
   owner:''
 }
 handleChange = (e) => {
   this.setState({
     [e.target.name]: e.target.value,
   });
 }
 _onSubmit = (e)=>{
    e.preventDefault();
     this.setState ({
       $class:this.state.$class,
       vin: this.state.vin,
       owner:this.state.owner
     });
     const data = {
        $class:this.state.$class,
        vin: this.state.vin,
        owner:this.state.owner
     }
     fetch('http://localhost:3001/api/Vehicle' ,{
       method :'POST',
       headers : {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
       },
       body:JSON.stringify(data)
   })
 }
getVehicle = ()=>{
  fetch('http://localhost:3001/api/Vehicle')
  .then(res=>res.json())
  .then(resData =>{console.log(resData)})
}
 render() {
   return (
       <div>
       <p> 자동차 추가 </p>
     <form onSubmit={this._onSubmit}>
       <input
         placeholder="$class"
         value={"org.acme.vehicle.auction.Vehicle"}
         onChange={this.handleChange}
         name="$class"
       />
       <input
         placeholder="vin"
         value={this.state.vin}
         onChange={this.handleChange}
         name="vin"
       />
       <input
         placeholder="owner"
         value={this.state.owner}
         onChange={this.handleChange}
         name="owner"
       />
       
       <div>{this.state.$class} {this.state.vin} {this.state.owner}</div>
       <Button title ="자동차 추가 "></Button>
     </form>
     <Button title ="자동차 조회 " action = {()=>this.getVehicle()} ></Button>
     </div>
   );
 }
}
export default MemberInput;