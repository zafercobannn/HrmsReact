import React from "react";
import { Button, Icon, Menu } from "semantic-ui-react";
import { Container } from "semantic-ui-react";

export default function Navi() {
  return (
    <div>
      <div>
        <Menu inverted fixed="top" size="large" color="teal">
          <Container>
            <Menu.Item name="building outline">
              <Icon name="user outline" size="large" />
              HRMS
            </Menu.Item>
            <Menu.Item name="Home"/>
            <Menu.Item name="Job Adverts" />
            <Menu.Item name="Companies" />
            <Menu.Menu position="right">
              {/* <Dropdown item text="Language">
              <Dropdown.Menu>
                <Dropdown.Item>English</Dropdown.Item>
                <Dropdown.Item>Russian</Dropdown.Item>
                <Dropdown.Item>Spanish</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown> */}

              <Menu.Item>
                <Button.Group>
                  <Button color="google plus">Sign Up</Button>
                  <Button.Or />
                  <Button positive>Sign In</Button>
                </Button.Group>
              </Menu.Item>
            </Menu.Menu>
          </Container>
        </Menu>
      </div>
    </div>
  );
}
