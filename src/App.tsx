import React, { useState } from 'react';
import ProgressBar from './components/ProgressBar';
import { FormSummaryProvider } from './formContextProvider';

const App = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [isBillingSame, setIsBillingSame] = useState(false);

  return (
    <FormSummaryProvider>
      <ProgressBar
        activeStep={activeStep}
        setActiveStep={setActiveStep}
        isBillingSame={isBillingSame}
        setIsBillingSame={setIsBillingSame}
      />
    </FormSummaryProvider>
  );
};

export default App;
