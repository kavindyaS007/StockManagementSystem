import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, FormControl, Button } from "react-bootstrap";

const StoreForm = (props) => {
    const validationSchema = Yup.object().shape({
        location: Yup.string().required("Required"),
        capacity: Yup.string().required("Required"),
    });
    console.log(props);

    return(
        <div className="form-wrapper">
            <Formik {...props} validationSchema={validationSchema}>
                <Form>
                    <FormGroup>
                        <label>Store Location</label>
			            <Field name="location" type="text" className="form-control" />
                        <ErrorMessage name="location" className="d-block invalid-feedback" component="span"/>
                    </FormGroup>
                    <br/>
                    <FormGroup>
                        <label>Store Capacity</label>
			            <Field name="capacity" type="text" className="form-control" />
                        <ErrorMessage name="capacity" className="d-block invalid-feedback" component="span"/>
                    </FormGroup>
                    <br/>
                    <Button variant="danger" size="lg" block="block" type="submit">{props.children}</Button>
                </Form>
            </Formik>
        </div>
    )
}

export default StoreForm;