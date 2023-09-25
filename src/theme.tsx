import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiAutocomplete: {
      styleOverrides: {
        root: {
          '& .MuiInputBase-root': {
            '& fieldset': {
              borderColor: 'var(--color-gray)',
            },
            '&:hover fieldset': {
              borderColor: 'white',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'white',
            },
          },
          '& .MuiAutocomplete-inputRoot': {
            '& .MuiAutocomplete-input': {
              color: 'white',
              '& .Mui-disabled::placeholder': {
                color: 'var(--color-gray)',
              },
            },
          },
          '& .MuiAutocomplete-listbox': {
            '& .MuiAutocomplete-option': {
              color: 'white',
            },
          },
          '& .MuiAutocomplete-clearIndicator, & .MuiAutocomplete-popupIndicator': {
            color: 'white',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          color: 'white',
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        contained: {
          fontSize: '13px',
        },
      },
    },
  },
});

export default theme;
