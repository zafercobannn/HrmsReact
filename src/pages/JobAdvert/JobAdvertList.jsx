import React from 'react'
import { useState, useEffect } from "react";
import { Table, Header, Icon,Menu } from "semantic-ui-react";
import JobAdvertService from '../../services/jobAdvertService'

export default function JobAdvertList() {

    const [jobadverts, setJobAdverts] = useState([])

    useEffect(()=>{
        let jobadvertService = new JobAdvertService()
        jobadvertService.getJobAdverts().then(result=> setJobAdverts(result.data.data))
    },[])


    return (
        <div>
      <Header as="h2">
        <Icon name="compass outline" />
        <Header.Content>Job Advert List</Header.Content>
      </Header>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Job Advert</Table.HeaderCell>
            <Table.HeaderCell>Company Name</Table.HeaderCell>
            <Table.HeaderCell>City</Table.HeaderCell>
            <Table.HeaderCell>Open Position Count</Table.HeaderCell>
            <Table.HeaderCell>Deadline</Table.HeaderCell>
            <Table.HeaderCell>Is Open</Table.HeaderCell>
            <Table.HeaderCell>Detail</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {jobadverts.map((jobadvert) => (
            <Table.Row key={jobadvert.id}>
              <Table.Cell>{jobadvert.jobPosition.jobTitle}</Table.Cell>
              <Table.Cell>{jobadvert.employer.companyName}</Table.Cell>
              <Table.Cell>{jobadvert.city.name}</Table.Cell>
              <Table.Cell>{jobadvert.openPositionCount}</Table.Cell>
              <Table.Cell>{jobadvert.deadline}</Table.Cell>
              <Table.Cell>{jobadvert.open.toString()}</Table.Cell>
            </Table.Row>
            ))
          }
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="7">
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
    )
}
