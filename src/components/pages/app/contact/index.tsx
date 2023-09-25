import { ReactComponent as WinkEmoji } from 'assets/icons/wink-emoji.svg';
import Congratulations from 'assets/images/congratulation.png';
import { ReactComponent as InstagramIcon } from 'assets/icons/instagram.svg';
import { ReactComponent as TwitterIcon } from 'assets/icons/twitter.svg';
import { ReactComponent as FacebookIcon } from 'assets/icons/facebook.svg';
import { ReactComponent as LinkedInIcon } from 'assets/icons/linkedin.svg';
import {
  // Alert,
  CircularProgress,
  Dialog,
  DialogContent,
} from '@mui/material';
import Button from 'components/button';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useEffect, useState } from 'react';
import TextField from 'components/text-filed';

const validationSchema = yup.object().shape({
  first_name: yup.string().required('Enter your first name'),
  phone_number: yup.string().required('Enter your phone number'),
  email: yup.string().required('Enter your email address'),
  message: yup.string().required('Enter your message'),
});

const Contact = () => {
  // const [error, setError] = useState('');
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleSubmit = async (values: any, resetForm: () => void) => {
    try {
      // setError('');
      setShowSuccessModal(true);
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
      <div className="mx-12">
        <div className="max-w-tablet lg:max-w-desktop mx-auto flex justify-center gap-5 lg:gap-10">
          <div className="hidden lg:block w-[40%] mt-10">
            <h1 className="text-lgMd text-primary font-semibold mb-3">Get in touch</h1>
            <div className="space-y-5 mb-7">
              <div>
                <p className="font-medium">Contact</p>
                <p>Information</p>
              </div>
              <div>
                <p className="font-medium">27,Alara Street</p>
                <p className="font-medium">Yaba 100012</p>
                <p className="font-medium">Lagos State</p>
              </div>
              <p className="font-medium">Call Us : 07067981819</p>
              <div>
                <p className="font-medium">we are open from Monday-Friday</p>
                <p className="font-medium">08:00am - 05:00pm</p>
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <p className="text-primary font-medium">Share on</p>
              <div className="flex items-center space-x-3">
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                  <InstagramIcon className="hover:text-primary cursor-pointer transition-all duration-100 hover:scale-125" />
                </a>
                <a href="https://www.x.com" target="_blank" rel="noopener noreferrer">
                  <TwitterIcon className="hover:text-primary cursor-pointer transition-all duration-100 hover:scale-125" />
                </a>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                  <FacebookIcon className="hover:text-primary cursor-pointer transition-all duration-100 hover:scale-125" />
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                  <LinkedInIcon className="hover:text-primary cursor-pointer transition-all duration-100 hover:scale-125" />
                </a>
              </div>
            </div>
          </div>
          <div className="w-full max-w-tablet lg:max-w-none lg:w-[60%] rounded-xl lg:bg-white/[.03] lg:p-12 lg:pt-8 lgMax:p-20 lgMax:pt-14">
            <div className="space-y-1 mb-6 lg:mb-10">
              <h1 className="lg:block text-mdMd text-primary font-semibold">
                Questions or need assistance?
              </h1>
              <h1 className="lg:block text-mdMd text-primary font-semibold">
                Let us know about it!
              </h1>
            </div>
            <p className="lg:hidden text-xs mb-10">
              Email us below to any question related to our event
            </p>
            <div>
              <Formik
                initialValues={{
                  first_name: '',
                  phone_number: '',
                  email: '',
                  message: '',
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
                    <div className="flex flex-col space-y-8">
                      <TextField
                        values={values}
                        errors={errors}
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        touched={touched}
                        shrinkLabel
                        type="text"
                        name="first_name"
                        label="First Name"
                      />
                      <TextField
                        values={values}
                        errors={errors}
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        touched={touched}
                        shrinkLabel
                        type="tel"
                        name="phone_number"
                        label="Phone Number"
                      />
                      <TextField
                        values={values}
                        errors={errors}
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        touched={touched}
                        shrinkLabel
                        type="email"
                        name="email"
                        label="Email"
                      />
                      <TextField
                        values={values}
                        errors={errors}
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        touched={touched}
                        shrinkLabel
                        multiline
                        type="text"
                        name="message"
                        label="Message"
                      />
                    </div>
                    <div className="flex justify-center mt-8">
                      <Button type="submit" disabled={isSubmitting} size="large">
                        {isSubmitting ? (
                          <>
                            <CircularProgress color="inherit" className="text-white" size={22} />
                            <span className="sr-only">Submitting</span>
                          </>
                        ) : (
                          'Submit'
                        )}
                      </Button>
                    </div>
                    <div className="flex flex-col items-center space-y-2 mt-10 lg:hidden">
                      <p className="text-primary font-medium text-smMd">Share on</p>{' '}
                      <div className="flex items-center space-x-3">
                        <a
                          href="https://www.instagram.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <InstagramIcon className="hover:text-primary cursor-pointer transition-all duration-100 hover:scale-125" />
                        </a>
                        <a href="https://www.x.com" target="_blank" rel="noopener noreferrer">
                          <TwitterIcon className="hover:text-primary cursor-pointer transition-all duration-100 hover:scale-125" />
                        </a>
                        <a
                          href="https://www.facebook.com"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FacebookIcon className="hover:text-primary cursor-pointer transition-all duration-100 hover:scale-125" />
                        </a>
                        <a
                          href="https://www.linkedin.com"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <LinkedInIcon className="hover:text-primary cursor-pointer transition-all duration-100 hover:scale-125" />
                        </a>
                      </div>
                    </div>
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

export default Contact;
