import React from "react";

function ButtonUser(props){
  return(<button type= {props.type} class="btn btn-primary btn-user btn-block">
    {props.text}
</button>)
}
export default ButtonUser;