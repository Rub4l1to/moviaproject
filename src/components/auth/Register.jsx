import React, { Fragment } from 'react'
import { SubTitle, Title } from '..'

const Register = () => {
    return (
       <Fragment>
           <Title
        {...{
          text: "Crear cuenta",
          style:
            "heading heading-title u-margin-bottom-small u-margin-top-small",
        }}
      />
      <SubTitle
        {...{
          text: "Por favor, rellena los siguientes campos de texto",
          style: " heading heading-subtitle",
        }}
      />
       </Fragment>
    )
}

export default Register
