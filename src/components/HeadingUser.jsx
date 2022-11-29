import styled from 'styled-components'
const HeadingDiv = styled.div`
  text-align: center;
`
const Heading = styled.h1`
      margin-bottom: 1.5rem;
      font-weight: 400;
      line-height: 1.2;
      margin-block-start: 0.67em;
      margin-block-end: 0.67em;
      margin-inline-start: 0px;
      margin-inline-end: 0px;
      font-size: 1.5rem;
 `
export default function HeadingForm (props) {
  return (<HeadingDiv>
    <Heading style={{ color: '#000000' }}>
      {props.text}
    </Heading>
  </HeadingDiv>)
}
