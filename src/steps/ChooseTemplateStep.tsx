import React, { FC } from 'react'
import templates from '../../assets/images/templates.png'
import { Rows, Title } from '@canva/app-ui-kit'

interface ChooseTemplateStepProps {
  onTemplateSelected: () => void
}

export const ChooseTemplateStep: FC<ChooseTemplateStepProps> = ({
  onTemplateSelected,
}) => {
  return (
    <Rows spacing="2u">
      <Title>Choose a Template</Title>
      <img src={templates} onClick={onTemplateSelected} />
    </Rows>
  )
}
