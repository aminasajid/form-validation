import React from 'react';
import { Formik, Form as FormikForm, Field, ErrorMessage } from 'formik';
import { Container, Form as BootstrapForm, Button } from 'react-bootstrap';


function RegisterForm() {
  // Custom validation function
  const validate = (values) => {
    const errors = {};

    // Name validation
    if (!values.name) {
      errors.name = 'Name is required';
    } else if (values.name.length < 3) {
      errors.name = 'Name must be at least 3 letters';
    }

    // Email validation
    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Invalid email format';
    }

    // Phone validation
    if (!values.phone) {
      errors.phone = 'Phone number is required';
    } else if (!/^[0-9]{10}$/.test(values.phone)) {
      errors.phone = 'Phone number must be exactly 10 digits';
    }

    // DOB validation
    if (!values.dob) {
      errors.dob = 'Date of Birth is required';
    }

    // Gender validation
    if (!values.gender) {
      errors.gender = 'Please select a gender';
    }

    // Password validation (with at least one uppercase letter, one lowercase letter, one number, and one special character)
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!values.password) {
      errors.password = 'Password is required';
    } else if (!passwordRegex.test(values.password)) {
      errors.password = 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character';
    }

    // Confirm Password validation
    if (!values.confirmPassword) {
      errors.confirmPassword = 'Please confirm your password';
    } else if (values.confirmPassword !== values.password) {
      errors.confirmPassword = 'Passwords do not match';
    }

    // Address validation
    if (!values.address) {
      errors.address = 'Address is required';
    }

    // Country validation
    if (!values.country) {
      errors.country = 'Please select your country';
    }

    // Profile Picture validation (only image files)
    if (!values.profilePicture) {
      errors.profilePicture = 'Profile picture is required';
    } else if (!/\.(jpg|jpeg|png|gif)$/i.test(values.profilePicture.name)) {
      errors.profilePicture = 'Only image files (jpg, jpeg, png, gif) are allowed';
    }

    // Terms and Conditions validation
    if (!values.acceptTerms) {
      errors.acceptTerms = 'You must accept the terms and conditions';
    }

    return errors;
  };

  return (
    <Container className="w-50 mx-auto bg-white p-4 shadow-lg m-3" style={{ borderRadius: '8px', border: '1px solid #ddd' }}>



      <h2 className="text-center mb-4">Registration Form</h2>
      <Formik
        initialValues={{
          name: '',
          email: '',
          phone: '',
          dob: '',
          gender: '',
          password: '',
          confirmPassword: '',
          address: '',
          country: '',
          profilePicture: null,
          acceptTerms: false
        }}
        validate={validate}
        onSubmit={(values) => {
          alert('Registration successful');
          console.log(values);
        }}
      >
        {({ handleSubmit, setFieldValue }) => (
          <FormikForm onSubmit={handleSubmit}>
            <BootstrapForm.Group controlId="formName">
              <BootstrapForm.Label>Name</BootstrapForm.Label>
              <Field
                name="name"
                type="text"
                className="form-control"
                placeholder="Enter your name"
              />
              <ErrorMessage name="name" component="div" className="text-danger" />
            </BootstrapForm.Group>

            <BootstrapForm.Group controlId="formEmail">
              <BootstrapForm.Label>Email</BootstrapForm.Label>
              <Field
                name="email"
                type="email"
                className="form-control"
                placeholder="Enter your email"
              />
              <ErrorMessage name="email" component="div" className="text-danger" />
            </BootstrapForm.Group>

            <BootstrapForm.Group controlId="formPhone">
              <BootstrapForm.Label>Phone</BootstrapForm.Label>
              <Field
                name="phone"
                type="text"
                className="form-control"
                placeholder="Enter your phone number"
              />
              <ErrorMessage name="phone" component="div" className="text-danger" />
            </BootstrapForm.Group>

            <BootstrapForm.Group controlId="formDOB">
              <BootstrapForm.Label>Date of Birth</BootstrapForm.Label>
              <Field
                name="dob"
                type="date"
                className="form-control"
              />
              <ErrorMessage name="dob" component="div" className="text-danger" />
            </BootstrapForm.Group>

            <BootstrapForm.Group controlId="formGender">
              <BootstrapForm.Label>Gender</BootstrapForm.Label>
              <Field as="select" name="gender" className="form-control">
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </Field>
              <ErrorMessage name="gender" component="div" className="text-danger" />
            </BootstrapForm.Group>

            <BootstrapForm.Group controlId="formPassword">
              <BootstrapForm.Label>Password</BootstrapForm.Label>
              <Field
                name="password"
                type="password"
                className="form-control"
                placeholder="Enter your password"
              />
              <ErrorMessage name="password" component="div" className="text-danger" />
            </BootstrapForm.Group>

            <BootstrapForm.Group controlId="formConfirmPassword">
              <BootstrapForm.Label>Confirm Password</BootstrapForm.Label>
              <Field
                name="confirmPassword"
                type="password"
                className="form-control"
                placeholder="Confirm your password"
              />
              <ErrorMessage name="confirmPassword" component="div" className="text-danger" />
            </BootstrapForm.Group>

            <BootstrapForm.Group controlId="formAddress">
              <BootstrapForm.Label>Address</BootstrapForm.Label>
              <Field
                name="address"
                as="textarea"
                className="form-control"
                placeholder="Enter your address"
              />
              <ErrorMessage name="address" component="div" className="text-danger" />
            </BootstrapForm.Group>

            <BootstrapForm.Group controlId="formCountry">
              <BootstrapForm.Label>Select Your Country</BootstrapForm.Label>
              <Field as="select" name="country" className="form-control">
                <option value="">Select Country</option>
                <option value="usa">United States</option>
                <option value="canada">Canada</option>
                <option value="uk">United Kingdom</option>
                {/* Add more countries as needed */}
              </Field>
              <ErrorMessage name="country" component="div" className="text-danger" />
            </BootstrapForm.Group>

            <BootstrapForm.Group controlId="formProfilePicture">
              <BootstrapForm.Label>Profile Picture</BootstrapForm.Label>
              <input
                name="profilePicture"
                type="file"
                className="form-control"
                onChange={(event) => {
                  setFieldValue('profilePicture', event.currentTarget.files[0]);
                }}
              />
              <ErrorMessage name="profilePicture" component="div" className="text-danger" />
            </BootstrapForm.Group>

            <BootstrapForm.Group controlId="formAcceptTerms">
              <Field
                name="acceptTerms"
                type="checkbox"
                className="me-2"
              />
              <label>I accept the terms and conditions</label>
              <ErrorMessage name="acceptTerms" component="div" className="text-danger" />
            </BootstrapForm.Group>

            <Button variant="primary" type="submit" className="mt-3">
              Register
            </Button>
          </FormikForm>
        )}
      </Formik>
    </Container>
  );
}

export default RegisterForm;
