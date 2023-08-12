
import React, { Component } from 'react'
import SelectedProduct from '../SelectedProduct/SelectedProduct';
import style from './Customisation.module.css'

export class Customisation extends Component {
  static propTypes = {}

  render() {
    return (
      <div className={style.container}>
      
      <SelectedProduct />
      </div>
    )
  }
}

export default Customisation