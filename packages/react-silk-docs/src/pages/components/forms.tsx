import React, { useState } from 'react'
import { Form } from 'react-silk-form'
import MyMom from '.'

export default React.memo(() => {
  const [formValues, setFormValues] = useState({})
  return (
    <MyMom>
      <Form
        fields={[
          {
            name: 'email',
            label: 'Enter your email',
          },
          {
            name: 'password',
            label: 'Password',
            type: 'password',
          },
          {
            name: 'Code',
            label: 'Code',
            type: 'pin',
          },
        ]}
        onSubmit={setFormValues}
      />
      <code>{JSON.stringify(formValues)}</code>
    </MyMom>
  )
})
