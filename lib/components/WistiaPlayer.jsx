import React, { useEffect } from 'react'
import classnames from 'classnames'

const VIDEO_ID = 'pvj32sxfho'

export const WistiaPlayer = (props) => {

  useEffect(() => {
    const script1 = document.createElement('script')
    const script2 = document.createElement('script')

    script1.src = `//fast.wistia.com/embed/medias/${VIDEO_ID}.jsonp`
    script1.async = true

    script2.src = `//fast.wistia.com/assets/external/E-v1.js`
    script2.async = true

    document.body.appendChild(script1)
    document.body.appendChild(script2)
  }, [])

  useEffect(() => {
    if (props.play) {
      const _wq = window._wq || []

      console.log(window._wq)
      console.log('pushing')
      _wq.push({
        id: VIDEO_ID,
        options: {
          autoPlay: true
        },
        onReady: function (video) {
          video.play()
        }
      })

      setTimeout(() => {

        document.body.classList.add('wistia_popover_mode')
      }, 500)


    }
  }, [props.play])

  if (!props.play) {
    return null
  } else {
    return <span
      className={`inline-block w-full h-full relative wistia_embed wistia_async_${VIDEO_ID} autoPlay=true popover=true popoverAnimateThumbnail=true videoFoam=true`}
    >
      &nbsp;
      </span>
    // return <div
    //   className={classnames(
    //     'wistia_responsive_wrapper w-full h-full trans',
    //   )}
    // >
    //   <span
    //     className={`inline-block w-full h-full relative wistia_embed wistia_async_${VIDEO_ID} autoPlay=true popover=true popoverAnimateThumbnail=true videoFoam=true`}
    //   >
    //     &nbsp;
    //   </span>
    // </div>
    // return <div
    //   className={classnames(
    //     'wistia_responsive_wrapper w-full h-full trans',
    //   )}
    // >
    //   <span
    //     className={`inline-block w-full h-full relative wistia_embed wistia_async_${VIDEO_ID} autoPlay=true popover=true popoverAnimateThumbnail=true videoFoam=true`}
    //   >
    //     &nbsp;
    //   </span>
    // </div>
  }
}
