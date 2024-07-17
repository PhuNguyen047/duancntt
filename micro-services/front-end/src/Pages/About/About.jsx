import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import CountUp from 'react-countup';
import './About.css';

const About = () => {
    return (
        <div className='about'>
            <Navbar/>
            <h1 className='title'>ABOUT US</h1>
            <div className="content">
                <div className="services">
                    <div className="service fade-in">
                        <div className="icon-text">
                        <img className ="icon-image" src="https://png.pngtree.com/png-clipart/20230506/original/pngtree-teachers-day-objects-female-teacher-multiple-cartoons-png-image_9143502.png"></img>
                            <h5 className="service-title">Skilled Instructors</h5>
                            <p>Bringing a wealth of knowledge and expertise to the classroom. Dedication to fostering a positive learning environment helps students thrive academically and personally.</p>
                        </div>
                    </div>
                    <div className="service fade-in" style={{ animationDelay: '0.2s' }}>
                        <div className="icon-text">
                            <img className ="icon-image" src="https://i.pinimg.com/564x/8f/27/12/8f27124230c62f53215cf0d9b7338483.jpg"></img>
                            <h5 className="service-title">Online Classes</h5>
                            <p>Online classes offer flexible and convenient learning opportunities, allowing students to access education from anywhere in the world.</p>
                        </div>
                    </div>
                    <div className="service fade-in" style={{ animationDelay: '0.4s' }}>
                        <div className="icon-text">
                        <img className ="icon-image" src="https://i.pinimg.com/564x/45/3d/1a/453d1ad5aa3eb9642d8119de3ae4b431.jpg"></img>
                            <h5 className="service-title">Home Projects</h5>
                            <p>Home projects empower students to apply their knowledge in real-world settings, fostering creativity and practical skills.</p>
                        </div>
                    </div>
                    <div className="service fade-in" style={{ animationDelay: '0.6s' }}>
                        <div className="icon-text">
                        <img className ="icon-image" src="https://i.pinimg.com/564x/3a/16/e1/3a16e1e1347849fad73c30bd5c69ce3b.jpg"></img>
                            <h5 className="service-title">Book Library</h5>
                            <p>A book library provides a vast resource of knowledge and inspiration, supporting lifelong learning and intellectual growth.</p>
                        </div>
                    </div>
                </div>
                <h2 className="goals-title">Our Goals</h2>
                <p className="goals-text">Our mission is to provide quality education to students around the world, empowering them to reach their full potential and achieve their dreams. We are committed to fostering a supportive and inclusive learning environment that encourages personal growth and academic success.</p>
                <div className="goals-section">
                    <div className="stat">
                            <CountUp end={25000} duration={3} />K
                            <p>Completed Projects</p>
                        </div>
                        <div className="stat">
                            <CountUp end={12000000} duration={3} />M
                            <p>Patients Around World</p>
                        </div>
                        <div className="stat">
                            <CountUp end={25000} duration={3} />K
                            <p>Completed Projects</p>
                        </div>
                        <div className="stat">
                            <CountUp end={12000000} duration={3} />M
                            <p>Patients Around World</p>
                        </div>
                </div>
                <img src='https://cdn.jostens.com/contentAsset/image/913bd187-ca0b-47bc-9c06-96f142b55ec1/fileAsset/filter/Crop,Scale,Jpeg/crop_w/1368/crop_h/912/crop_x/196/crop_y/0/scale_w/768/scale_h/512/jpeg_q/85/jpeg_p/1/b36db4c1-5d89-489d-a724-4ca522e64395.jpg'></img>
            </div>
        </div>
    );
}
export default About;
