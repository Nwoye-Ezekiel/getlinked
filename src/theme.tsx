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
          background:
            'linear-gradient(to left, #903aff 0%, #d434fe 56.42%, #ff26b9 99.99%, #fe34b9 100%)',
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
