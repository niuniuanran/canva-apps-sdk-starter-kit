import React, { useState } from 'react'
import { ImportDataStep } from './steps/ImportDataStep'
enum CVStep {
  ImportData,
  SelectTemplate,
  OptimizeCV,
}

export const App = () => {
  const [currentStep, setCurrentStep] = useState<CVStep>(CVStep.ImportData)
  switch (currentStep) {
    case CVStep.ImportData:
      return (
        <ImportDataStep
          onDataImported={() => setCurrentStep(CVStep.SelectTemplate)}
        />
      )
    case CVStep.SelectTemplate:
      return <div>Select template</div>
  }
}
