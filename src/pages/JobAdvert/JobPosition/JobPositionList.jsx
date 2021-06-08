import React from "react";
import { useState, useEffect } from "react";
import { Table, Header, Icon,Menu } from "semantic-ui-react";
import JobPositionService from "../../../services/jobPositionService";

export default function JobPositionList() {
  const [jobpositions, setJobPositions] = useState([]);

  useEffect(()=>{
      let jobpositionService = new JobPositionService()
      jobpositionService.getJobPositions().then(result=>setJobPositions(result.data.data))
  }, [])

  return (
    <div>
      <Header as="h2">
        <Icon name="compass outline" />
        <Header.Content>Job Position List</Header.Content>
      </Header>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Job title</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {jobpositions.map((jobposition) => (
            <Table.Row key={jobposition.id}>
              <Table.Cell>{jobposition.jobTitle}</Table.Cell>
            </Table.Row>
            ))
          }
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="5">
              <Menu floated="right" pagination>
                <Menu.Item as="a" icon>
                  <Icon name="chevron left" />
                </Menu.Item>
                <Menu.Item as="a">1</Menu.Item>
                <Menu.Item as="a">2</Menu.Item>
                <Menu.Item as="a">3</Menu.Item>
                <Menu.Item as="a">4</Menu.Item>
                <Menu.Item as="a" icon>
                  <Icon name="chevron right" />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </div>
 );
}
