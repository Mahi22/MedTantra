import React from 'react';
import { Columns, Column } from 'src/grid';
import { Card } from 'src/components/Card';
import { Button, Title, Gauge } from 'src/elements';
import './report.scss';


class Report extends React.Component {
  constructor(props) {
    super(props);
  }

  onDrop(accepted, rejected) {
    console.log(accepted);
  }

  render() {
    let dropzoneRef = null;
    return (
      <Card className="customCard">
        <Columns isGapless className="report">
          <div className="leftContent ta_r">
            <div className="plusIcon ta_c">
              +
            </div>
            <Columns isCentered className="pv_2 content">
              <Column>
                <Button className="is-apollo button">Upload File</Button>
              </Column>
              <Column className="ta_l info">
                OR DRAG AND DROP CSV HERE
              </Column>
            </Columns>
          </div>
          <div className="rightContent">
            <Title className="mb_15">Upload Medical Report</Title>
            <Gauge value={20} width={200} height={120} label="This is my Gauge" />
          </div>
        </Columns>
      </Card>
    );
  }
}

export default Report;
