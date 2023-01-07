import { Confirm } from "./components/Confirm"
import { PersonalInfo } from "./components/PersonalInfo"
import { PickAddons } from "./components/PickAddons"
import { SelectPlan } from "./components/SelectPlan"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Form from "react-bootstrap/Form"
import { useState } from "react"
import { useClassConditional } from "./hooks/useClassConditional"
import { ThankYou } from "./components/ThankYou"

function App() {
  const [currentStep, setCurrentStep] = useState(0)
  const classNames = useClassConditional()

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    plan: "pro",
    subscription: "monthly",
    addons: [
    ],
  });

  const stepList = [
    <PersonalInfo
      formData={formData}
      setFormData={setFormData}
      currentStep={currentStep}
      setCurrentStep={setCurrentStep}
    />,
    <SelectPlan
      formData={formData}
      setFormData={setFormData}
      currentStep={currentStep}
      setCurrentStep={setCurrentStep}
    />,
    <PickAddons
      formData={formData}
      setFormData={setFormData}
      currentStep={currentStep}
      setCurrentStep={setCurrentStep}
    />,
    <Confirm
      formData={formData}
      setFormData={setFormData}
      currentStep={currentStep}
      setCurrentStep={setCurrentStep}
    />,
    <ThankYou />
  ]

  return (
    <div className="d-flex align-items-center vh-100 bg-cool-gray overflow-hidden">
      <Container className='px-0'>
        <div className="w-95 shadow mx-auto rounded bg-white">
          <Row className="p-3 gap-2 pt-4">
            <ul className="col-11 bg-sidebar list-unstyled bg-blue d-flex justify-content-center mx-auto rounded-bottom shadow-sm gap-3 py-3 position-absolute">
              {stepList.map((step, index) => {
                if (index < 4) return <li key={index}><i className={classNames('bi fs-1 text-light', currentStep === index ? `bi-${index + 1}-circle-fill` : `bi-${index + 1}-circle`)}></i></li>
              })}
            </ul>
            <Form className="col-12 mx-auto main-form" >
              {stepList[currentStep]}
            </Form>
          </Row>
        </div>
      </Container>
    </div>
  )
}

export default App
