import React from "react"
import { Box } from "@rebass/grid"
import styled from "styled-components"
import { FONT_BOLD, BLACK, SECONDARY } from "../../variables"
import Button from "../button"

const Form = () => (
  <Wrapper
    name="contact"
    method="post"
    action="/success"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
  >
    <input type="hidden" name="bot-field" />

    <div>
      <Label htmlFor="name">Name</Label>
      <Input type="text" name="name" id="name" />
    </div>

    <div>
      <Label htmlFor="email">Email</Label>
      <Input type="email" name="email" id="email" />
    </div>

    <div>
      <Label htmlFor="message">Message</Label>
      <Textarea name="message" id="message" rows="10" required />
    </div>

    <Box mt={4}>
      <Button type="submit">Send a Message</Button>
      {/* <input type="submit" value="Drop a line" /> */}
    </Box>
  </Wrapper>
)

export default Form

const Wrapper = styled.form`
  background: ${BLACK};
  border-radius: 8px;
  box-shadow: -4px 6px 4px 0 rgba(0, 0, 0, 0.1);
  color: white;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  padding: 32px;
`

const Input = styled.input`
  min-height: 44px;
  display: block;
  width: 100%;
  border: 2px solid ${BLACK};
  box-shadow: -4px 6px 4px 0 rgba(0, 0, 0, 0.1);
  padding-left: 16px;
  padding-right: 16px;
  box-sizing: border-box;

  &:focus {
    outline: 0;
    border: 2px solid ${SECONDARY};
  }
`

const Textarea = styled.textarea`
  display: block;
  width: 100%;
  border: 2px solid ${BLACK};
  padding-left: 16px;
  padding-right: 16px;
  box-shadow: -4px 6px 4px 0 rgba(0, 0, 0, 0.1);
  box-sizing: border-box;

  &:focus {
    outline: 0;
    border: 2px solid ${SECONDARY};
  }
`

const Label = styled.label`
  display: block;
  font-family: ${FONT_BOLD};
  font-weight: 700;
  font-size: 22px;
  line-height: 1.4;
  margin-top: 16px;
  margin-bottom: 16px;
`
