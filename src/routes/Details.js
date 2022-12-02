import HeadingForm from '../components/HeadingForm/HeadingForm'
export default function LoginForm (props) {
  return (
      <div className='container-center'>
      <div className='row justify-content-center'>
        <div className='col-xl-10 col-lg-12 col-md-9'>
          <div className='card o-hidden border-0 shadow-lg my-5'>
            <div className='card-body p-0'>
              <div className='row' style={{ paddingTop: '50px', paddingBottom: '200px' }}>

                      <div className='col-lg-6'>
                      </div>
                      <div className='col-lg-6'>
                    <HeadingForm
                      text = "Nombre del usuario"
                    />
                    </div>

                    <div className='col-lg-6'>
                      </div>
                      <div className='col-lg-6'>
                    <HeadingForm
                      text = "ID de usuario"
                    />
                    </div>

                    <div className='col-lg-6'>
                      </div>
                      <div className='col-lg-6'>
                    <HeadingForm
                      text = "Tipo de membresía"
                    />
                    </div>
                    <table className='col-md-4'>
                      <tr>
                    <td>Holaaaa</td>
                    </tr>
                    </table>

                  </div>

                </div>
              </div>
            </div>
          </div>

        </div>
  )
}
