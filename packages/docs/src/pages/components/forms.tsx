import React, { useState } from 'react'
import { Form } from '@react-silk/form'
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
            name: 'code',
            label: 'Pin code',
            type: 'pin',
          },
          {
            name: 'gender',
            label: 'Gender',
            type: 'radio',
            choices: [
              {
                key: 'male',
                value: 'Male',
              },
              {
                key: 'female',
                value: 'Female',
              },
            ],
          },
          {
            name: 'model',
            label: 'Model',
            type: 'checkbox',
            choices: [
              {
                key: 'apple',
                value: 'Apple',
              },
              {
                key: 'dell',
                value: 'Dell',
              },
              {
                key: 'asus',
                value: 'ASUS',
              },
              {
                key: 'acer',
                value: 'Acer',
              },
            ],
          },
        ]}
        onSubmit={setFormValues}
      />
      <code>{JSON.stringify(formValues)}</code>
    </MyMom>
  )
})
