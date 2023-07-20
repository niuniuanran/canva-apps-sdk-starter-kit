import React, { useState } from 'react'
import { ImportDataStep } from './steps/ImportDataStep'
import { ChooseTemplateStep } from './steps/ChooseTemplateStep'
import { OptimiseCVStep } from './steps/OptimiseCVStep'

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
      return (
        <ChooseTemplateStep
          onTemplateSelected={() => setCurrentStep(CVStep.OptimizeCV)}
        />
      )
    case CVStep.OptimizeCV:
      return <OptimiseCVStep />
  }
}
