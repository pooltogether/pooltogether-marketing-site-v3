import React, { useEffect, useState } from 'react'

const VIDEO_ID = 'pvj32sxfho'

export const WistiaPlayer = (props) => {
  const [playerLoader, setPlayerLoader] = useState()

{/* <script src="https://fast.wistia.com/assets/external/E-v1.js" async></script>
<div class="wistia_embed wistia_async_g5pnf59ala" style="height:360px;position:relative;width:640px">
  <div class="wistia_swatch" style="height:100%;left:0;opacity:0;overflow:hidden;position:absolute;top:0;transition:opacity 200ms;width:100%;">
    <img src="https://fast.wistia.com/embed/medias/g5pnf59ala/swatch" style="filter:blur(5px);height:100%;object-fit:contain;width:100%;" alt="" aria-hidden="true" onload="this.parentNode.style.opacity=1;" />
  </div>
</div> */}

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
        elem.setAttribute('class', 'wistia_embed wistia_async_' + VIDEO_ID + ' popover=true popoverContent=link')
        Wistia.embeds.setup()

        var popoverAction = {}

        popoverAction[VIDEO_ID] = function (video) {
          video.popover.show()
          video.play()
        }

        window._wq = window._wq || []
        _wq.push(popoverAction)
      }

      
      makeEmbedPop(videoPlayer)

      setTimeout(() => {
        const video = Wistia.api('video-player')
        if (video) {
          console.log('should start video again')
          // video.bind("timechange", function (t) {
          //   console.log("the time changed to " + t);
          // });

          videoPlayer.addEventListener('click', () => {
            makeEmbedPop(videoPlayer)
            // video.play()
          })
        }

        const overlay = document.getElementById('video-player_popover_overlay')
        if (overlay) {
          overlay.addEventListener('click', () => {
            if (video) {
              videoPlayer.setAttribute('class', '')
              video.remove()
            }
          })
        }
      }, 300)


    }
  }, [props.play])

  return <div id='video-player' />
}
