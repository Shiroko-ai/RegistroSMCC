export default function LoginLink (props) {
  return (
        <div className='text-center'>
        <a
          className='small' href='forgot-password.html'
          style={{ color: '#800040' }}
        >{props.text}
        </a>
      </div>
  )
}
