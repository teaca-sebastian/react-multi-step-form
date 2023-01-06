import Card from "react-bootstrap/Card"
import Row from "react-bootstrap/Row"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import { useState } from "react"
import { useClassConditional } from "../hooks/useClassConditional"

export const SelectPlan = ({ currentStep, setCurrentStep }) => {
    const [selectedPlan, setSelectedPlan] = useState(null)
    const [planSubscription, setPlanSubscription] = useState(null)
    const classNames = useClassConditional()

    const changePlan = (type) => {
        setSelectedPlan(type)
    }

    return (
        <>
            <h1 className="text-dark-blue fw-bold">Select your plan</h1>
            <p className="text-muted lh-1">You have the option of monthly or yearly billing</p>
            <div className="row gap-3">
                <div className="col-12">
                    <Card className={classNames('plan shadow-sm', selectedPlan === 'arcade' && "bg-light-gray border border-blue")} onClick={() => changePlan('arcade')}>
                        <Row>
                            <div className="ps-4 col-3 d-flex justify-content-center align-items-center"><img src="src/assets/images/icon-arcade.svg" alt="arcade plan icon" /></div>
                            <Card.Body className="col-9 p-0 py-3 d-flex flex-column justify-content-center">
                                <h4 className="text-dark fw-bold m-0">Arcade</h4>
                                {planSubscription === 'monthly' ? <>
                                <p className="text-muted mb-0">$90/mo *</p>
                                </> : <>
                                <p className="text-muted mb-0">$9/mo</p>
                                </>}
                            </Card.Body>
                        </Row>
                    </Card>
                </div>
                <div className="col-12">
                    <Card className={classNames('plan shadow-sm', selectedPlan === 'advanced' && "bg-light-gray border border-blue")} onClick={() => changePlan('arcade')} onClick={() => changePlan('advanced')}>
                        <Row>
                            <div className="ps-4 col-3 d-flex justify-content-center align-items-center"><img src="src/assets/images/icon-advanced.svg" alt="advanced plan icon" /></div>
                            <Card.Body className="col-9 p-0 py-3 d-flex flex-column justify-content-center">
                                <h4 className="text-dark fw-bold m-0">Advanced</h4>
                                {planSubscription === 'monthly' ? <>
                                <p className="text-muted mb-0">$120/mo *</p>
                                </> : <>
                                <p className="text-muted mb-0">$12/mo</p>
                                </>}
                            </Card.Body>
                        </Row>
                    </Card>
                </div>
                <div className="col-12">
                    <Card className={classNames('plan shadow-sm', selectedPlan === 'pro' && "bg-light-gray border border-blue")} onClick={() => changePlan('arcade')} onClick={() => changePlan('pro')}>
                        <Row>
                            <div className="ps-4 col-3 d-flex justify-content-center align-items-center"><img src="src/assets/images/icon-pro.svg" alt="pro plan icon" /></div>
                            <Card.Body className="col-9 p-0 py-3 d-flex flex-column justify-content-center">
                                <h4 className="text-dark fw-bold m-0">Pro</h4>
                                {planSubscription === 'monthly' ? <>
                                <p className="text-muted mb-0">$150/mo *</p>
                                </> : <>
                                <p className="text-muted mb-0">$15/mo</p>
                                </>}
                            </Card.Body>
                        </Row>
                    </Card>
                </div>
                {planSubscription === 'monthly' && <p className="text-center text-muted mb-0">*2 months free</p>}
                <div className="col-12 py-3 d-flex justify-content-center align-items-center">
                        <p className="fw-bold text-dark-blue fs-4 m-0">Monthly</p>
                        <Form.Check
                            className="fs-3 ms-3"
                            type="switch"
                            id="custom-switch"
                            onChange={() => {
                                planSubscription === 'monthly' ? setPlanSubscription('yearly') : setPlanSubscription('monthly')
                                console.log(planSubscription)
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
                        }} disabled={selectedPlan === null}>
                        Next Step
                    </Button>
                </div>
            </div>
        </>
    )
}