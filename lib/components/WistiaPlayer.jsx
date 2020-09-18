import React, { useEffect } from 'react'

const VIDEO_ID = 'pvj32sxfho'

export const WistiaPlayer = (props) => {
  useEffect(() => {
    const script1 = document.createElement('script')
    script1.src = `//fast.wistia.com/assets/external/E-v1.js`
    script1.async = true
    document.body.appendChild(script1)
  }, [])

  useEffect(() => {
    if (window && window.Wistia && props.play) {
      const videoPlayer = document.getElementById('video-player')
      
      function makeEmbedPop(elem) {
        elem.setAttribute('class', '')
        elem.setAttribute('class', 'wistia_embed wistia_async_' + VIDEO_ID + ' popover=true popoverContent=link')

        var popoverAction = {}

        popoverAction[VIDEO_ID] = function (video) {
          video.popover.show()
          video.play()
        }

        window._wq = window._wq || []
        _wq = []
        _wq.push(popoverAction)
      }

      
      makeEmbedPop(videoPlayer)

    }
  }, [props.play])

  return <div id='video-player' />
}
