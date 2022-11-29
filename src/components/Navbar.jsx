import styled from 'styled-components'
export default function Navbar (props) {
  const Navbar = styled.nav`
  margin-bottom: 1.5rem;
  box-shadow: 0 0.15rem 1.75rem 0 rgb(58 59 69 / 15%);
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  width: 100%;
  background-color: #b1b1b1;
  height: 4.375rem;
  `
  const NavbarList = styled.ul`
    display: flex;
    flex-direction: column;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
    margin-left: auto;
  `
  const NavbarItem = styled.li`
    position: relative;
   `
  const Name = styled.span`
    margin-right: 0.5rem;
    display: inline;
    color: black;
    font-size: 80%;
    font-weight: 400;
 `
  return (
        <Navbar>
            <NavbarList>
                <NavbarItem>
                        <Name>Oscar Ivan Palacios Ulloa</Name>
                </NavbarItem>

            </NavbarList>

        </Navbar>)
}
