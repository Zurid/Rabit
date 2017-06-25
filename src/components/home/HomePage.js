import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { moveRabbit } from '../../actions/actionRabbit';


class HomePage extends React.Component {
    constructor(props, context) {
        super(props, constructor);

        //        this.state = { x: 0, y: 0 };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.dispatch(moveRabbit());
    }

    render() {
        return (
            <div className="row">

                <div className="col-md-9">
                    <button className="btn" type="button" onClick={this.handleClick}>MOVE RABBIT</button>
                    <div className="rabbit" style={{
                        top: this.props.x + 'px',
                        left: this.props.y + 'px'
                    }}>
                    </div>
                </div>

                <div className="col-md-3"> Hunters here...

                <ul>{
                        this.props.names ?
                            this.props.names.map((name, index) =>
                                <div key={index}>{name}</div>
                            )
                            : "--no hunters--"

                    }</ul>


                    <h1>Coordinates: x = {this.props.x} y = {this.props.y} </h1>
                </div>
            </div>
        );
    }
}

HomePage.propTypes = {
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    names: PropTypes.array.isRequired,
    dispatch: PropTypes.func
};

function mapStateToProps(state, ownProps) {
    let res = {};
    Object.assign(res, ownProps ? ownProps : {},
        {
            x: state.rabbitReducer.x,
            y: state.rabbitReducer.y,
            names: state.hunterReducer.names
        }
    );
    return res;
}

export default connect(mapStateToProps)(HomePage);
