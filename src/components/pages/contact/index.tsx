import * as yup from 'yup';
import { Formik } from 'formik';
import Button from 'components/button';
import { sendMessage } from 'apis/contact';
import { useEffect, useState } from 'react';
import images from 'assets/images/index.json';
import TextField from 'components/text-field';
import { socials } from 'data/static/socials';
import { Alert, CircularProgress, Dialog, DialogContent } from '@mui/material';
import AnimateOnScroll from 'components/animate-on-scroll';

const validationSchema = yup.object().shape({
  message: yup.string().required('Enter your message'),
  first_name: yup.string().required('Enter your first name'),
  phone_number: yup.string().required('Enter your phone number'),
  email: yup.string().required('Enter your email address').email('Enter a valid email address'),
});

const Contact = () => {
  const [error, setError] = useState('');
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleSubmit = async (values: any, resetForm: () => void) => {
    try {
      setError('');
      await sendMessage({
        email: values.email,
        message: values.message,
        first_name: values.first_name,
        phone_number: values.phone_number,
      });
      setShowSuccessModal(true);
      resetForm();
    } catch (error: any) {
      setError('An error occurred, please try again');
    }
  };

  useEffect(() => {
    const layoutElement = document.getElementById('layout');
    const navigationElement = document.getElementById('navigation');
    if (layoutElement && navigationElement) {
      const opacity = showSuccessModal ? '0.1' : '1';
      layoutElement.style.opacity = opacity;
      navigationElement.style.opacity = opacity;
    }
  }, [showSuccessModal]);

  return (
    <div className="pt-5 pb-16 lg:pt-5 lg:pb-20">
      <div className="mx-12">
        <div className="max-w-tablet lg:max-w-desktop mx-auto flex justify-center gap-5 lg:gap-10">
          <div className="hidden lg:block w-[40%] mt-10">
            <AnimateOnScroll>
              <h1 className="text-lgMd text-primary font-semibold mb-3">Get in touch</h1>
            </AnimateOnScroll>
            <div className="space-y-5 mb-7">
              <div>
                <AnimateOnScroll margin="0px" delay={0.35}>
                  <p className="font-medium">Contact</p>
                </AnimateOnScroll>
                <AnimateOnScroll margin="0px" delay={0.5}>
                  <p>Information</p>
                </AnimateOnScroll>
              </div>
              <div>
                <AnimateOnScroll margin="0px" delay={0.65}>
                  <p className="font-medium">27,Alara Street</p>
                </AnimateOnScroll>
                <AnimateOnScroll margin="0px" delay={0.8}>
                  <p className="font-medium">Yaba 100012</p>
                </AnimateOnScroll>
                <AnimateOnScroll margin="0px" delay={0.95}>
                  <p className="font-medium">Lagos State</p>
                </AnimateOnScroll>
              </div>
              <AnimateOnScroll margin="0px" delay={1.1}>
                <p className="font-medium">Call Us : 07067981819</p>
              </AnimateOnScroll>
              <div>
                <AnimateOnScroll margin="0px" delay={1.25}>
                  <p className="font-medium">we are open from Monday-Friday</p>
                </AnimateOnScroll>
                <AnimateOnScroll margin="0px" delay={1.4}>
                  <p className="font-medium">08:00am - 05:00pm</p>
                </AnimateOnScroll>
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <AnimateOnScroll margin="0px" delay={1.55}>
                <p className="text-primary font-medium">Share on</p>
              </AnimateOnScroll>
              <AnimateOnScroll margin="0px" delay={1.7}>
                <div className="flex items-center space-x-3">
                  {socials.map((social) => (
                    <a href={social.link} target="_blank" rel="noopener noreferrer">
                      <social.icon className="hover:text-primary cursor-pointer transition-all duration-100 hover:scale-125" />
                    </a>
                  ))}
                </div>
              </AnimateOnScroll>
            </div>
          </div>
          <div className="w-full max-w-tablet lg:max-w-none lg:w-[60%] rounded-xl lg:bg-white/[.03] lg:p-12 lg:pt-8 lgMax:p-20 lgMax:pt-14">
            <div className="space-y-1 mb-6 lg:mb-10">
              <AnimateOnScroll>
                <h1 className="lg:block text-mdMd text-primary font-semibold">
                  Questions or need assistance?
                </h1>
              </AnimateOnScroll>
              <AnimateOnScroll margin="0px" delay={0.35}>
                <h1 className="lg:block text-mdMd text-primary font-semibold">
                  Let us know about it!
                </h1>
              </AnimateOnScroll>
            </div>
            <AnimateOnScroll margin="0px" delay={0.5}>
              <p className="lg:hidden text-xs mb-10">
                Email us below to any question related to our event
              </p>
            </AnimateOnScroll>
            <div>
              <Formik
                initialValues={{
                  email: '',
                  message: '',
                  first_name: '',
                  phone_number: '',
                }}
                validationSchema={validationSchema}
                onSubmit={(values, { resetForm }) => handleSubmit(values, resetForm)}
              >
                {({
                  dirty,
                  values,
                  errors,
                  isValid,
                  touched,
                  handleBlur,
                  isSubmitting,
                  handleChange,
                  handleSubmit,
                }) => (
                  <form onSubmit={handleSubmit}>
                    {error && (
                      <Alert
                        onClose={() => {
                          setError('');
                        }}
                        severity="error"
                        variant="filled"
                        className="-mt-2 mb-8 text-white"
                      >
                        {error}
                      </Alert>
                    )}
                    <div className="flex flex-col space-y-8">
                      <AnimateOnScroll margin="0px" delay={0.65}>
                        <TextField
                          type="text"
                          name="first_name"
                          label="First Name"
                          handleChange={handleChange}
                          handleBlur={handleBlur}
                          touched={touched}
                          values={values}
                          errors={errors}
                          shrinkLabel
                        />
                      </AnimateOnScroll>
                      <AnimateOnScroll margin="0px" delay={0.8}>
                        <TextField
                          type="tel"
                          name="phone_number"
                          label="Phone Number"
                          handleChange={handleChange}
                          handleBlur={handleBlur}
                          touched={touched}
                          values={values}
                          errors={errors}
                          shrinkLabel
                        />
                      </AnimateOnScroll>
                      <AnimateOnScroll margin="0px" delay={0.95}>
                        <TextField
                          type="email"
                          name="email"
                          label="Email"
                          handleChange={handleChange}
                          handleBlur={handleBlur}
                          touched={touched}
                          values={values}
                          errors={errors}
                          shrinkLabel
                        />
                      </AnimateOnScroll>
                      <AnimateOnScroll margin="0px" delay={1.1}>
                        <TextField
                          type="text"
                          name="message"
                          label="Message"
                          handleChange={handleChange}
                          handleBlur={handleBlur}
                          touched={touched}
                          values={values}
                          errors={errors}
                          shrinkLabel
                          multiline
                        />
                      </AnimateOnScroll>
                    </div>
                    <div className="flex justify-center mt-8">
                      <AnimateOnScroll margin="0px" delay={1.25}>
                        <Button
                          size="large"
                          type="submit"
                          disabled={isSubmitting || !isValid || !dirty}
                        >
                          {isSubmitting ? (
                            <>
                              <CircularProgress color="inherit" className="text-white" size={22} />
                              <span className="sr-only">Submitting</span>
                            </>
                          ) : (
                            'Submit'
                          )}
                        </Button>
                      </AnimateOnScroll>
                    </div>
                    <div className="flex flex-col items-center space-y-2 mt-10 lg:hidden">
                      <AnimateOnScroll margin="0px" delay={1.4}>
                        <p className="text-primary font-medium text-smMd">Share on</p>
                      </AnimateOnScroll>
                      <AnimateOnScroll margin="0px" delay={1.55}>
                        <div className="flex items-center space-x-3">
                          {socials.map((social) => (
                            <a href={social.link} target="_blank" rel="noopener noreferrer">
                              <social.icon className="hover:text-primary cursor-pointer transition-all duration-100 hover:scale-125" />
                            </a>
                          ))}
                        </div>
                      </AnimateOnScroll>
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
            <img src={images['congratulations']} alt="congratulations" className="w-[80%]" />
            <div className="space-y-6 lg:space-y-8 w-full">
              <div className="space-y-2">
                <p className="font-bold text-base lg:text-lgMd text-white">Message Sent!</p>
                <p className="text-xs lg:text-smMd text-white">
                  Your message was sent successfully
                </p>
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
