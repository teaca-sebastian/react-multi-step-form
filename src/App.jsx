import { Confirm } from "./components/Confirm"
import { PersonalInfo } from "./components/PersonalInfo"
import { PickAddons } from "./components/PickAddons"
import { SelectPlan } from "./components/SelectPlan"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Form from "react-bootstrap/Form"
import { useState } from "react"
import { useClassConditional } from "./hooks/useClassConditional"

function App() {
  const [currentStep, setCurrentStep] = useState(2)
  const classNames = useClassConditional()

  const stepList = [
    <PersonalInfo
      currentStep={currentStep}
      setCurrentStep={setCurrentStep}
    />,
    <SelectPlan 
      currentStep={currentStep}
      setCurrentStep={setCurrentStep}
    />,
    <PickAddons
      currentStep={currentStep}
      setCurrentStep={setCurrentStep}
    />,
    <Confirm 
      currentStep={currentStep}
      setCurrentStep={setCurrentStep}
    />
  ]

  return (
    <div className="d-flex align-items-center vh-100 bg-cool-gray overflow-hidden">
      <Container className='px-0'>
        <div className="w-95 shadow mx-auto rounded bg-white">
          <Row className="p-3 gap-2 pt-4">
            <ul className="col-11 bg-sidebar list-unstyled bg-blue d-flex justify-content-center mx-auto rounded-bottom shadow-sm gap-3 py-3 position-absolute">
              {stepList.map((step, index) => {
                return <li><i className={classNames('bi fs-1 text-light', currentStep === index ? `bi-${index + 1}-circle-fill` : `bi-${index + 1}-circle`)}></i></li>
              } )}
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
