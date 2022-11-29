import styled from 'styled-components'
import HeadingForm from './HeadingUser'
const Heading = styled.h1`
    padding : 2rem;
    color : black;
`
export default function Form(props, { children }) {
  return (
  <div className='container-center'>
    <Heading> Hola</Heading>
    <div className='row justify-content-center'>
      <div className='col-xl-10 col-lg-12 col-md-9'>
        <div className='card o-hidden border-0 shadow-lg my-5'>
          <div className='card-body p-0'>
            <div className='row'>
            <div className='col-lg-6 d-lg-block'>
            <img src= "../components/SMCC.jpg"/>
            </div>
              <div className='col-lg-6'>
                <div className='p-5'>
                  <form className='user'>
                  <HeadingForm
                  text = {props.heading}
                  />
                    {children}
                  </form>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
</div>
</div>)
}
