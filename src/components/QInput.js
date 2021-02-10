import React from 'react';
import PropTypes from 'prop-types';
import { FormFeedback, FormGroup, Input, Label } from 'reactstrap';

QInput.defaultProps = {
  type: 'text',
  label: '',
  placeholder: '',
  disabled: false
};

QInput.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool
};

function QInput(props) {
  const { field, form, type, label, placeholder, disabled } = props;
  const { name } = field;
  const { errors, touched } = form;

  const isError = errors[name] && touched[name];

  return (
    <FormGroup>
      {label && <Label for={name}>{label}</Label>}
      <Input
        id={name}
        {...field}
        type={type}
        invalid={isError}
        disabled={disabled}
        placeholder={placeholder}
      />
      {isError && <FormFeedback>{errors[name]}</FormFeedback>}
    </FormGroup>
  );
}

export default QInput;
