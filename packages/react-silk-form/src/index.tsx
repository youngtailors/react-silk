import React from 'react'
import { View } from 'react-native'
import { Input, Button, InputProps } from 'react-silk-ui'

export interface FormInputProps extends InputProps {
  name: string
}

export interface FormProps {
  initialValues?: {
    [key: string]: string
  }
  submitting?: boolean
  fields: Array<FormInputProps>
  onSubmit?: (values: { [key: string]: string }) => void
}

export interface FormState {
  values: {
    [key: string]: string
  }
}
export class Form extends React.PureComponent<FormProps, FormState> {
  constructor(props: FormProps) {
    super(props)
    const initialFormValues: FormProps['initialValues'] = {}
    props.fields.forEach(field => {
      if (props.initialValues) {
        initialFormValues[field.name] = props.initialValues[field.name]
      } else {
        initialFormValues[field.name] = ''
      }
    })

    this.state = {
      values: initialFormValues,
    }

    this.onSubmit = this.onSubmit.bind(this)
  }

  fieldChanged(name: string, value: string) {
    this.setState(prevState => ({
      values: {
        ...prevState.values,
        [name]: value,
      },
    }))
  }

  onSubmit() {
    this.props.onSubmit!(this.state.values)
  }

  render() {
    return (
      <View>
        {this.props.fields.map(field => {
          switch (field.type) {
            default:
              return (
                <Input
                  key={field.name}
                  {...field}
                  value={this.state.values[field.name]}
                  onChanged={(value: any) =>
                    this.fieldChanged(field.name, value)
                  }
                />
              )
          }
        })}
        {this.props.onSubmit && <Button onPress={this.onSubmit}>Submit</Button>}
      </View>
    )
  }
}

export default { Form }
