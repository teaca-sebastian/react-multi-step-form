import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const schema = yup.object().shape({
    name: yup.string().required('Your name is required'),
    email: yup.string().email('Your email should be valid').required('Your email is required'),
    phone: yup.string().matches(phoneRegExp, 'Phone number is not valid').required('Your phone number is required')
})

export const PersonalInfo = ({ currentStep, setCurrentStep, formData, setFormData }) => {
    // TO DO: Add state for each input and disable button when they aren't completed

    const { register, formState: { errors }, trigger } = useForm({
        resolver: yupResolver(schema)
    });

    console.log('errors', errors)

    return (
        <>
            <h1 className="text-dark-blue fw-bold">Personal Info</h1>
            <p className="text-muted lh-1">Please provide your name, email and phone number.</p>
            <Form.Group className="mb-3">
                <Form.Label className="mb-0 text-dark-blue">Name</Form.Label>
                <Form.Control
                    {...register("name")}
                    type="text"
                    placeholder="Stephen King"
                    name="name"
                    value={formData.name}
                    onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                    } />
                    <p className="text-danger mb-0">
                    {errors.name?.message}
                </p>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label className="mb-0 text-dark-blue">Email Address</Form.Label>
                <Form.Control
                    {...register("email")}
                    type="email"
                    placeholder="e.g. stephenking@lorem.com"
                    name="email"
                    value={formData.email}
                    onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                    } />
                    <p className="text-danger mb-0">
                    {errors.email?.message}
                </p>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label className="mb-0 text-dark-blue">Phone Number</Form.Label>
                <Form.Control
                    {...register("phone")}
                    type="phone"
                    placeholder="eg +1 234 567 890"
                    name="phone"
                    value={formData.phone}
                    onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                    } />
                <p className="text-danger mb-0">
                    {errors.phone?.message}
                </p>
            </Form.Group>
            <Button className="bg-dark-blue text-light w-auto ms-auto d-block"
                onClick={async () => {
                    if (await trigger()) {
                        setCurrentStep(currentStep + 1)
                    }
                }}>
                Next Step
            </Button>
        </>
    )
}