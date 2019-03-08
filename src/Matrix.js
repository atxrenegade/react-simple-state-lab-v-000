import React, { Component } from 'react';
import Cell from './Cell';
import { defaultGrid } from './defaultGrid'

export default class Matrix extends Component {

  genRow = (vals) => (
    vals.map(val => <div className="cell">
		<Cell />
	</div>)
  )

  genMatrix = () => (
    this.props.values.map(rowVals => <div className="row">{this.genRow(rowVals)}</div>)
  )

  render() {
    return (
      <div id="matrix">
        {this.genMatrix()}

      </div>
    )
  }

}

 Matrix.defaultProps = {values: defaultGrid};
