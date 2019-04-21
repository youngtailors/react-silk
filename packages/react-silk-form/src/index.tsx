import React from 'react'
import { View, StyleProp, ViewStyle, TextStyle } from 'react-native'
import {
  Input,
  Button,
  InputProps,
  InputPin,
  ButtonProps,
  Choices,
  InputChoicesProps,
} from 'react-silk-ui'

export interface FormInputProps extends InputProps {
  name: string
}

export interface FormProps {
  initialValues?: {
    [key: string]: string
  }
  submitting?: boolean
  fields: Array<FormInputProps & InputChoicesProps>
  fieldStyles?: {
    style?: StyleProp<ViewStyle>
    inputStyle?: StyleProp<ViewStyle & TextStyle>
  }
  onSubmit?: (values: { [key: string]: string }) => void
  submitButton?: ButtonProps
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
          const { type, ...inputProps } = field
          switch (type) {
            case 'password':
              inputProps.secureTextEntry = true
              break
            case 'pin':
              return (
                <InputPin
                  key={field.name}
                  fieldStyles={this.props.fieldStyles}
                  onChanged={(value: any) =>
                    this.fieldChanged(field.name, value)
                  }
                  label={field.label}
                />
              )
            case 'radio':
              return (
                <Choices
                  key={field.name}
                  label={field.label}
                  choices={field.choices}
                  value={this.state.values[field.name]}
                  onChanged={(value: any) =>
                    this.fieldChanged(field.name, value)
                  }
                />
              )
            case 'checkbox':
              return (
                <Choices
                  key={field.name}
                  label={field.label}
                  mutiple
                  choices={field.choices}
                  value={this.state.values[field.name]}
                  onChanged={(value: any) =>
                    this.fieldChanged(field.name, value)
                  }
                />
              )
            default:
              break
          }
          return (
            <Input
              key={field.name}
              {...this.props.fieldStyles}
              {...inputProps}
              value={this.state.values[field.name]}
              onChanged={(value: any) => this.fieldChanged(field.name, value)}
            />
          )
        })}
        {this.props.onSubmit && (
          <Button onPress={this.onSubmit} {...this.props.submitButton}>
            Submit
          </Button>
        )}
      </View>
    )
  }
}

export default { Form }
