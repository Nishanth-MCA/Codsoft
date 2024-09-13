import React,{useEffect} from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

// Register the plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

export default function Project() { 

  useEffect(() => {
    // Animation setup
    gsap.fromTo(
      '.effect',
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: '.effect', // Element that triggers the animation
          start: 'top 70%', // Animation starts when top of element reaches 30% from the top of the viewport
          end: 'top 20%',   // Animation ends when top of element reaches 20% from the top of the viewport
          scrub: 1,         // Smooth scrubbing
        },
      }
    );
  }, []);

  return (
    <div className='effect m-4 mt-5'>      
      <p style={{ textAlign: "justify" }} className='mt-3'>
        <h3 className='text-decoration-underline text-center'>Codesoft Internship Task </h3>
        <h5 className='text-primary'>Portfolio website</h5>
        <span className='mx-5'> In this website Create navbar with Home page, Project showcase,About me Section and contant form
          are navigation between different section with responsive design.Setup project with create react tool or similar tool.
          Design the website using react component and css.</span>
      </p>
      <p>
        <b> Language are:</b> React js,CSS,Bootstrap.
      </p>
      <div>
        <h3 className='text-center text-decoration-underline'>MCA Project</h3>
        <h5 className='text-primary'>Online Blockchain based Certificate Generation and Valadition System</h5>
        <p style={{textAlign:"justify"}} className='mt-3'>
        In the digital world ,each and every thing are digitalized  in which the academic certificate are digitalized in the educational institution and provided to the students.
        The institution and organization find it very difficult to validate and verify the digital certificate.
        Through  the blockchain, each certificate is assigned a Unique Certificate Identifier Code (UCIC) and ensuring a decentralized and tamper-resistant storage framework.
        Under blockchain, a block becomes validated only once it has been verified by multiple. Blockchain features a decentralized and incorruptible database that has high potential for a diverse range of uses. 
        Each and every thing are digitized in which the academic certificate are digitized in the educational institution and provided to the students.
        The increase in security breaches compromise user's privacy of academic digital certificate.The institution and organization find it very difficult to validate and verify the digital certificates.
        By using blockchain technology. we can provide a more secure and efficient digital certificate validation.
      </p>
      <p>
        <b> Language are:</b> HTML,CSS,Bootstrap,Python,Flask, Mysql.
        <h6 className='mt-2'><a href="https://www.ijmrset.com/upload/114_Online.pdf" className='text-decoration-none'>More info</a> </h6>
      </p>
      </div>
    </div>
  )
}