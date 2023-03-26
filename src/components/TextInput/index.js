import React from "react";
import { InputAdornment, TextField } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme)=> (
  {
    inputField: {
      width: '300px',
    },
    input: {
      '&$focused $outline': {
        borderColor: '#7F7EF7 !important',
      },
    },
    focused: {},
    outline: {
      borderRadius: '28px',
      borderColor: '#7F7EF7 !important'
    },
  }
));

const TextInput = (props) => {
  const classes = styles();

  const {
    id = "text-input",
    placeholder = 'input',
    Icon = null,
    ...otherProps
  } = props;

  return (
    <div className="text-input__container">
      <TextField
        id={id}
        className={classes.inputField}
        margin='dense'
        variant='outlined'
        placeholder={placeholder}
        InputProps={{
          classes: {
            root: classes.input,
            focused: classes.focused,
            notchedOutline: classes.outline,
          },
          startAdornment: (
            <InputAdornment position="start"><Icon /></InputAdornment>
          ),
        }}
        {...otherProps}
      />
    </div>
  );
};

export default TextInput;

