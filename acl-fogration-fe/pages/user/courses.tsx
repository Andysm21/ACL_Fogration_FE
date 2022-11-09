import React from 'react'
import CourseCard from '../../components/molecules/CourseCard'
import Layout from '../../components/templates/Layout'

const courses = () => {
  return (
    <div>
      <Layout>
        <CourseCard />
      </Layout>
    </div>
  );
}

export default courses