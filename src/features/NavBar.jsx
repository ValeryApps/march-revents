import React from 'react'
import { Button, Container, Menu } from 'semantic-ui-react'

const NavBar = ({setFormOpen}) => {
    return (
       <Menu inverted fixed="top" >
        <Container>
            <Menu.Item>
                <img src="assets/logo.png" alt="" style={{marginRight:'0.5em'}}/>
                Re-vent
            </Menu.Item>
            <Menu.Item name="Events"/>
            <Menu.Item>
                <Button positive inverted content="Create Event" onClick={()=>setFormOpen(true)}/>
            </Menu.Item>
            <Menu.Item position="right">
                <Button content="Login" basic inverted />
                <Button content="Register" basic inverted style={{marginLeft:'0.5em'}} />
            </Menu.Item>
        </Container>
       </Menu>
    )
}

export default NavBar
