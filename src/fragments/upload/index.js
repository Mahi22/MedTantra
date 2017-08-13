import React from 'react';
import { connect } from "react-redux";
import Dropzone from 'react-dropzone';
import axios from 'axios';
import {CSVLink, CSVDownload} from 'react-csv';
import { Columns, Column } from 'src/grid';
import { Card } from 'src/components/Card';
import { Button, Title } from 'src/elements';
import './upload.scss';

const csvData = [
  ['BP_SYSTOLIC', 'BP_DIASTOLIC'] ,
];


// Redux action
function uploadSuccess({ data }) {
  console.log(data);
  return {
    type: 'UPLOAD_DOCUMENT_SUCCESS',
    data,
  };
}

function uploadFail(error) {
  return {
    type: 'UPLOAD_DOCUMENT_FAIL',
    error,
  };
}

function uploadStart() {
  return {
    type: 'UPLOAD_DOCUMENT_SUBMIT'
  };
}


function uploadDocumentRequest({ file, name, history }) {
  let data = new FormData();
  data.append('file', file);
  data.append('name', name);
  data.append('customer', 'customer1');

  return (dispatch) => {
    axios.post(' http://localhost:4000/files', data)
      .then(response => {
        console.log(response);
        dispatch(uploadSuccess(response));
        history.push('/dashboard/report/');
      })
      .catch(error => dispatch(uploadFail(error)));
  };
}

@connect()
class Upload extends React.Component {

  constructor(props) {
    super(props);
  }

  onDrop(accepted, rejected) {
    if (accepted.length > 0) {
      this.props.dispatch(uploadDocumentRequest({
        file: accepted[0],
        name: 'Medi CSV',
        history: this.props.history
      }));
    }
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
                <Button className="is-primary button" onClick={() => { dropzoneRef.open() }}>Upload File</Button>
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


// let timer = null;
// let complete = null;
//
// if (this.props.upload.type === 'LOADING') {
//   timer = setInterval(() => {
//     complete = complete + 1;
//   }, .11)
// } else if (this.props.upload.type === 'SUCCESS' && timer !== null) {
//   clearInterval(timer);
//   timer = null;
//   // complete = null;
// }
