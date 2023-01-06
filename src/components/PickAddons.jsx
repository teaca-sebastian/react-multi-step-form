import Card from "react-bootstrap/Card"
import Row from "react-bootstrap/Row"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import { useState } from "react"
import { useClassConditional } from "../hooks/useClassConditional"

export const PickAddons = ({ currentStep, setCurrentStep }) => {
    const [selectedAddons, setSelectedAddons] = useState([])
    const classNames = useClassConditional()

    const isAddonAdded = (addon) => {
        return Array.from(selectedAddons).some(item => item === addon)
    }

    const addAddon = (addon) => {
        setSelectedAddons([ ...selectedAddons, addon])
        console.log(selectedAddons)
    }

    const removeAddon = (addonToRemove) => {
        setSelectedAddons(selectedAddons.filter(addon => addon !== addonToRemove))
        console.log(selectedAddons)
    }

    return (
        <>
            <h1 className="text-dark-blue fw-bold">Pick add-ons</h1>
            <p className="text-muted lh-1">Add-ons help enhance your gaming experience</p>
            <div className="row gap-3">
                <div className="col-12">
                    <Card className={classNames('shadow-sm', isAddonAdded("online-service") && "bg-light-gray border border-blue")}>
                        <Row>
                            <div className="ps-4 col-3 d-flex justify-content-center align-items-center">
                                <Form.Check
                                    className="fs-1"
                                    type={"checkbox"}
                                    onChange={(e) => {
                                        if (e.target.checked) {
                                            addAddon('online-service')
                                        } else {
                                            removeAddon('online-service')
                                        }
                                    }}
                                />
                            </div>
                            <Card.Body className="col-6 p-0 py-3 d-flex flex-column justify-content-center">
                                <h4 className="text-dark fw-bold m-0">Online service</h4>
                                <p className="text-muted mb-0 lh-1">Access to multiplayer games</p>
                            </Card.Body>
                            <div className="col-3 d-flex justify-content-center align-items-center">
                                <p className="text-blue fw-bold">+$10/yr</p>
                            </div>
                        </Row>
                    </Card>
                </div>
                <div className="col-12">
                    <Card className={classNames('shadow-sm', isAddonAdded("larger-storage") && "bg-light-gray border border-blue")}>
                        <Row>
                            <div className="ps-4 col-3 d-flex justify-content-center align-items-center">
                                <Form.Check
                                    className="fs-1"
                                    type={"checkbox"}
                                    onChange={(e) => {
                                        if (e.target.checked) {
                                            addAddon('larger-storage')
                                        } else {
                                            removeAddon('larger-storage')
                                        }
                                    }}
                                />
                            </div>
                            <Card.Body className="col-6 p-0 py-3 d-flex flex-column justify-content-center">
                                <h4 className="text-dark fw-bold m-0">Larger storage</h4>
                                <p className="text-muted mb-0 lh-1">Extra 1TB of cloud save</p>
                            </Card.Body>
                            <div className="col-3 d-flex justify-content-center align-items-center">
                                <p className="text-blue fw-bold">+$20/yr</p>
                            </div>
                        </Row>
                    </Card>
                </div>
                <div className="col-12">
                    <Card className={classNames('shadow-sm', isAddonAdded("customizable-profile") && "bg-light-gray border border-blue")}>
                        <Row>
                            <div className="ps-4 col-3 d-flex justify-content-center align-items-center">
                                <Form.Check
                                    className="fs-1"
                                    type={"checkbox"}
                                    onChange={(e) => {
                                        if (e.target.checked) {
                                            addAddon('customizable-profile')
                                        } else {
                                            removeAddon('customizable-profile')
                                        }
                                    }}
                                />
                            </div>
                            <Card.Body className="col-6 p-0 py-3 d-flex flex-column justify-content-center">
                                <h4 className="text-dark fw-bold m-0">Customizable profile</h4>
                                <p className="text-muted mb-0 lh-1">Custom theme on your profile</p>
                            </Card.Body>
                            <div className="col-3 d-flex justify-content-center align-items-center">
                                <p className="text-blue fw-bold">+$10/yr</p>
                            </div>
                        </Row>
                    </Card>
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
                        }} disabled={selectedAddons.length === 0}>
                        Next Step
                    </Button>
                </div>
            </div>
        </>
    )
}