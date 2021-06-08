import React from 'react'
import JobAdvertList from '../pages/JobAdvert/JobAdvertList'
import JobPositionList from '../pages/JobAdvert/JobPosition/JobPositionList'
import EmployerList from '../pages/User/Employer/EmployerList'
import JobSeekerList from '../pages/User/JobSeeker/JobseekerList'

export default function Section() {
    return (
        <div>
            <JobSeekerList/>
            <EmployerList/>
            <JobPositionList/>
            <JobAdvertList/>
        </div>
    )
}
