import React from 'react'
import { skills,experiences} from '../constants'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

const About = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Hello , I'm <span className='blue-gradient_text fonyt-semibold drop-shadow'>Akshay Kumar Arora</span>
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-500 '>
        <p>
        I am Post Graduate (MCA) Almuni of Galgotias College Of Engineering And Research. I have worked with frameworks like React, Node.js, MongoDB, and Express.js. I am an experienced Full Stack software developer with JavaScript knowledge. I pick things up quickly and work collaboratively to develop scalable, effective, and approachable solutions that address real-world issues. Let's collaborate to make your ideas a reality!
        </p>
      </div>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My Skills</h3>
        <div className='mt-16 flex flex-wrap gap-12 '>
          {skills.map((skill)=>(
            <div className='block-container w-20 h-20'>
              <div className='btn-back rounded-xl'/>
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img src={skill.imageUrl} alt={skill.name} className='w-1/2 h-1/2 object-contain' />
              </div>
            </div>
          ))}
        </div>
      </div>


      <div className='py-16'>
          <h3 className='subhead-text'>
            Academic Qualification
          </h3>

      <div className='mt-5 flex flex-col gap-3 text-slate-500 '>
        <p>
          This is regarding my alma mater or my past academic qualifitions (Below mentioned  all the information you have included is correct to the best of your knowledge) , which are listed below:-
        </p>
      </div>
        <div className='mt-12 flex'>
          <VerticalTimeline>
            {experiences.map((experience)=>(
              <VerticalTimelineElement key={experience.company_name}
              date={experience.date}
              icon={
                <div className='flex justify-center items-center w-full h-full'>
                  <img src={experience.icon} alt={experience.company_name} className='w-[60%] h-[60%] object-contain' />
                </div>
              } 
              iconStyle={
                {
                  background:experience.iconBg,
                }
              }
              contentStyle={
                {
                  borderBottom:'8px',
                  borderStyle:'solid',
                  borderBottomColor:experience.iconBg,
                  boxShadow:'none',
                }
              }
              >
                <div>
                  <h3 className='text-black text-xl font-poppins font-semibold'>
                    {experience.title}
                  </h3>
                  <p className='text-black-500 font-medium font-base ' style={{margin:0}} >
                    {experience.company_name}
                  </p>
                </div>
                <ul className='my-5 list-disc ml-5 space-y-2'>
                    {experience.points.map((point,index)=>(
                      <li className='text-black-500/50 font-normal pl-1 text-sm' key={`experience-point-${index}`}>
                        {point}
                      </li>
                    ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>


      <div className='py-16'>
          <h3 className='subhead-text'>
            Personal Information
          </h3>
      <div className='mt-5 flex flex-col gap-3 text-slate-500 '>
        <table>
          <tr>
            <td><strong>Date of Birth:</strong></td>
            <td>19th of August, 2001</td>
          </tr>
          <tr>
            <td><strong>Permanent Address:</strong></td>
            <td>Kashipur, Uttarakhand</td>
          </tr>
          <tr>
            <td><strong>Present Address:</strong></td>
            <td>Greater Noida, Uttar Pradesh</td>
          </tr>
          <tr>
            <td><strong>Email:</strong></td>
            <td><a href="mailto:akshaykumararora9@gmail.com" style={{color:'blue'}} >akshaykumararora9@gmail.com</a></td>
          </tr>
          <tr>
            <td><strong>Contact Number:</strong></td>
            <td>+91 76699 98199</td>
          </tr>
          <tr>
            <td><strong>Coding achievments:</strong></td>
            <td>150+ Questions over <strong>Code360</strong></td>
          </tr>
          <tr>
            <td><strong>LinkedIn Profile:</strong></td>
            <td><a href="www.linkedin.com/in/akshay-kumar-arora-385793306" style={{color:'blue'}} >AkshayKumarArora8199</a></td>
          </tr>
          <tr>
            <td><strong>Language Proficiency:</strong></td>
            <td><table>
                <tr>
                  <td><b>English:-</b></td>
                  <td>Full Professional Proficiency</td>
                </tr>
              <tr>
              <td><b>Hindi:-</b></td>
              <td>Native or Bilingual Proficiency</td>
              </tr>
              <tr>
              <td><b>Punjabi:-</b></td>
              <td>Limited Working Proficiency</td>
              </tr>
              </table></td>
          </tr>
        </table>   
        </div>
    </div>
      <hr className='boredr-slate-200 '/>
      <CTA/>
      <Footer/>
    </section>
  )
}

export default About