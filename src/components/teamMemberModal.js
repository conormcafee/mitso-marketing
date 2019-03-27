import React from "react"
import styled from "styled-components"
import {Flex, Box} from "@rebass/grid"
import {BLACK} from "../variables"
import CloseIcon from "../images/icons/close.svg"

const TeamMemberModal = (props) => {
    return (
        <Overlay onClick={props.closeModal}>
            <Member flexWrap={['wrap', 'wrap', 'nowrap']}>
                <ImageWrapper width={[1, 1, 1/2]}>
                    <Image style={{ backgroundImage: `url(${props.member.img})`}}></Image>
                </ImageWrapper>
                <Bio width={[1, 1, 1/2]} p={[3,4]}>
                    <Close onClick={props.closeModal}>
                        <img src={CloseIcon} alt="Close Modal" />
                    </Close>
                    <Name>{props.member.name}</Name>
                    <LongFormBio>
                        <p>{props.member.what}</p>
                        <p>{props.member.where}</p>
                        <p>{props.member.when}</p>
                        <p>{props.member.why}</p>
                        <p>{props.member.psst}</p>
                    </LongFormBio>
                </Bio>
            </Member>
        </Overlay>       
    )   
}
export default TeamMemberModal

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(58,64,90, 0.95);
    z-index: 2019;
    padding: 32px;
    overflow: scroll;
`

const Member = styled(Flex)`
    background: #ffffff;
    box-shadow: -4px 6px 4px 0 rgba(0, 0, 0, 0.1);
    max-width: 1000px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 8px;
    overflow: hidden;
`

const ImageWrapper = styled(Box)`
    position: relative;
    
    @media only screen and (max-width: 51.9375em) {
        height: 200px;
    }
`

const Image = styled.div`
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`;

const Bio = styled(Box)`
    position: relative;
`

const Close = styled.button`
    position: absolute;
    top: 16px;
    right: 16px;
    background: transparent;
    border: none;

    @media only screen and (min-width: 52em) {
        top: 32px;
        right: 32px;
    }
`

const Name = styled.h3`
    margin-top: 0;
`

const LongFormBio = styled.div`
    font-size: 14px;

    p:first-of-type {
        color: ${BLACK}
    }
`