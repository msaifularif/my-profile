import AnimationContainer from '../utils/AnimationContainer';
import { calculateDuration } from './CurrentTimeLineExp';

const AboutMe = () => {
  return (
    <AnimationContainer customClassName='w-full mb-16'>

      <h2 className='font-bold text-2xl tracking-tight mb-8 text-white text-center lg:text-start'>
        About me
      </h2>

      {/* <p className='text-base text-gray-400'>
        I am a passionate and versatile developer with over +{calculateDuration('2020-01-01', false)} of JavaScript experience and a constant interest in learning new technologies. I am currently learning the path to be a DevOps and master tools or practices such as "Linux, AWS, CI/CD, Docker, Kubernetes, Jenkins and Terraform" to perform cost optimized, reliable and secure full software delivery and maintenance.
      </p> */}
      <p className='text-base text-gray-400'>
      I am a passionate programmer with a strong background in web development and UI/UX design. I graduated from the Department of Informatics at iSTTS Surabaya and have further honed my skills through intensive boot camps such as Mentify UX Research 2022, UI/UX Design from Dibimbing.id Bootcamp 2021, and the Professional Academy UI/UX Designer Digital Talent Scholarship (Kominfo) 2021.
      <br />
      With over 2 years of experience, I specialize in developing and implementing web applications and programs using technologies like Angular, Golang, Ionic, and MySQL. I have a keen eye for creating intuitive user interfaces and ensuring seamless user experiences.
      </p>

    </AnimationContainer>
  )
}

export default AboutMe;