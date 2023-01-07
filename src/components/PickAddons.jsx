import Card from "react-bootstrap/Card"
import Row from "react-bootstrap/Row"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import { useState } from "react"
import { useClassConditional } from "../hooks/useClassConditional"

import { addonsList } from "../data/data"

export const PickAddons = ({ currentStep, setCurrentStep, formData, setFormData }) => {
    const [selectedAddons, setSelectedAddons] = useState([])
    const classNames = useClassConditional()

    const isAddonAdded = (addon) => {
        return formData.addons.some(item => item === addon.name)
    }

    const addAddon = (addon) => {
        setFormData({...formData, addons: [...formData.addons, addon.name]})
    }

    const removeAddon = (addonToRemove) => {
        const newArray = formData.addons.filter(addon => addon !== addonToRemove.name)
        setFormData({...formData, addons: newArray})
    }

    const addAddonCheckbox = (event, addon) => {
        if (event.target.checked && !isAddonAdded(addon)) {
            addAddon(addon)
        } else {
            removeAddon(addon)
        }
    }

    const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);

    return (
        <>
            <h1 className="text-dark-blue fw-bold">Pick add-ons</h1>
            <p className="text-muted lh-1">Add-ons help enhance your gaming experience</p>
            <div className="row gap-3">
                {addonsList.map((addon, key) => {
                    return (
                        <div className="col-12" key={key}>
                            {/* to do: check if unchecking each addon removes the selected classes: */}
                            <Card className={classNames('shadow-sm', isAddonAdded(addon) && "bg-light-gray border border-blue")}>
                                <Row>
                                    <div className="ps-4 col-3 d-flex justify-content-center align-items-center">
                                        <Form.Check
                                            className="fs-1"
                                            type={"checkbox"}
                                            onChange={event => {
                                                addAddonCheckbox(event, addon)
                                            }}
                                        />
                                    </div>
                                    <Card.Body className="col-6 p-0 py-3 d-flex flex-column justify-content-center">
                                        <h4 className="text-dark fw-bold m-0">{capitalize(addon.name)}</h4>
                                        <p className="text-muted mb-0 lh-1">{addon.desc}</p>
                                    </Card.Body>
                                    <div className="col-3 d-flex justify-content-center align-items-center">
                                        {/* planSubscription will be imported or accessed globally from SelectPlan */}
                                        <p className="text-blue fw-bold mb-0">{formData.subscription === 'yearly' ? `$${addon.price * 10}/yr` : `$${addon.price}/mo`}</p>
                                    </div>
                                </Row>
                            </Card>
                        </div>
                    )
                })}
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
                        }}>
                        Next Step
                    </Button>
                </div>
            </div>
        </>
    )
}