import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, FormControl, Button } from "react-bootstrap";

const ItemForm = (props) => {
    const validationSchema = Yup.object().shape({
        itemName: Yup.string().required("Required"),
    });
    console.log(props);

    return(
        <div className="form-wrapper">
            <Formik {...props} validationSchema={validationSchema}>
                <Form>
                    <FormGroup>
                        <label>Item Name</label>
			            <Field name="itemName" type="text" className="form-control" />
                        <ErrorMessage name="itemName" className="d-block invalid-feedback" component="span"/>
                    </FormGroup>
                    <br/>
                    <Button variant="danger" size="lg" block="block" type="submit">{props.children}</Button>
                </Form>
            </Formik>
        </div>
    )
}

export default ItemForm;