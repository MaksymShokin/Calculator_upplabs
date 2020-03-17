export const SAVE_FORM_OPTION = 'SAVE_FORM_OPTION';
export const RESET_FORM = 'RESET_FORM';

export const saveFormOption = (field, value) => {
  return {
    type: SAVE_FORM_OPTION,
    field: field,
    value: value
  };
};

export const resetForm = () => {
  return {
    type: RESET_FORM
  }
};
