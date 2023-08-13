// NOTE: This scroll to top is the actual working scroll to to when user clicks on the circle arrow that appears when use scrolls down.
// The other `ScrollToTop` component in components folder is for the default react scroll to top behavior on route visit.

//** React imports */
import { useState } from "react"

//** React icons imports */
import { HiArrowUp } from "react-icons/hi"


const useScrollToTop = () => {

    //** State */
    const [showScroll, setShowScroll] = useState(false)
  return (
    <>
     <HiArrowUp
        className="scrollTotop"
     
     /> 
    </>
  )
}

export default useScrollToTop
