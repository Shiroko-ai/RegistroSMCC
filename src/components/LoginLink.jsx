import { Link } from 'react-router-dom'
export default function LoginLink (props) {
  if (props.link) {
    return (
      <div className='text-center'>
      <Link
        to={props.to} class='small'
        style={{ color: '#800040' }}
      >
        Registrarse
      </Link>
    </div>)
  } else {
    return (
        <div className='text-center'>
        <a
          className='small' href={props.href}
          style={{ color: '#800040' }}
        >{props.text}
        </a>
      </div>
    )
  }
}
