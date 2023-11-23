import React from 'react';


const VersionTable = () => {
  return (
    <div className="DivTableColumn_version">
      <div className="Table_version">
        <div className="Row_version">
          <div className="Data_version">
            <div className="CurrentReleaseVersion">Current Release Version</div>
          </div>
          <div className="Frame290414_version">
            <div className="DataInQa_version">2.1.0</div>
          </div>
        </div>
        <div className="Body_version">
          <div className="Row_version">
            <div className="Data_version">
              <div className="CurrentStage">Current Stage</div>
            </div>
            <div className="Frame290414_version">
              <div className="DataInQa_version">In QA</div>
            </div>
          </div>
        </div>
        <div className="Body_version">
          <div className="Row_version">
            <div className="Data_version">
              <div className="NextMilestone">Next Milestone</div>
            </div>
            <div className="Frame290414_version">
              <div className="DataInQa_version">Dev-QA Code Freeze 13th Oct 2023</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VersionTable;