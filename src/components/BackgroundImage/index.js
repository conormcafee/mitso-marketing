import React from "react"
import {Box} from "@rebass/grid"
import styled from "styled-components"

const BackgroundImage = ({img, aspectRatio, border }) => (
	<Image 
		aspectRatio={aspectRatio}
		border={border}
		css={{ backgroundImage: img ? `url(${img})` : `url('https://placehold.it/2000x800/FFEE93/FFEE93')`}} 
	/>
) 

export default BackgroundImage

const Image = styled(Box)`
    background-size: cover;
		background-position: center center;
    background-repeat: no-repeat;
    width: 100%;
		height: 100%;
		padding-top: ${props => props.aspectRatio ? `100%` : `0px`};
		border: ${props => props.border ? `4px solid #ffffff` : `none`};

		@media only screen and (min-width: 600px) {
			padding-top: ${props => props.aspectRatio ? `56.25%` : `0px`};
			max-height: ${props => props.aspectRatio ? `600px` : `auto`};
		}
`