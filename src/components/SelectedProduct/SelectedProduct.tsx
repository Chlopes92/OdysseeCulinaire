import React, { Component } from 'react'; 
import styles from './SelectedProduct.module.css';




export class SelectedProduct extends Component {
  static propTypes = {}

  render() {
    return (
      <div className={styles.rond}>
        <img src="/image/icons/check.png" alt="Check Icon" />
      </div> 
    );
  }
}

export default SelectedProduct;

