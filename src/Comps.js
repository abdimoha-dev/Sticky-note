import React, { Component } from 'react';

class Comps extends Component{
    constructor(props){
        super(props)
        this.state={
            editing:false
        }
    }

    edit = ()=>{
        this.setState({
            editing: true
        });
    }
    remove = ()=>{
        console.log('remove button')
        var rem=this.state.editing;
    }
    save = ()=>{
        var text=this.refs.textArea.value;
        console.log('new comment '+ text)
       this.setState({
           editing: false
       })
    }

    renderNormal(){
        return(<div>
                <h2>{this.props.children}</h2>
              <button onClick={this.edit}>Click to edit</button>
              <button onClick={this.remove}>Click to remove</button>
            </div>)
    }
    renderForm(){
        return(
        <div>
                <textarea ref="textArea"defaultValue={this.props.children}></textarea>
              <button onClick={this.save} className="button-success">save</button>
            </div>)
    }


    render(){
        if(this.state.editing){
            return (this.renderForm())
    
        }
        else{
            return (this.renderNormal())
        }
    }
}
export default Comps;