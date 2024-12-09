import { formSummaryProps } from './formContextProvider';

const handleFormChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  setFormSummary: React.Dispatch<React.SetStateAction<any>>
) => {
  const { name, value } = e.target;
  setFormSummary((prev: formSummaryProps) => ({
    ...prev,
    [name]: value,
  }));
};

export default handleFormChange;
