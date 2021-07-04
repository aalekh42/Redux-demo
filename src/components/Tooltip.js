import React,{Component} from "react";

class Tooltip extends Component{
    constructor(props){
        super(props);
    }
     hello=(user)=>{
        return(
            alert(`Welcome bro!!,${user}`)
        )
    }
    render(){
        const {user}=this.props;
        const welcome=(
            <>
            <div className="Tooltip">
            <div >Welcome</div>
            <button onClick={()=>this.hello(user)}>Hii,Click me {user}</button>
            </div>
            </>
        );
        return(
            <>
            {welcome}
            </>
        );
    }

}

export default Tooltip;