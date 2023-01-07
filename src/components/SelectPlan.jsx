import Card from "react-bootstrap/Card"
import Row from "react-bootstrap/Row"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import { useEffect, useState, useRef } from "react"
import { useClassConditional } from "../hooks/useClassConditional"

import { plans } from "../data/data"

export const SelectPlan = ({ currentStep, setCurrentStep, formData, setFormData }) => {
    const [selectedPlan, setSelectedPlan] = useState(null)
    const classNames = useClassConditional()
    const subscriptionCheckbox = useRef()

    const changeSubscriptionCheckbox = (event) => {
        if (event.target.checked) {
            setFormData({ ...formData, subscription: 'yearly'})
        } else {
            setFormData({ ...formData, subscription: 'monthly'})
        }
    }

    const changePlan = (type) => {
        setSelectedPlan(type)
    }
    
    useEffect(() => {
        if (formData.subscription === 'yearly') {
            subscriptionCheckbox.current.checked = true
        } else {
            subscriptionCheckbox.current.checked = false
        }
    }, [subscriptionCheckbox])

    const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);

    return (
        <>
            <h1 className="text-dark-blue fw-bold">Select your plan</h1>
            <p className="text-muted lh-1">You have the option of monthly or yearly billing</p>
            <div className="row gap-3">
                {plans.map((plan, key) => {
                    return (
                        <div className="col-12" key={key}>
                            <Card className={classNames('plan shadow-sm', formData.plan === plan.name && "bg-light-gray border border-blue")} onClick={() => {setFormData({ ...formData, plan: plan.name })}}>
                                <Row>
                                    <div className="ps-4 col-3 d-flex justify-content-center align-items-center"><img src={`src/assets/images/icon-${plan.name}.svg`} alt={plan.name} /></div>
                                    <Card.Body className="col-9 p-0 py-3 d-flex flex-column justify-content-center">
                                        <h4 className="text-dark fw-bold m-0">{capitalize(plan.name)}</h4>
                                        <p className="text-muted mb-0">{formData.subscription === 'yearly' ? `$${plan.price * 10}/yr *` : `$${plan.price}/mo`}</p>
                                    </Card.Body>
                                </Row>
                            </Card>
                        </div>
                    )
                })}
                {formData.subscription === 'yearly' && <p className="text-center text-muted mb-0">*2 months free</p>}
                <div className="col-12 py-3 d-flex justify-content-center align-items-center">
                        <p className="fw-bold text-dark-blue fs-4 m-0">Monthly</p>
                        <Form.Check
                            className="fs-3 ms-3"
                            ref={subscriptionCheckbox}
                            type="switch"
                            id="custom-switch"
                            onChange={(e) => {
                                changeSubscriptionCheckbox(e)
                            }}
                        />
                        <p className="fw-bold text-muted fs-4 m-0">Yearly</p>
                </div>
                <div className="col-12 d-flex justify-content-between align-items-center">
                    <Button className="text-muted bg-transparent border-0 w-auto"
                        onClick={() => {
                            setCurrentStep(currentStep - 1)
                        }}>
                        Go back
                    </Button>
                    <Button className="bg-dark-blue text-light w-auto"
                        onClick={() => {
                            setCurrentStep(currentStep + 1)
                        }} disabled={formData.plan === ''}>
                        Next Step
                    </Button>
                </div>
            </div>
        </>
    )
}