import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function NewsletterForm() {
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
    }),
    onSubmit: (values, { resetForm }) => {
      alert(`Subscribed with: ${values.email}`);
      resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="mb-3">
      <div className="d-flex newsletter-form">
        <input
          id="email"
          name="email"
          type="email"
          className="form-control bg-transparent text-white border-light"
          placeholder="Email Address..."
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        <button type="submit" className="btn btn-light ms-2 text-nowrap" style={{color: '#5b1524', fontWeight: 'bold'}}>
          Subscribe
        </button>
      </div>
      {formik.touched.email && formik.errors.email ? (
        <div className="text-danger mt-1" style={{fontSize: '12px'}}>{formik.errors.email}</div>
      ) : null}
    </form>
  );
}
