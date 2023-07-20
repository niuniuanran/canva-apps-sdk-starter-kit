import { Rows, Button, Title } from '@canva/app-ui-kit'
import React, { useState } from 'react'
import { FC } from 'react'
import linkedin from '../../assets/images/linkedin300.png'
import cvUpload from '../../assets/images/cv-upload300.png'

interface Step1Props {
  onDataImported: () => void
}

export const ImportDataStep: FC<Step1Props> = ({ onDataImported }) => {
  const [linkedInLoading, setLinkedInLoading] = useState<boolean>(false)
  const importFromPDF = () => {
    let input = document.createElement('input')
    input.type = 'file'
    input.onchange = (_) => {
      // i'm not really handling the file 😂
      onDataImported()
    }
    input.click()
  }
  const importFromLinkedIn = () => {
    setLinkedInLoading(true)
    // i'm not really importing Linkedin 😂
    setTimeout(() => {
      setLinkedInLoading(false)
      onDataImported()
    }, 700)
  }

  return (
    <Rows spacing="2u">
      <Title>Import your CV data</Title>
      <Rows spacing="1u" align="center">
        <img src={cvUpload} width={100} />
        <Button
          variant="primary"
          stretch
          onClick={importFromPDF}
          disabled={linkedInLoading}
        >
          Import from PDF
        </Button>
      </Rows>
      <Rows spacing="1u" align="center">
        <img src={linkedin} width={100} />
        <Button
          variant="primary"
          stretch
          onClick={importFromLinkedIn}
          loading={linkedInLoading}
        >
          Import from LinkedIn
        </Button>
      </Rows>
    </Rows>
  )
}
