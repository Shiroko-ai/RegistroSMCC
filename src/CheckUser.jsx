import React from "react";

function CheckUser(props){
    return (
                                  
    <div class="form-group">
        <div class="custom-control custom-checkbox small">
            <input type="checkbox" class="custom-control-input" id={props.id}/>
            <label class="custom-control-label" for={props.id}>{props.label}</label>
        </div>
    </div>);
}

export default CheckUser;