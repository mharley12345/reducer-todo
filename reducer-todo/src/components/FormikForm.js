
import React from 'react'
import { Form, Field, withFormik } from 'formik'

const TodoForm = ({ clearCompleted }) => {
    return (
        <Form style={{alignSelf:'center', margin:'2rem 0px'}}>
            <label>
                Add new task:
                <Field type='text' name='todo' placeholder='Ex: Fold Laundry' required/>
            </label>

            <button type='submit'>Add New</button>
            <button type='button' onClick={event => clearCompleted(event)}>Clear Completed</button>
        </Form>
    )
}

const FormikForm = withFormik({
    mapPropsToValues({ todo }) {
        return {
            todo: todo || '',
        }
    },

    handleSubmit(values, { props, resetForm, setSubmitting }) {
        props.addItem(values.todo)
        resetForm()
        setSubmitting(false)
    }
})(TodoForm)

export default FormikForm
