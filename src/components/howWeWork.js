import React from "react";
import styled from "styled-components";
import {Flex, Box} from "@rebass/grid";
import {BLACK, SECONDARY, ACCENT} from "../variables";
import QUOTE from "../images/icons/quote.svg";

const Wrapper = styled(Box)`
    background: ${BLACK};
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    position: relative;

    &:after {
        content: "";
        position: absolute;
        top: 0;
        right: -250px;
        bottom: 0;
        height: 100%;
        width: 250px;
        background: ${BLACK};
    }
`;

const Title = styled.h2`
    color: #ffffff;
    margin-bottom: 0;

    span {
        color: ${SECONDARY};
        margin-left: 5px;
    }
    @media only screen and (min-width: 1000px) {
        transform: translateX(250px);
    }
`;

const SubTitle = styled.h3`
    color: #ffffff;
    margin-top: 0;
`;

const Text = styled.p`
    color: #ffffff;
`;

const QuoteWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
`;

const Img = styled.img`
    transform: translate(-50px, -50px);
`;

const ContentWrapper = styled(Flex)`
    overflow: hidden;

    @media only screen and (min-width: 1000px) {
        transform: translateX(250px);
    }
`;

const Content = styled(Box)`
    position: relative;
    z-index: 1;
    flex: 1;
    min-width: 250px;
    opacity: ${props => props.active ? `1` : `0`};
    transform: translateX(${props => props.active && props.index === 0 ? `0%` : (props.active && props.index === 1 ? `-100%` : (props.active && props.index === 2 ? `-200%` : `-300%`))});
    transition: transform 500ms ease-in-out, opacity 150ms ease-in-out;

    @media only screen and (min-width: 500px) {
        min-width: 400px;
    }
`;

const Nav = styled.ol`
    position: relative;
    z-index: 1;
    list-style: none;
    padding-left: 0;
    display: flex;
    align-items: center;

    @media only screen and (min-width: 1000px) {
        transform: translateX(250px);
    }
`;

const Button = styled.button`
    font-size: 0;
    color: ${SECONDARY};
    background-color: ${props => props.active ? `${ACCENT}` : `${SECONDARY}`};
    border: 4px solid ${SECONDARY};
    border-radius: 24px;
    height: 24px;
    width: 24px;
    margin-left: 10px;
    transition: background-color 150ms ease-in-out;

    &:hover {
        background-color: ${ACCENT};
    }
`;

class HowWeWork extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0
        }
    }

    toggleStatus = (data) => this.setState({ index: data })

    render() {
        return (
            <Wrapper width={[1, 1, 2/3 ]} p={4}>
                <QuoteWrapper>
                    <Img src={QUOTE} alt="Quote" />
                </QuoteWrapper>

                <Title>How We Work<span>.</span></Title>

                <ContentWrapper>
                    {data.map((item, index) => (
                        <Content key={index} index={index} active={this.state.index === index}>
                            <Text>{item.text}</Text>
                            <SubTitle>{item.title}</SubTitle>
                        </Content>
                    ))}
                </ContentWrapper>

                <Nav>
                    {data.map((item, index) => (<li key={index}><Button active={this.state.index === index}onClick={() => this.toggleStatus(index)}type="button">{item.title}</Button></li>))}
                </Nav>
            </Wrapper>
        )
    }
}

export default HowWeWork;

const data = [
    {
        title: "We do it right",
        text: "Often what you think you need to invest in isn’t the most important thing for your business right now. We’ll keep you right, don’t worry!"
    },

    {
        title: "We like simple",
        text: "We never over complicate, we get to the heart of the problem and solve it quickly. No acronyms or fancy business lingo, just solutions."
    },

    {
        title: "We’re results orientated",
        text: "We’re obsessed with results (our bad!) and its what drives us to be better each and every day."
    },

    {
        title: "We don’t do titles",
        text: "No matter where you sit in the boardroom, we treat everyone with the same respect because the best ideas come from the best minds and we love creativity, no matter where it comes from."
    },
]