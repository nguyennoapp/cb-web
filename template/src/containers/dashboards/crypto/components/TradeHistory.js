import React, {PureComponent} from 'react';
import Panel from '../../../../components/Panel';
import Table from '../../../../components/table/Table';

export default class TradeHistory extends PureComponent {
  render() {
    return (
      <Panel xl={4} lg={5} md={12} xs={12} title='Trade History' subhead='Ratings by Market Capitalization'>
        <Table responsive striped>
          <thead>
          <tr>
            <th>Coin</th>
            <th>Cost</th>
            <th>Change%</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td><p className='bold-text dashboard__btc'>BTC</p></td>
            <td>$134,23</td>
            <td>+12,21%</td>
          </tr>
          <tr>
            <td><p className='bold-text dashboard__eth'>ETH</p></td>
            <td>$12,23</td>
            <td>+0,21%</td>
          </tr>
          <tr>
            <td><p className='bold-text dashboard__neo'>NEO</p></td>
            <td>$112,23</td>
            <td>-2,27%</td>
          </tr>
          <tr>
            <td><p className='bold-text dashboard__ste'>STE</p></td>
            <td>$84,23</td>
            <td>-10,01%</td>
          </tr>
          <tr>
            <td><p className='bold-text dashboard__eos'>EOS</p></td>
            <td>$134,23</td>
            <td>$134,23</td>
          </tr>
          <tr>
            <td><p className='bold-text dashboard__lit'>LIT</p></td>
            <td>$94,23</td>
            <td>-1,96%</td>
          </tr>
          </tbody>
        </Table>
      </Panel>
    )
  }
}

