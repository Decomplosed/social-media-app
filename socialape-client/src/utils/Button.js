import React from 'react'
import { Tooltip, IconButton } from '@material-ui/core'

const Button = ({ children, onClick, btnClassName, tipClassName, tip }) => (
  <Tooltip title={tip} className={tipClassName}>
    <IconButton onClick={onClick} className={btnClassName}>
      {children}
    </IconButton>
  </Tooltip>
)

export default Button
