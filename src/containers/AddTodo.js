import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

let AddTodo = (store) => {
    let input;

    const onSubmit = e => {
        e.preventDefault();
        if (!input.value.trim()) {
            return;
        }
        store.dispatch(addTodo(input.value));
        input.value = '';
    };

    const onRef = node => {
        input = node;
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input ref={onRef} />
                <button type="submit">
                    Add Todo
                </button>
            </form>
        </div>
    )
};
AddTodo = connect()(AddTodo);

export default AddTodo;

/*class AddTodo extends React.Component{
    constructor({ dispatch }){
        super();
        this.state = {
            dispatch: dispatch,
            input: "",
        };
    }
    submit = (e) => {
        e.preventDefault();
        if (!this.state.input.trim()) {
            return;
        }
        this.state.dispatch(addTodo(this.state.input));
        this.setState({input: ''});
    };
    render(){
        return (
            <div>
                <form onSubmit={this.submit}>
                    <input onChange={ e => {
                        this.setState({input: e.target.value});
                    }} />
                    <button type="submit">
                        Add Todo
                    </button>
                </form>
            </div>
        )
    }
}
const result = connect()(AddTodo);
export default result;
/**/