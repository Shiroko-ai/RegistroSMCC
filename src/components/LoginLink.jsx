import { Link } from 'react-router-dom'
export default function LoginLink (props) {
  return (
      <div className='text-center'>
      <Link
        to={props.to} className='small'
        style={{ color: '#800040' }}
      >
        {props.text}
      </Link>
    </div>)
}
