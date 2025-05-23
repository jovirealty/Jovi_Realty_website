import React from 'react'
import Header from '../../components/shared/Sections/Header/header'
import Footer from '../../components/shared/Sections/Footer/footer'
import LoginForm from '../../components/shared/Elements/LoginForm/LoginForm'
import EmptySection from '../../components/shared/Sections/EmptySection/EmptySection'

const LoginPage = () => {
  return (
    <div>
        <Header/>
        <EmptySection>
            <LoginForm/>
        </EmptySection>
        <Footer/>

    </div>
  )
}

export default LoginPage
