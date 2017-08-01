import React, {Component} from "react";
import {connect} from 'react-redux';
import PropTypes from "prop-types";
import cx from "classnames";
import styles from "./TransactionProgressModal.scss";
import Label from "../../generic/Label/Label";
import {hideModal} from '../../../../redux/actions/ModalAction';

const mapStateToProps = (state) => {
    return {
        state: state.modal,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onConfirm: () => console.log("not yet implemented"),
        onCancel: () => dispatch(hideModal())
    }
};

class TransactionProgressModal extends Component {

    static defaultProps = {
        state: null,
        onCancel: () => {
            console.info('onCancel not defined in ', TransationProgressModal)
        },
        onConfirm: () => {
            console.info('onConfirm not defined in ', TransationProgressModal)
        }
    };

    static propTypes = {
        state: PropTypes.string,
        onCancel: PropTypes.func,
        onConfirm: PropTypes.func,
    };

    render() {
        return <div>
            <div className={cx(styles.modal, this.props.className)}>
                <div className={styles.inner}>
                    <div className={styles.upper}>
                        <Label className={styles.title} text="Operation in progress"/>
                        <img className={styles.spinner} src="./static/images/spinner.svg"/>
                        <div className={styles.description}>This transaction can takes few minutes.</div>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TransactionProgressModal);
