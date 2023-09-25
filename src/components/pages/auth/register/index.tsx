import ManOnComputer from 'assets/images/man-on-computer.png';
import { ReactComponent as ManAndWomanWalking } from 'assets/icons/man-and-woman-walking.svg';
import { ReactComponent as WinkEmoji } from 'assets/icons/wink-emoji.svg';
import Congratulations from 'assets/images/congratulation.png';
import {
  // Alert,
  Autocomplete,
  Checkbox,
  CircularProgress,
  Dialog,
  DialogContent,
  TextField as MUITextField,
} from '@mui/material';
import Button from 'components/button';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useEffect, useState } from 'react';
import TextField from 'components/text-filed';
import { CheckBox, CheckBoxOutlineBlankOutlined } from '@mui/icons-material';
import { useCategories } from 'data';
import ErrorFallback from 'components/error-fallback';
import { registerUser } from 'apis/registration';

const validationSchema = yup.object().shape({
  team_name: yup.string().required('Enter your team name'),
  phone: yup.string().required('Enter your phone number'),
  email: yup.string().required('Enter your email'),
  project_topic: yup.string().required('Enter your project topic'),
  category: yup.string().required('Enter your category'),
  group_size: yup.string().required('Enter your group size'),
});

const Register = () => {
  // const [error, setError] = useState('');
  const [privacyPolicyAccepted, setPrivacyPolicyAccepted] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const { data: categories, isLoading, isError, refetch } = useCategories();

  const handleSubmit = async (values: any, resetForm: () => void) => {
    try {
      // setError('');
      await registerUser({
        email: values.email,
        phone_number: values.phone,
        team_name: values.team_name,
        group_size: Number(values.group_size),
        project_topic: values.project_topic,
        category: categories?.find((category) => category.name === values.category)?.id ?? 1,
        privacy_poclicy_accepted: privacyPolicyAccepted,
      });
      setShowSuccessModal(true);
      setPrivacyPolicyAccepted(false);
      resetForm();
    } catch (error: any) {
      // setError(error.message);
    }
  };

  useEffect(() => {
    const layoutElement = document.getElementById('layout');
    if (showSuccessModal && layoutElement) {
      layoutElement.style.opacity = '0.1';
    } else if (layoutElement) {
      layoutElement.style.opacity = '1';
    }
  }, [showSuccessModal]);

  return (
    <div className="pt-5 pb-16 lg:pt-5 lg:pb-20">
      {isLoading && !categories ? (
        <div
          className="flex flex-col items-center justify-center h-full"
          data-test-id="loading-purchased-assets"
        >
          <CircularProgress />
        </div>
      ) : isError ? (
        <ErrorFallback
          message="Something went wrong!"
          description="We encountered an error while fetching your purchased assets"
          reset={refetch}
        />
      ) : (
        <div className="mx-12">
          <div className="max-w-tablet lg:max-w-desktop mx-auto flex flex-col lg:flex-row justify-center items-center gap-5 lg:gap-10">
            <h1 className="lg:hidden max-w-tablet mr-auto text-primary font-semibold mb-5">
              Register
            </h1>
            <div className="w-full lg:w-[40%] max-w-sm mx-auto lg:max-w-none">
              <img src={ManOnComputer} className="lg:scale-[1.45] lg:-ml-3" alt="man on computer" />
            </div>
            <div className="w-full max-w-tablet lg:max-w-none lg:w-[60%] rounded-xl lg:bg-white/[.03] lg:p-12 lg:pt-8 lgMax:p-20 lgMax:pt-14">
              <div className="mb-6">
                <h1 className="hidden lg:block text-lgMd text-primary font-semibold mb-5">
                  Register
                </h1>
                <div className="flex items-end space-x-1 mb-3">
                  <p className="text-xs lg:text-smMd">Be part of this movement!</p>
                  <div className="w-24 border-b border-dashed border-primary mb-1 flex justify-center">
                    <ManAndWomanWalking />
                  </div>
                </div>
                <p className="text-mdMd lg:text-mdMax font-semibold">CREATE YOUR ACCOUNT</p>
              </div>
              <div>
                <Formik
                  initialValues={{
                    team_name: '',
                    phone: '',
                    email: '',
                    project_topic: '',
                    category: '',
                    group_size: '',
                  }}
                  onSubmit={(values, { resetForm }) => handleSubmit(values, resetForm)}
                  validationSchema={validationSchema}
                >
                  {({
                    values,
                    touched,
                    errors,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    setFieldValue,
                  }) => (
                    <form onSubmit={handleSubmit}>
                      {/* <Alert
                        onClose={() => {
                          setError('');
                        }}
                        className={`mt-4 text-white ${!error ? 'hidden' : ''}`}
                        severity="error"
                        variant="filled"
                        data-test-id="login-server-error"
                      >
                        {error}
                      </Alert> */}
                      <div className="flex flex-col space-y-4 lg:space-y-6">
                        <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
                          <TextField
                            values={values}
                            errors={errors}
                            handleChange={handleChange}
                            handleBlur={handleBlur}
                            touched={touched}
                            type="text"
                            name="team_name"
                            label="Team's Name"
                            placeholder="Enter the name of your group"
                          />
                          <TextField
                            values={values}
                            errors={errors}
                            handleChange={handleChange}
                            handleBlur={handleBlur}
                            touched={touched}
                            type="tel"
                            name="phone"
                            label="Phone"
                            placeholder="Enter your phone number"
                          />
                        </div>
                        <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
                          <TextField
                            values={values}
                            errors={errors}
                            handleChange={handleChange}
                            handleBlur={handleBlur}
                            touched={touched}
                            type="email"
                            name="email"
                            label="Email"
                            placeholder="Enter your email address"
                          />
                          <TextField
                            values={values}
                            errors={errors}
                            handleChange={handleChange}
                            handleBlur={handleBlur}
                            touched={touched}
                            type="text"
                            name="project_topic"
                            label="Project Topic"
                            placeholder="What is your group project topic"
                          />
                        </div>
                        <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
                          <div className="space-y-2 w-full">
                            <label className="text-smMax lg:text-smMd font-medium">Category</label>
                            <Autocomplete
                              fullWidth
                              options={categories?.map((category) => category.name) ?? []} // Pass an array of category names
                              placeholder="Select your category"
                              sx={{
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
                                  },
                                },
                              }}
                              onChange={(_, value) => {
                                setFieldValue('category', value);
                              }}
                              value={values.category}
                              renderInput={(params) => (
                                <MUITextField
                                  {...params}
                                  variant="outlined"
                                  placeholder="Select your category"
                                  error={touched.category && !!errors.category}
                                  helperText={touched.category ? errors.category : ''}
                                />
                              )}
                            />
                          </div>
                          <div className="space-y-2 w-full">
                            <label className="text-smMax lg:text-smMd font-medium">
                              Group Size
                            </label>
                            <Autocomplete
                              fullWidth
                              options={['1', '2', '3', '4', '5']}
                              placeholder="Select your group size"
                              sx={{
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
                                  },
                                },
                                '& .MuiAutocomplete-listbox': {
                                  '& .MuiAutocomplete-option': {
                                    color: 'white',
                                  },
                                },
                              }}
                              onChange={(_, value) => {
                                setFieldValue('group_size', value);
                              }}
                              value={values.group_size}
                              renderInput={(params) => (
                                <MUITextField
                                  {...params}
                                  variant="outlined"
                                  placeholder="Select your group size"
                                  error={touched.group_size && !!errors.group_size}
                                  helperText={touched.group_size ? errors.group_size : ''}
                                />
                              )}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="mt-2 lg:mt-4">
                        <i className="text-xsMax lg:text-xs text-pink">
                          Please review your registration details before submitting
                        </i>
                      </div>
                      <div className="flex items-center mb-3">
                        <Checkbox
                          icon={<CheckBoxOutlineBlankOutlined className="text-white w-4 h-4" />}
                          checkedIcon={<CheckBox className="text-pink w-4 h-4" />}
                          checked={privacyPolicyAccepted}
                          onChange={(e) => setPrivacyPolicyAccepted(e.target.checked)}
                        />
                        <span className="text-xsMd lg:text-xs font-medium">
                          I agreed with the event terms and conditions and privacy policy
                        </span>
                      </div>
                      <Button type="submit" disabled={isSubmitting} size="large" fullWidth>
                        {isSubmitting ? (
                          <>
                            <CircularProgress color="inherit" className="text-white" size={22} />
                            <span className="sr-only">Submitting</span>
                          </>
                        ) : (
                          'Register Now'
                        )}
                      </Button>
                    </form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      )}
      <Dialog
        open={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        sx={{
          '& .MuiPaper-root ': {
            background: 'transparent',
          },
        }}
        BackdropProps={{ invisible: true }}
        fullScreen
      >
        <DialogContent className="flex justify-center items-center overflow-hidden">
          <div className="flex flex-col justify-center items-center text-center p-7 pb-8 md:p-12 md:pt-5 rounded m-auto w-full max-w-2xl h-fit border border-solid border-primary bg-white/[.01]">
            <img src={Congratulations} alt="congratulations" className="w-[80%]" />
            <div className="space-y-6 lg:space-y-8 w-full">
              <div className="space-y-2">
                <div>
                  <p className="font-bold text-base lg:text-lgMd text-white">Congratulations!</p>
                  <p className="font-bold text-base lg:text-lgMd text-white lg:whitespace-nowrap">
                    You have successfully Registered
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs lg:text-smMd text-white">
                    Yes, it was easy and you did it!
                  </p>
                  <p className="text-xs lg:text-smMd text-white flex justify-center items-center">
                    <span>check your mail box for next step</span>
                    <WinkEmoji />
                  </p>
                </div>
              </div>
              <Button onClick={() => setShowSuccessModal(false)} size="large" fullWidth>
                Back
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Register;
