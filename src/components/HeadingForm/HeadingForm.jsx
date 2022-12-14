import { HeadingDiv, Heading } from './HeadingFormcss'
export default function HeadingForm (props) {
  return (
  <HeadingDiv>
    <Heading>
      {props.text}{props.name}
    </Heading>
  </HeadingDiv>
  )
}
