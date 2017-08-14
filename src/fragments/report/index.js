import React from 'react';
import { Columns, Column, Tile } from 'src/grid';
import { Card } from 'src/components/Card';
import { Button, Title, Gauge, Icon } from 'src/elements';
import { Nav, NavLeft, NavRight } from 'src/components/Nav';
import { Tabs, TabList, Tab, TabLink } from 'src/components/Tabs';
import Chart from './chart';
import './report.scss';


class Report extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      height: '100%',
      innerHeight: '100%',
      innerWidth: 100,
    };
  }

  onDrop(accepted, rejected) {
    console.log(accepted);
  }

  componentWillMount() {
    if (this.props.report === null) {
      this.props.history.push('/dashboard/upload/');
    }
  }

  componentDidMount() {
    const height = this.divElement.clientHeight;
    const width = this.divElement.clientWidth;
    this.setState({ innerheight: (height - ((height * 0.0566219282) + 70)), height, innerWidth: (width - ((width * 0.098026) + 20))  });
  }

  renderPhyscial(height, weight) {

    const bmi = weight/(height/100*height/100);
    const bmiStyle = {
      color: 'black',
    };

    if (bmi < 18.5) {
      bmiStyle.color = '#5de5eb';
    } else if (bmi >= 18.5 && bmi < 24.9) {
      bmiStyle.color = '#38d8a2';
    } else if (bmi >= 24.9 && bmi <= 29.9) {
      bmiStyle.color = '#ffe15c';
    } else {
      bmiStyle.color = '#ff7088';
    }
    return (
      <div className="mb_15">
        <Title isSize={4} className="subtitle">PHYSICAL EXAMINATION</Title>
        <Columns isCentered>
          <Column isSize={3}>
            <span className="fw9">Height: </span>
          </Column>
          <Column isSize={3}>
            <span > {height} cms</span>
          </Column>
          <Column isSize={6} />
        </Columns>
        <Columns isCentered>
          <Column isSize={3}>
            <span className="fw9">Weight: </span>
          </Column>
          <Column isSize={3}>
            <span > {weight} kgs</span>
          </Column>
          <Column isSize={6} />
        </Columns>
        <Columns isCentered>
          <Column isSize={3}>
            <span style={bmiStyle}>BMI: </span>
          </Column>
          <Column isSize={3}>
            <span style={bmiStyle}> {bmi.toFixed(2)} </span>
            <span></span>
          </Column>
          <Column isSize={6}>
            <Columns isCentered>
              <Column>
                <span style={{ height: 24, borderRadius: '50%', width: 24, background: '#ff7088', display: 'inline-block', marginRight: 8}}>&nbsp;</span>
                <span>Obesity</span>
              </Column>
              <Column>
                <span style={{ height: 24, borderRadius: '50%', width: 24, background: '#ffe15c', display: 'inline-block', marginRight: 8 }}>&nbsp;</span>
                <span>Overweight</span>
              </Column>
            </Columns>
          </Column>
        </Columns>
        <Columns isCentered>
          <Column isSize={3} />
          <Column isSize={3} />
          <Column isSize={6}>
            <Columns isCentered>
              <Column>
                <span style={{ height: 24, borderRadius: '50%', width: 24, background: '#38d8a2', display: 'inline-block', marginRight: 8}}>&nbsp;</span>
                <span>Normal weight</span>
              </Column>
              <Column>
                <span style={{ height: 24, borderRadius: '50%', width: 24, background: '#5de5eb', display: 'inline-block', marginRight: 8 }}>&nbsp;</span>
                <span>Underweight</span>
              </Column>
            </Columns>
          </Column>
        </Columns>
      </div>
    );
  }

  renderInvestigations(array) {
    console.log(array);
    return (
      <div>
        <Title isSize={4} className="subtitle">CARDIOVASCULAR EXAMINATION</Title>
        <Tile isParent className="pa_0">
          {array.map((el, ind) => (
                <Tile isChild key={ind * 10} render={
                    props => (
                        <div {...props}>
                            <div className="svgContain">
                              <Gauge label={el.name} displayValue={el.value} value={el.max ? (el.value / el.max * 100 / 2) : el.min ? (el.value / el.max * 100 / 2) : 50 } color={el.type === 'HIGH' ? '#ff7088' : el.type === 'LOW' ? '#5de5eb' : '#38d8a2'} />
                            </div>
                        </div>
                    )
                } />
          ))}
        </Tile>
      </div>
    )
  }

  render() {
    let dropzoneRef = null;
    const { index } = this.state;
    return (
      <Card className="customCard">
        <Columns isGapless className="report">
          <div className="leftContent">
            <Nav className="pv_12 ph_15 nav">
              <NavLeft>
                <Button className="is-primary" onClick={() => {this.props.history.push('/dashboard/upload/')} }>Back</Button>
              </NavLeft>
              <NavRight>
                <Button onClick={() => { if (this.state.index > 0) { this.setState({ ...this.state,  index: (this.state.index -= 1) }) } } }>{'<'}</Button>
                <span className="mh_05">{ (this.state.index + 1) + '/' + (this.props.report ? this.props.report.length : 0) }</span>
                <Button onClick={() => { if (this.state.index < this.props.report.length - 1) { this.setState({ ...this.state,  index: (this.state.index += 1) }) } } }>{'>'}</Button>
              </NavRight>
            </Nav>
            <div className=" mv_12 pv_12 ph_15">
              <div className="fw9">Mr. XYZ</div>
              <div className="pb_02 mb_12 bb_1"><span className="fw9">{this.props.report ? this.props.report[index].age : null}</span> years old, <span className="fw9">{this.props.report ? this.props.report[index].gender : null}</span></div>
              <div className="ttu pb_02 mb_12 bb_1">Apollo PERSONALIZED HEALTH CHECK</div>
              <div className="mb_02"><span className="fw9">MRN: </span><span>{this.props.report ? this.props.report[index].mrn : null}</span></div>
              <div className="mb_12 pb_02 bb_1"><span className="fw9">VISIT NUMBER: </span><span>{this.props.report ? this.props.report[index].visitNumber : null}</span></div>
              <div className="mb_02"><span className="fw9">DATE OF CHECK UP: </span><span>{this.props.report ? this.props.report[index].dot: null}</span></div>
              <div className="mb_12 pb_02"><span className="fw9">EXAMINED BY: </span><span></span>Dr. ABC</div>
            </div>
          </div>
          <div className="rightContent" ref={ (divElement) => this.divElement = divElement }>
            <Nav className="mb_15">
              <NavLeft>
                <Title className="mb_0">Medical Report</Title>
              </NavLeft>
              <NavRight>
              <Tabs className="is-apollo">
                <TabList>
                    <Tab isActive>
                        <TabLink>
                            <Icon isSize='small'><span className='fa fa-laptop' aria-hidden='true' /></Icon>
                            <span>WEB VERSION</span>
                        </TabLink>
                    </Tab>
                    <Tab>
                        <TabLink>
                            <Icon isSize='small'><span className='fa fa-file' aria-hidden='true' /></Icon>
                            <span>PDF VERSION</span>
                        </TabLink>
                    </Tab>
                </TabList>
              </Tabs>
              </NavRight>
            </Nav>
            <div style={{ minHeight: `${this.state.innerheight}px` }} className="content">
              {this.renderPhyscial(this.props.report ? this.props.report[index].height : 0, this.props.report ? this.props.report[index].weight : 0)}
              {this.renderInvestigations(this.props.report ? this.props.report[index].cardioVascular : [])}
              <div className="chart">
                <div className="header">Heart Rate <span className="dummy">(dummy)</span></div>
                <Chart width={this.state.innerWidth} index={this.state.index} />
              </div>
            </div>
          </div>
        </Columns>
      </Card>
    );
  }
}

export default Report;

// <Iframe url="http://bhgp.bayviewhotels.com/application/files/3714/6768/5143/demo.pdf"
//         display="initial"
//         position="relative"
//         allowFullScreen />
