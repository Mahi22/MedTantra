import React from 'react';
import Dropzone from 'react-dropzone';
import {CSVLink, CSVDownload} from 'react-csv';
import { Columns, Column } from 'src/grid';
import { Card } from 'src/components/Card';
import { Button, Title } from 'src/elements';
import './upload.scss';

const csvData = [
  ['firstname', 'lastname', 'email'] ,
  ['Ahmed', 'Tomi' , 'ah@smthing.co.com'] ,
  ['Raed', 'Labes' , 'rl@smthing.co.com'] ,
  ['Yezzi','Min l3b', 'ymin@cocococo.com']
];

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
            <Title className="mb_15">Upload Medical Report</Title>
            <p className="mb_12">For the current demo to showcase functionality we are using mechanism to upload *.csv file and creating reports.</p>
            <p className="mb_12">To download the csv format to test the application <Button className="is-apollo"><CSVLink data={csvData} filename={"csvdata_format.csv"}>Click Here</CSVLink></Button></p>
            <p className="mb_12">To download the &nbsp;demo &nbsp;csv to test the application <Button className="is-apollo"><CSVLink data={csvData} filename={"dummy_csvdata.csv"}>Click Here</CSVLink></Button></p>
          </div>
        </Columns>
      </Card>
    );
  }
}

export default Upload;
