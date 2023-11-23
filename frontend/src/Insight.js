import React from 'react';
import DenseTable from './Table';
import Status from './status';
import VersionTable from './version';

const Insight = () => {
  return (
    <div>
           <br></br>
      <Status/>
      <br></br>
      <br></br>
      <br></br>
      <VersionTable/>
      <br></br>
      <br></br>
      <div className="Frame290412">
      <div className="Frame290411">
        <div className="PermissionManagement">Release details</div>
      </div>
    </div>
    <br></br>
    <br></br>
      <DenseTable/>
      <div className="Frame290412">
      <div className="Frame290411">
        <div className="PermissionManagement">Key Highlights</div>
      </div>
    </div>
    <br></br>
    <br></br>
      <DenseTable/>
      <div className="Frame290412">
      <div className="Frame290411">
        <div className="PermissionManagement">Risk Tracker</div>
      </div>
    </div>
    <br></br>
    <br></br>
      <DenseTable/>
      <div className="Frame290412">
      <div className="Frame290411">
        <div className="PermissionManagement">Feature Status</div>
      </div>
    </div>
    <br></br>
    <br></br>
      <DenseTable/>
      <div className="Frame290412">
      <div className="Frame290411">
        <div className="PermissionManagement">Defect Trend</div>
      </div>
    </div>
    <br></br>
    <br></br>
      <DenseTable/>
      <DenseTable/>
      <div className="Frame290412">
      <div className="Frame290411">
        <div className="PermissionManagement">QA test execution data</div>
      </div>
    </div>
    <br></br>
    <br></br>
      <DenseTable/>
    </div>
  );
};

export default Insight;