import React, { Fragment } from "react"
import YouTube from "react-youtube"
import Vimeo from "@u-wave/react-vimeo"
import { Modal } from "../Modal"

const VideoModal = ({ closeModal, youtube, vimeo }) => {
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1,
    },
  }

  return (
    <Modal closeModal={closeModal}>
      <Fragment>
        {youtube && <YouTube videoId={youtube} opts={opts} />}
        {vimeo && <Vimeo video={vimeo} autoplay />}
      </Fragment>
    </Modal>
  )
}

export default VideoModal
