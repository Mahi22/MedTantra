import React from 'react';
import Dropzone from 'react-dropzone';
import { Columns, Column } from 'src/grid';
import { Card } from 'src/components/Card';
import { Button } from 'src/elements';
import './upload.scss';

class Upload extends React.Component {
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
        <Columns isGapless className="upload">
          <Dropzone accept={"text/csv"} onDrop={this.onDrop.bind(this)} disableClick ref={(node) => { dropzoneRef = node; }} rejectClassName={"reject"}  className="leftContent ta_r">
            <div className="plusIcon ta_c">
              +
            </div>
            <Columns isCentered className="pv_2 content">
              <Column>
                <Button className="is-apollo button" onClick={() => { dropzoneRef.open() }}>Upload File</Button>
              </Column>
              <Column className="ta_l info">
                OR DRAG AND DROP CSV HERE
              </Column>
            </Columns>
          </Dropzone>
          <div className="rightContent">
            Right Upload
          </div>
        </Columns>
      </Card>
    );
  }
}

export default Upload;
