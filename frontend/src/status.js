import React from 'react';


const Status = () => {
    return (
        <div className="Frame290476">
          <div className="Heading1">
            <div className="ProjectStatus">
              <div className="DivLeftColumn">
                  <div className="Heading3">
                       <div className="ProjectStatusTitle">Project Status</div>
                  </div>
              </div>
               <div className="FeatureStatus">
                      <div className="Container">
                          <div className="Inprogress">Yellow</div>
                      </div>
                  </div>
              </div>
              <div className="Row">
                  <div className="Data">
                      <div className="ReportDate">Report Date</div>
                  </div>
                  <div className="Frame290414">
                      <div className="DataInQa">20th Oct 2023</div>
                  </div>
              </div>
          </div>
          <div className="List">
            <div className="Item">
              <div className="GmpArchivalFeatureIsNotCompleteAndInImplementationPhase">
                GMP-Archival feature is not complete and in Implementation phase
              </div>
            </div>
            <div className="Item">
              <div className="Sev2TicketsInOpenStatusAreDelayingQaClosureOnFeatureTestingDevEtaForDefectClosureIs20thOct">
                SEV2 Tickets in open status are delaying QA closure on Feature Testing. DEV ETA for Defect Closure is 20th Oct
              </div>
            </div>
          </div>
        </div>
      );
};

export default Status;


