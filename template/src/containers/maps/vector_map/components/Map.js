import React, {PureComponent} from 'react';
import {Card, CardBody, Col} from 'reactstrap';
import ReactHighmaps from 'react-highcharts/ReactHighmaps.src';
import maps from './world';
import data from './world-population-density';

//you can find all options here: https://api.highcharts.com/highmaps/global

const config = {
  chart: {
    spacingBottom: 20,
    backgroundColor: 'transparent',
    style: {
      fontFamily: '\'Roboto\', sans-serif',
      height: '500px'
    }
  },
  
  mapNavigation: {
    enabled: true,
    buttonOptions: {
      verticalAlign: 'bottom',
      theme: {
        fill: 'transparent',
        'stroke-width': 1,
        r: 0,
      },
      style: {
        color: '#999999'
      }
    }
  },
  
  exporting: {
    allowHTML: true
  },
  
  title: {
    style: {'display': 'none'}
  },
  
  legend: {
    enabled: false
  },
  
  plotOptions: {
    map: {
      joinBy: ['iso-a2', 'code'],
      mapData: maps
    }
  },
  
  tooltip: {
    headerFormat: 'Population density',
    colorBackground: '#ffffff',
    borderWidth: 0,
    shadow: false,
    borderRadius: 0,
    useHTML: true,
    pointFormat: '<br><span class=\'f32\'><span class=\'flag {point.flag}\'></span></span>' +
    '{point.name}: <b>{point.value}</b>/km²'
  },
  
  colorAxis: {
    min: 1,
    max: 1000,
    type: 'logarithmic'
  },
  
  series: [{
    data: data,
    states: {
      hover: {
        color: '#4ce1b6'
      }
    }
  }]
};

export default class Map extends PureComponent {
  render() {
    return (
      <Col md={12} lg={12}>
        <Card>
          <CardBody>
            <div className='card__title'>
              <h5 className='bold-text'>Vector world map</h5>
            </div>
            <ReactHighmaps config={config}/>
          </CardBody>
        </Card>
      </Col>
    )
  }
}