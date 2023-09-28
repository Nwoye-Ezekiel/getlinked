import {
  Alert,
  Dialog,
  Checkbox,
  Autocomplete,
  DialogContent,
  CircularProgress,
  TextField as MUITextField,
} from '@mui/material';
import * as yup from 'yup';
import { Formik } from 'formik';
import Button from 'components/button';
import { useEffect, useState } from 'react';
import { useCategories } from 'data/dynamic';
import images from 'assets/images/index.json';
import TextField from 'components/text-field';
import { registerUser } from 'apis/registration';
import AnimateOnScroll from 'components/animate-on-scroll';
import { CheckBox, CheckBoxOutlineBlankOutlined, KeyboardArrowDown } from '@mui/icons-material';

const validationSchema = yup.object().shape({
  category: yup.string().required('Enter your category'),
  phone: yup.string().required('Enter your phone number'),
  team_name: yup.string().required('Enter your team name'),
  group_size: yup.string().required('Enter your group size'),
  project_topic: yup.string().required('Enter your project topic'),
  email: yup.string().required('Enter your email address').email('Enter a valid email address'),
});

const Register = () => {
  const [error, setError] = useState('');
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [privacyPolicyAccepted, setPrivacyPolicyAccepted] = useState(false);
  const {
    data: categories,
    refetch: refetchCategories,
    isLoading: isLoadingCategories,
    isError: loadingCategoriesError,
  } = useCategories();

  const handleSubmit = async (values: any, resetForm: () => void) => {
    try {
      setError('');
      await registerUser({
        email: values.email,
        phone_number: values.phone,
        team_name: values.team_name,
        project_topic: values.project_topic,
        group_size: Number(values.group_size),
        privacy_poclicy_accepted: privacyPolicyAccepted,
        category: categories?.find((category) => category.name === values.category)?.id ?? 1,
      });
      resetForm();
      setShowSuccessModal(true);
      setPrivacyPolicyAccepted(false);
    } catch (error: any) {
      setError('An error occurred, please try again');
    }
  };

  useEffect(() => {
    const layoutElement = document.getElementById('layout');
    const navigationElement = document.getElementById('navigation');
    if (layoutElement && navigationElement) {
      const opacity = showSuccessModal ? '0.1' : '1';
      navigationElement.style.opacity = opacity;
      layoutElement.style.opacity = opacity;
    }
  }, [showSuccessModal]);

  return (
    <div className="pt-5 pb-16 lg:pt-5 lg:pb-20">
      <div className="mx-12">
        <div className="max-w-tablet lg:max-w-desktop mx-auto flex flex-col lg:flex-row justify-center items-center gap-5 lg:gap-10">
          <div className="mr-auto">
            <AnimateOnScroll refIndex={0}>
              <h1 className="lg:hidden text-primary font-semibold mb-5">Register</h1>
            </AnimateOnScroll>
          </div>
          <div className="w-full lg:w-[40%] max-w-sm mx-auto lg:max-w-none">
            <img
              src={images['man_sitting']}
              className="lg:scale-[1.45] lg:-ml-3"
              alt="man sitting"
            />
          </div>
          <div className="w-full max-w-tablet lg:max-w-none lg:w-[60%] rounded-xl lg:bg-white/[.03] lg:p-12 lg:pt-8 lgMax:p-20 lgMax:pt-14">
            <div className="mb-6">
              <AnimateOnScroll refIndex={1}>
                <h1 className="hidden lg:block text-lgMd text-primary font-semibold mb-5">
                  Register
                </h1>
              </AnimateOnScroll>
              <div className="flex items-end space-x-1 mb-3">
                <AnimateOnScroll refIndex={2}>
                  <p className="text-xs lg:text-smMd">Be part of this movement!</p>
                </AnimateOnScroll>
                <AnimateOnScroll refIndex={3}>
                  <div className="w-24 border-b border-dashed border-primary mb-1 flex justify-center">
                    <img
                      src={images['man_and_woman_walking_emoji']}
                      alt="man and woman walking emoji"
                    />
                  </div>
                </AnimateOnScroll>
              </div>
              <AnimateOnScroll refIndex={4}>
                <p className="text-mdMd lg:text-mdMax font-semibold">CREATE YOUR ACCOUNT</p>
              </AnimateOnScroll>
            </div>
            <div>
              <Formik
                initialValues={{
                  phone: '',
                  email: '',
                  category: '',
                  team_name: '',
                  group_size: '',
                  project_topic: '',
                }}
                onSubmit={(values, { resetForm }) => handleSubmit(values, resetForm)}
                validationSchema={validationSchema}
              >
                {({
                  dirty,
                  values,
                  errors,
                  touched,
                  isValid,
                  handleBlur,
                  handleChange,
                  handleSubmit,
                  isSubmitting,
                  setFieldValue,
                }) => (
                  <form onSubmit={handleSubmit}>
                    {error && (
                      <Alert
                        onClose={() => {
                          setError('');
                        }}
                        severity="error"
                        variant="filled"
                        className="mb-4 text-white"
                      >
                        {error}
                      </Alert>
                    )}
                    <div className="flex flex-col space-y-4 lg:space-y-6">
                      <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
                        <div className="w-full">
                          <AnimateOnScroll refIndex={5}>
                            <TextField
                              type="text"
                              name="team_name"
                              label="Team's Name"
                              placeholder="Enter the name of your group"
                              handleChange={handleChange}
                              handleBlur={handleBlur}
                              touched={touched}
                              values={values}
                              errors={errors}
                            />
                          </AnimateOnScroll>
                        </div>
                        <div className="w-full">
                          <AnimateOnScroll refIndex={6}>
                            <TextField
                              type="tel"
                              name="phone"
                              label="Phone"
                              placeholder="Enter your phone number"
                              handleChange={handleChange}
                              handleBlur={handleBlur}
                              touched={touched}
                              values={values}
                              errors={errors}
                            />
                          </AnimateOnScroll>
                        </div>
                      </div>
                      <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
                        <div className="w-full">
                          <AnimateOnScroll refIndex={7}>
                            <TextField
                              type="email"
                              name="email"
                              label="Email"
                              placeholder="Enter your email address"
                              handleChange={handleChange}
                              handleBlur={handleBlur}
                              touched={touched}
                              values={values}
                              errors={errors}
                            />
                          </AnimateOnScroll>
                        </div>
                        <div className="w-full">
                          <AnimateOnScroll refIndex={8}>
                            <TextField
                              type="text"
                              name="project_topic"
                              label="Project Topic"
                              placeholder="What is your group project topic"
                              handleChange={handleChange}
                              handleBlur={handleBlur}
                              touched={touched}
                              values={values}
                              errors={errors}
                            />
                          </AnimateOnScroll>
                        </div>
                      </div>
                      <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
                        <div className="w-full">
                          <AnimateOnScroll refIndex={9}>
                            <div className="space-y-2 w-full">
                              <label className="text-smMax lg:text-smMd font-medium">
                                Category
                              </label>
                              <Autocomplete
                                fullWidth
                                value={values.category}
                                popupIcon={<KeyboardArrowDown />}
                                placeholder="Select your category"
                                classes={{
                                  listbox: 'bg-horizontalGradient',
                                }}
                                options={categories?.map((category) => category.name) ?? []}
                                onChange={(_, value) => {
                                  setFieldValue('category', value);
                                }}
                                renderInput={(params) => (
                                  <div>
                                    <MUITextField
                                      {...params}
                                      variant="outlined"
                                      placeholder="Select your category"
                                      error={touched.category && !!errors.category}
                                      helperText={touched.category ? errors.category : ''}
                                    />
                                    {isLoadingCategories && (
                                      <div className="text-white/[.5] text-smMax mt-1 animate-pulse">
                                        Fetching categories...
                                      </div>
                                    )}
                                    {loadingCategoriesError && (
                                      <div className="flex space-x-1 text-xs mt-1">
                                        <span className="text-white/[.5]">An error occurred.</span>
                                        <span
                                          className="text-error font-medium cursor-pointer"
                                          onClick={() => refetchCategories()}
                                        >
                                          Retry
                                        </span>
                                      </div>
                                    )}
                                  </div>
                                )}
                              />
                            </div>
                          </AnimateOnScroll>
                        </div>
                        <div className="w-full">
                          <AnimateOnScroll refIndex={10}>
                            <div className="space-y-2 w-full">
                              <label className="text-smMax lg:text-smMd font-medium">
                                Group Size
                              </label>
                              <Autocomplete
                                fullWidth
                                value={values.group_size}
                                popupIcon={<KeyboardArrowDown />}
                                classes={{
                                  listbox: 'bg-horizontalGradient',
                                }}
                                placeholder="Select your group size"
                                options={['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']}
                                onChange={(_, value) => {
                                  setFieldValue('group_size', value);
                                }}
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
                          </AnimateOnScroll>
                        </div>
                      </div>
                    </div>
                    <div className="mt-2 lg:mt-4">
                      <AnimateOnScroll refIndex={11}>
                        <i className="text-xsMax lg:text-xs text-pink">
                          Please review your registration details before submitting
                        </i>
                      </AnimateOnScroll>
                    </div>
                    <div className="flex items-center mb-3">
                      <AnimateOnScroll refIndex={12}>
                        <>
                          <Checkbox
                            checked={privacyPolicyAccepted}
                            checkedIcon={<CheckBox className="text-pink w-4 h-4" />}
                            onChange={(e) => setPrivacyPolicyAccepted(e.target.checked)}
                            icon={<CheckBoxOutlineBlankOutlined className="text-white w-4 h-4" />}
                          />
                          <span className="text-xsMd lg:text-xs font-medium">
                            I agreed with the event terms and conditions and privacy policy
                          </span>
                        </>
                      </AnimateOnScroll>
                    </div>
                    <AnimateOnScroll refIndex={13}>
                      <Button
                        fullWidth
                        size="large"
                        type="submit"
                        disabled={isSubmitting || !isValid || !dirty || !privacyPolicyAccepted}
                      >
                        {isSubmitting ? (
                          <>
                            <CircularProgress color="inherit" className="text-white" size={22} />
                            <span className="sr-only">Submitting</span>
                          </>
                        ) : (
                          'Register Now'
                        )}
                      </Button>
                    </AnimateOnScroll>
                  </form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
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
            <img src={images['congratulations']} alt="congratulations" className="w-[80%]" />
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
                    <img src={images['wink_emoji']} alt="wink emoji" className="ml-2" />
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
