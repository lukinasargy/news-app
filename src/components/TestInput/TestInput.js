import React, {Component} from 'react';

class TestInput extends  Component {

    constructor(props) {
        super(props);
        this.inputEl = React.createRef()
        //uncontrolled component
    };

    // onChangeHandler = (e) => {
    //     this.setState({
    //         value: e.currentTarget.value
    //     });
    // };
componentDidMount() {
    this.inputEl.current.focus();
}

    onSubmitHandler = () => {
        alert(this.inputEl.current.value)
    };


    render() {
        return (
            <div>
                <input
                    // onChange={this.onChangeHandler}
                    type="text"
                    className="test-input"
                    defaultValue=''
                    placeholder={"введите значение"}
                    ref={this.inputEl}
                />
                < button type="submit" onClick={this.onSubmitHandler}>Submit</button>
            </div>

        );
    }

}

export default TestInput;