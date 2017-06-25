import React, { PropTypes } from 'react';
import { actionAddHunter } from '../../actions/actionAddHunter';
import { connect } from 'react-redux';

class SubscribeForm extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = { hunterName: "Sharp Eye", names: [] };
        this.onChangeName = this.onChangeName.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        this.props.dispatch(actionAddHunter(this.state.hunterName));
    }

    onChangeName(event) {
        //event.preventDefault();
        this.setState({ hunterName: event.target.value });
    }

    render() {
        const hunterName = this.state.hunterName;
        const i = 0;
        console.log("SubscribeForm", this.props.names);
        return (
            <form >
                <input type="text"
                    value={hunterName}
                    placeholder="Enter Hunter's name"
                    onChange={this.onChangeName}
                />
                <button type="button" onClick={this.handleSubmit}>Subscribe</button>
                <ul>{
                    this.props.names ?
                        this.props.names.map((name, index) =>
                            <div key={index}>{name}</div>
                        )
                        : "--no names--"

                }</ul>
            </form>
        );
    }
}

SubscribeForm.propTypes = {
    dispatch: PropTypes.func.isRequired,
    hunterName: PropTypes.string,
    names: PropTypes.array
};

const mapStateToProps = (state) => {
    return {
        hunterName: state.hunterReducer.name,
        names: state.hunterReducer.names
    };
};

export default connect(mapStateToProps)(SubscribeForm);