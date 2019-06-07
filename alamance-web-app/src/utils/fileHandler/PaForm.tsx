import React, { useState } from 'react'
import { fileUpload } from './fileUpload'
import { Formik, FormikActions, Form, Field } from 'formik';
import * as Yup from 'yup'

const PaProcessSchema = Yup.object().shape({
  timeDelta: Yup.number()
  .min(1, "You can't use zero days!")
  .max(45, "Let's keep things reasonable. No more than 45 days please.")
  .positive("This ain't a time machine buddy. Only positive values!")
  .integer("Only whole numbers please.")
});

interface PaFormValues {
  timeDelta: number
}

export const PaForm = ({ setDeltas }
                      :{
                        setDeltas: React.Dispatch<React.SetStateAction<number[]>>
                      }) => (
  <div>
    <h4>Product Availability Deficit</h4>
    <Formik
      initialValues={{
        timeDelta: 30,
      }}
      validationSchema={PaProcessSchema}
      onSubmit={(values: PaFormValues, actions: FormikActions<PaFormValues>)=> {
        setDeltas(deltas => deltas.concat(values.timeDelta))
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <Field name="Forecast" />
          {errors.timeDelta && touched.timeDelta ? (
            <div>{errors.timeDelta}</div>
          ) : null}
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  </div>
)
