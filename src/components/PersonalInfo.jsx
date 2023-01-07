import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

export const PersonalInfo = ({ currentStep, setCurrentStep, formData, setFormData }) => {
    // TO DO: Add state for each input and disable button when they aren't completed
    return (
        <>
            <h1 className="text-dark-blue fw-bold">Personal Info</h1>
            <p className="text-muted lh-1">Please provide your name, email and phone number.</p>
            <Form.Group className="mb-3">
                <Form.Label className="mb-0 text-dark-blue">Name</Form.Label>
                <Form.Control type="text" placeholder="Stephen King" 
                    value={formData.name} 
                    onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                } />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label className="mb-0 text-dark-blue">Email Address</Form.Label>
                <Form.Control type="email" placeholder="e.g. stephenking@lorem.com"
                    value={formData.email} 
                    onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                } />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label className="mb-0 text-dark-blue">Phone Number</Form.Label>
                <Form.Control type="phone" placeholder="eg +1 234 567 890"
                    value={formData.phone} 
                    onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                } />
            </Form.Group>
            <Button className="bg-dark-blue text-light w-auto ms-auto d-block"
                onClick={() => {
                    setCurrentStep(currentStep + 1)
                }}>
                Next Step
            </Button>
        </>
    )
}