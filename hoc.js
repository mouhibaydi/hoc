import React, { Component } from "react"
import SpinnerComp from "./SpinnerComp"
const Hoc = Component =>{
return( props => {
  return props.isloading ? <SpinnerComp/> :<Component {...props} />;



})}
export default Hoc  