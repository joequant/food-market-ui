import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './BuyProduct.scss';
import Label from '../../../../generic/Label/Label';
import AttributeValueFieldContainer
  from '../../../containers/AttributeValueFieldContainer/AttributeValueFieldContainer';
import InputField from '../../../../generic/InputField/InputField';
import Button from '../../../../generic/Button/Button';

class BuyProduct extends Component {

  constructor(props) {
    super(props);
    this.state = {
      amount: 1,
    };
  }

  static propTypes = {
    onBuy: PropTypes.func.isRequired,
    offer: PropTypes.shape({
      pricePerUnit: PropTypes.number,
      pricePerPackage: PropTypes.number,
      packageWeight: PropTypes.number,
    }),
  };

  onBuy() {
    this.props.onBuy(this.props.offer, this.state.amount);
  }

  onAmountChange(label, state) {
    this.setState({
      [label]: state.value,
    });
  }

  render() {
    const summary = [
      {
        field: 'Price',
        value: `€ ${this.props.offer.pricePerUnit && this.props.offer.pricePerUnit.toFixed(this.props.decimals)} /kg`,
      },
      {
        field: 'Price per package',
        value: `€${this.props.offer.pricePerPackage.toFixed(this.props.decimals)}`,
      },
      {
        field: 'Per package',
        value: `${this.props.offer.packageWeight.toFixed(this.props.decimals)} kg`,
      },
    ];

    return (<div>
      <Label className={styles.title} text='Buy product'/>
      <AttributeValueFieldContainer options={summary} className={styles.requirements}/>
      <div>
        <InputField text='Packages'
                    label="amount"
                    value={this.state.amount}
                    onChange={this.onAmountChange.bind(this)}/>
        <Button className={styles.button} onClick={this.onBuy.bind(this)}>Buy product</Button>
      </div>
    </div>);
  }
}

export default BuyProduct;
