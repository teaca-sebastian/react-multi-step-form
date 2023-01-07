import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"

import { plans, addonsList } from "../data/data"

export const Confirm = ({ formData, setFormData, currentStep, setCurrentStep }) => {

    const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);

    const formatTitle = (s) => capitalize(s.split('-')[0]) + ' ' + s.split('-')[1]

    const findPrice = (array, name) => array.find(item => item.name === name).price

    const totalPrice = () => {
        const planPrice = findPrice(plans, formData.plan)
        const addedAddons = addonsList.filter(i => formData.addons.includes(i.name))
        const addedAddonsPrice = addedAddons.reduce((a, b) => a + b.price, 0)
        const total = planPrice + addedAddonsPrice
        if (formData.subscription === 'yearly') {
            return `$${total * 10}/yr`
        } else {
            return `$${total}/mo`
        }
    }

    return (
        <>
            <h1 className="text-dark-blue fw-bold">Finishing up</h1>
            <p className="text-muted lh-1">Double-check everything looks OK before confirming</p>
            <Card className="p-2 bg-light-gray border-0">
                <Card.Header className="bg-transparent">
                    <div className="row">
                        <div className="col">
                            <p className="fw-bold text-dark-blue mb-0">{`${capitalize(formData.plan)}  (${capitalize(formData.subscription)})`}</p>
                            <a className="text-muted mb-0" href="#">Change</a>
                        </div>
                        <div className="col-3 d-flex justify-content-center align-items-center text-dark-blue fw-bold">{formData.subscription === 'yearly' ? `$${(findPrice(plans, formData.plan) * 10)}/yr` : `$${findPrice(plans, formData.plan)}/mo`}</div>
                    </div>
                </Card.Header>
                <Card.Footer className="bg-transparent">
                    <div className="row">
                        {formData.addons.map((addon, key) => {
                            return (
                                <>
                                    <div className="col-12 d-flex justify-content-between align-items-center">
                                        <p className="text-muted mb-0">{formatTitle(addon)}</p>
                                        <p className="text-dark-blue mb-0">{formData.subscription === 'yearly' ? `$${(findPrice(addonsList, addon) * 10)}/yr` : `$${findPrice(addonsList, addon)}/mo`}</p>
                                    </div>
                                </>
                            )
                        })}
                    </div>
                </Card.Footer>
            </Card>
            <div className="row">
                <div className="col-11 mx-auto mb-3 mt-4 d-flex align-items-center">
                    <p className="text-muted mb-0">Total {formData.subscription === 'yearly' ? `(per year)` : `(per month)`}</p>
                    <p className="text-blue mb-0 fs-3 fw-bold ms-auto">{totalPrice()}</p>
                </div>
            </div>
            <div className="row">
                <div className="col-12 d-flex">
                <Button className="text-muted bg-transparent border-0 w-auto"
                        onClick={() => {
                            setCurrentStep(currentStep - 1)
                        }}>
                        Go back
                    </Button>
                    <Button className="bg-blue text-light w-auto ms-auto d-block"
                        onClick={() => {
                            setCurrentStep(currentStep + 1)
                        }}>
                        Confirm
                    </Button>
                </div>
            </div>
        </>
    )
}