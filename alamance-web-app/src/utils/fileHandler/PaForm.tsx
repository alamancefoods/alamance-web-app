import React, { useState } from 'react'
import { Formik, FormikActions, Form, ErrorMessage, Field } from 'formik';
import * as Yup from 'yup'

const PaProcessSchema = Yup.object().shape({
  timeDelta: Yup.number()
  .typeError('Please enter a numeric value.')
  .integer('Only whole numbers please.')
  .min(1, 'Zero is not an acceptable number.')
  .positive("Please provide a positive value.")
  .lessThan(46, "Why don't we keep things around 45 days or less.")
});

interface PaFormValues {
  timeDelta: number
}

export const PaForm = ({setDeltas, deltas, index } : {
  setDeltas: React.Dispatch<React.SetStateAction<number[]>>,
  deltas: number[],
  index: number
}) => {

  const SubmittedValue = () => (
    <h5>{deltas[index - 1]} days</h5>
  )

  const UnfilledForm = () => (
    <Formik
      initialValues={{
        timeDelta: 30,
      }}
      validationSchema={PaProcessSchema}
      onSubmit={(values: PaFormValues, actions: FormikActions<PaFormValues>)=> {
        if(!deltas.includes(values.timeDelta)){
          setDeltas(deltas => deltas.concat(values.timeDelta))
        }else{
          alert("You've already submitted that value!")
        }
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <Field name="timeDelta" />
          <ErrorMessage name="timeDelta"/>
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  )

  return (
    <div>
      {index > deltas.length
             ? <UnfilledForm />
             : <SubmittedValue />
      }
    </div>
  )
}
