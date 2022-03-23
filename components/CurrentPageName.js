import React from 'react'
import { withRouter } from 'next/router'


const CurrentPageName = ({router}) => {
    console.log(router)
  return (
    <div>{router.pathname}</div>
  )
}

export default withRouter(CurrentPageName)