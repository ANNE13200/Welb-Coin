import React, { useCallback, useState, useMemo } from 'react'
import styled from 'styled-components'

import Button from '../Button'
import CardIcon from '../CardIcon'
import Modal, { ModalProps } from '..//Modal'
import ModalActions from '..//ModalActions'
import ModalContent from '../ModalContent'
import ModalTitle from '../ModalTitle'
import { useTranslation, Trans } from "react-i18next";

interface DisclaimerModal extends ModalProps {
  onConfirm: () => void
}

const StyledLink = styled.a`
  color: ${(props) => props.theme.color.grey[400]};
  padding-left: 25%;
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.color.grey[500]};
  }
`

const DisclaimerModal: React.FC<DisclaimerModal> = ({
  onConfirm,
  onDismiss,
}) => {
  const [step, setStep] = useState('disclaimer')

  const handleConfirm = useCallback(() => {
    onConfirm()
    onDismiss()
  }, [onConfirm, onDismiss])

    const { t } = useTranslation();

  const modalContent = useMemo(() => {
    if (step === 'disclaimer') {
      return (
        <div className={"modal"}>
          <p>{ t("disclaimermodal.modalcontent.p1") }</p>
          <p> { t("disclaimermodal.modalcontent.p2") }</p>
          <p>{ t("disclaimermodal.modalcontent.p3") }</p>
        </div>
      )
    } else {
      return (
        <div className={"center"}>
          <StyledLink target="_blank" href="https://app.defhold.com">
              { t("disclaimermodal.btnaccess") }
          </StyledLink>
        </div>
      )
    }
  }, [step])

  const button = useMemo(() => {
    if (step === 'disclaimer') {
      return (
        <Button
          text={ t("disclaimermodal.btnnext") }
          variant="secondary"
          onClick={() => setStep('uniswap')}
        />
      )
    } else {
      return <Button text={ t("disclaimermodal.btncontinue") } onClick={handleConfirm} />
    }
  }, [setStep, step, handleConfirm])

  return (
    <Modal>
      <ModalTitle text={t("disclaimermodal.modalcontent.titel")} />
      <ModalContent>{modalContent}</ModalContent>
      <ModalActions>{button}</ModalActions>
    </Modal>
  )
}

export default DisclaimerModal
