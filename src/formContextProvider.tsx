import React, { createContext, useState, ReactNode, useContext } from 'react';

export interface formSummaryProps {
  firstName: string;
  middleName: string;
  lastName: string;
  preferredName: string;
  email: string;
  address: string;
  cityTown: string;
  state: string;
  zipcode: string;
  cardNumber: string;
  expDate: string;
  ccv: string;
  billingAddress: string;
  billingCityTown: string;
  billingState: string;
  billingZipCode: string;
}

interface formSummaryContextProps {
  formSummary: formSummaryProps;
  setFormSummary: React.Dispatch<React.SetStateAction<formSummaryProps>>;
}

const FormSummaryContext = createContext<formSummaryContextProps | undefined>(
  undefined
);

const FormSummaryProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [formSummary, setFormSummary] = useState<formSummaryProps>({
    firstName: '',
    middleName: '',
    lastName: '',
    preferredName: '',
    email: '',
    address: '',
    cityTown: '',
    state: '',
    zipcode: '',
    cardNumber: '',
    expDate: '',
    ccv: '',
    billingAddress: '',
    billingCityTown: '',
    billingState: '',
    billingZipCode: '',
  });

  return (
    <FormSummaryContext.Provider value={{ formSummary, setFormSummary }}>
      {children}
    </FormSummaryContext.Provider>
  );
};

const useFormSummaryContext = () => {
  const context = useContext(FormSummaryContext);
  if (!context) {
    throw new Error('useFormSummaryContext must be used within a FormProvider');
  }
  return context;
};

export { FormSummaryProvider, useFormSummaryContext };
