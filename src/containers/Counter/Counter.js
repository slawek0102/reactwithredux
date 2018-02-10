import React, {Component} from 'react';
import {connect} from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    render() {
        return (
            <div>
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter}/>
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        ctr: state.counter
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: ()=> dispatch({type: 'INCREMENT'}),
        onDecrementCounter: ()=> dispatch({type: 'DECREMENT'}),
        onAddCounter: ()=> dispatch({type: 'ADD', value: 5}),
        onSubCounter: ()=> dispatch({type: 'SUB', value: 5}),
    }
};



export default connect(mapStateToProps, mapDispatchToProps)(Counter);