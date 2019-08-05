import React from "react"
import { Flex, Box } from "@rebass/grid"
import Close from "../../images/icons/close.svg"
import styled from "styled-components"

const Modal = ({ children, closeModal }) => (
  <Wrapper alignItems="center" justifyContent="center">
    <CloseButton onClick={() => closeModal()}>
      <img src={Close} alt="CLose" />
    </CloseButton>
    <Box px={[3, 4]}>{children}</Box>
  </Wrapper>
)

export default Modal

const Wrapper = styled(Flex)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(58, 64, 90, 0.95);
  z-index: 9999;
`

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: white;
  height: 50px;
  width: 50px;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    transform: scale(0.75);
  }
`
