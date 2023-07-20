import React, { FC } from 'react'
import templates from '../../assets/images/template-select.png'

interface ChooseTemplateStepProps {
  onTemplateSelected: () => void
}

export const ChooseTemplateStep: FC<ChooseTemplateStepProps> = () => {
  return <img src={templates} />
}
