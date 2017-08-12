import React from 'react';
import { Columns, Column } from 'src/grid';
import { Card } from 'src/components/Card';
import './upload.scss';

const Upload= () => (
  <Card className="customCard">
    <Columns isGapless className="upload">
      <div className="leftContent ta_r">
        <div className="plusIcon ta_c">
          +
        </div>
      </div>
      <div className="rightContent">
        Right Upload
      </div>
    </Columns>
  </Card>
);

export default Upload;
