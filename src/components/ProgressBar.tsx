import React, { useState } from 'react';
import StageOne from './StageOne';
import StageTwo from './StageTwo';
import StageThree from './StageThree';
import StageFour from './StageFour';
import StageFive from './StageFive';
import { useFormSummaryContext } from '../formContextProvider';

interface ProgressBarProps {
  activeStep: number;
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
  isBillingSame: boolean;
  setIsBillingSame: React.Dispatch<React.SetStateAction<boolean>>;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  activeStep,
  setActiveStep,
  isBillingSame,
  setIsBillingSame,
}) => {
  const { formSummary, setFormSummary } = useFormSummaryContext();

  const nextStep = () => {
    setActiveStep(activeStep + 1);
  };

  const prevStep = () => {
    setActiveStep(activeStep - 1);
  };

  const handleSubmit = () => {};

  const stages = [
    <StageOne />,
    <StageTwo />,
    <StageThree
      isBillingSame={isBillingSame}
      setIsBillingSame={setIsBillingSame}
    />,
    <StageFour />,
    <StageFive />,
  ];

  const stepsArray = [
    { label: 'Info', step: 1 },
    { label: 'Shipping', step: 2 },
    { label: 'Payment', step: 3 },
    { label: 'Summary', step: 4 },
    { label: 'Finish', step: 5 },
  ];

  const progressWidth = (activeStep / (stepsArray.length - 1)) * 95 - 23.75;

  const determineStepClass = (stepIndex: number) => {
    if (stepIndex < activeStep) {
      return 'complete';
    } else {
      return '';
    }
  };

  return (
    <>
      <div className='progress-bar-container'>
        <div
          className='progress-bar'
          style={{
            content: "''",
            position: 'absolute',
            background: '#4a154b',
            height: '12px',
            width: `${progressWidth}%`,
            top: '30%',
            transform: 'translateY(-50%)',
            left: '20px',
            zIndex: 1,
          }}
        />
        {stepsArray.map(({ label, step }, index) => (
          <div className='steps-wrapper' key={index}>
            <div className={`steps ${determineStepClass(index)}`}>
              <div className='step-count'>{step}</div>
            </div>
            <div className='steps-label-container'>
              <p>{label}</p>
            </div>
          </div>
        ))}
      </div>
      <div className='form-content'>
        <div>{stages[activeStep - 1] || null}</div>
      </div>
      <div className='button-container'>
        {activeStep === 5 ? null : (
          <button onClick={prevStep} disabled={activeStep === 1}>
            Previous
          </button>
        )}
        {activeStep === 4 ? <button onClick={nextStep}>Submit</button> : null}
        {activeStep === 5 || activeStep === 4 ? null : (
          <button
            onClick={() => {
              nextStep();
              handleSubmit();
            }}
            disabled={activeStep === stepsArray.length}
          >
            Next
          </button>
        )}
        {activeStep === 5 ? <button>Home</button> : null}
      </div>
    </>
  );
};

export default ProgressBar;
