import React from "react";
import styled from "styled-components";

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.8);
    z-index: 2019;
    padding: 32px;
    overflow: scroll;
`;

const Member = styled.div`
    background: #ffffff;
    box-shadow: -4px 6px 4px 0 rgba(0, 0, 0, 0.1);
    padding: 32px;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 8px;
`;

const TeamMemberModal = (props) => {
    return (
        <Overlay>
            <Member>
                <img src={props.member.img} alt={`${props.member.name} of MiTSO Marketing`} />
                <button onClick={props.closeModal}>Close</button>
                <p>{props.member.name}</p>
                <p>{props.member.what}</p>
                <p>{props.member.where}</p>
                <p>{props.member.when}</p>
                <p>{props.member.why}</p>
                <p>{props.member.psst}</p>
            </Member>
        </Overlay>       
    )   
}
export default TeamMemberModal