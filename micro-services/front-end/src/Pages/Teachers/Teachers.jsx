import './Teachers.css';
import Navbar from '../../Components/Navbar/Navbar';

const Teachers = () => {
    const isLoggedIn = true;

    const teachers = [
        {
            name: "Ms Ha Nguyen Tuong Lan",
            position: "Head Principal",
            email: "HaNTL1@example.com",
            phone: "+84 123456789",
            socialMedia: {
                twitter: "https://twitter.com/principal",
                linkedin: "https://linkedin.com/in/principal"
            },
            quote: "Leading with vision and dedication.",
            image: "https://fpt.com/Images/images/anh-chi-Ha(2).JPG",
            positionOrder: 1 
        },
        {
            name: "Mr Trinh Anh Khoa",
            position: "Head of Training Department",
            email: "KhoaTA@example.com",
            phone: "+84 123456789",
            socialMedia: {
                twitter: "https://twitter.com/principal",
                linkedin: "https://linkedin.com/in/principal"
            },
            quote: "Leading with vision and dedication.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6swDQ8h3h32DDXaCydjBNwhJmPr9NSUfm1A&s",
            positionOrder: 2 
        },
        {
            name: "Mr Robert Dwane",
            position: "Head of Physics Department",
            email: "Dwayne.Robert@tpelearning.com",
            phone: "+84 907034865",
            socialMedia: {
                twitter: "https://twitter.com/johndoe",
                linkedin: "https://linkedin.com/in/johndoe"
            },
            quote: "Education is the most powerful weapon which you can use to change the world.",
            image: "https://scontent.fhan3-3.fna.fbcdn.net/v/t1.6435-9/61390039_893610787697695_8790915576571625472_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=eIMGHLSWpL4Q7kNvgFMOj8Y&_nc_ht=scontent.fhan3-3.fna&oh=00_AYD9bjhCxvdEvzky_RuU7KqCMbhOzM62YO4heu_BkySGpA&oe=66948392",
            positionOrder: 3
        },
        {
            name: "Ms Lacey Evans",
            position: "Head of English Department",
            email: "Evans.Lacey@tpelearning.com",
            phone: "098-765-4321",
            socialMedia: {
                twitter: "https://twitter.com/janesmith",
                linkedin: "https://linkedin.com/in/janesmith"
            },
            quote: "The beautiful thing about learning is that nobody can take it away from you.",
            image: "https://scontent.fhan4-6.fna.fbcdn.net/v/t39.30808-1/367378728_860446842081936_3214905869828361360_n.jpg?stp=dst-jpg_p160x160&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=i6Zn5G9I3k4Q7kNvgH1a10d&_nc_ht=scontent.fhan4-6.fna&oh=00_AYD-xOwAl9r3fksDMON5x3ZxqKhJoAOxRJte86g9ZB8dGA&oe=6672D9DA",
            positionOrder: 4
        },
        {
            name: "Mr Albert Lynett",
            position: "Head of Literature Department",
            email: "john.doe@tpelearning.com",
            phone: "098-765-4321",
            socialMedia: {
                twitter: "https://twitter.com/johndoe",
                linkedin: "https://linkedin.com/in/johndoe"
            },
            quote: "The beauty of mathematics only shows itself to more patient followers.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuqxDTr74EAw5NYdyNkhKPo_el_Z8Iu0-yDg&s",
            positionOrder: 5
        },
        {
            name: "Mr William Smith",
            position: "Head of Science Department",
            email: "jane.smith@tpelearning.com",
            phone: "098-765-4321",
            socialMedia: {
                twitter: "https://twitter.com/janesmith",
                linkedin: "https://linkedin.com/in/janesmith"
            },
            quote: "Literature adds to reality, it does not simply describe it. It enriches the necessary competencies that daily life requires and provides; and in this respect, it irrigates the deserts that our lives have already become.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNamdTEqJXB1kX--s2yo96h8juO1QKBIgSlyxADTJQVhUeJ0guFS-Mxu85LOl2NCeUgng&usqp=CAU",
            positionOrder: 6
        },
        {
            name: "Miss Jane Oliver",
            position: "Literature Teacher",
            email: "jane.smith@tpelearning.com",
            phone: "098-765-4321",
            socialMedia: {
                twitter: "https://twitter.com/janesmith",
                linkedin: "https://linkedin.com/in/janesmith"
            },
            quote: "Literature adds to reality, it does not simply describe it. It enriches the necessary competencies that daily life requires and provides; and in this respect, it irrigates the deserts that our lives have already become.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkVH_9uFc0Q8RuTYxQ_T0qSN0weH6S6W0p1Q&s",
            positionOrder: 7
        },

    ];

    // Sort teachers based on positionOrder
    teachers.sort((a, b) => a.positionOrder - b.positionOrder);

    const TeacherCard = ({ teacher }) => {
        return (
            <div className="teacher-card">
                <img src={teacher.image} alt={`${teacher.name}`} />
                <h2>{teacher.name}</h2>
                <p><strong>Position:</strong> {teacher.position}</p>
                <p><strong>Email:</strong> {teacher.email}</p>
                <p><strong>Phone:</strong> {teacher.phone}</p>
                <p className="quote">"{teacher.quote}"</p>
                <div className="social-media">
                    <a href={teacher.socialMedia.twitter} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href={teacher.socialMedia.linkedin} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin"></i>
                    </a>
                </div>
            </div>
        );
    };

    return (
        <div className="teachers-page">
            <Navbar isLoggedIn={isLoggedIn} />
            <header className="banner">
                <h1 className='title'>Our Dedicated Teachers</h1>
                <p className='note'>Empowering students with knowledge and wisdom.</p>
            </header>
            <div className='overlay-images'>
                <div className="image-container">
                    <img src="https://ila.edu.vn/wp-content/uploads/2023/03/shutterstock_1489159268.jpg" alt="" />
                    <div className="overlay">
                        <div className="text">Teamwork</div>
                    </div>
                </div>
                <div className="image-container">
                    <img src="https://cafefcdn.com/thumb_w/640/pr/2021/photo-1-16385150656531108797345-55-0-948-1429-crop-1638515098069-63774206156907.jpg" alt="Teacher" />
                    <div className="overlay">
                        <div className="text">Focus</div>
                    </div>
                </div>
                <div className="image-container">
                    <img src="https://cdn.ihcairoeg.com/wp-content/uploads/2020/04/study-english.jpg" alt="" />
                    <div className="overlay">
                        <div className="text">Dedicated</div>
                    </div>
                </div>
            </div>
            <h2 className='title-teacher'>TEACHING APPARATUS DIAGRAM FOR THE CENTER</h2>
            <div className="teachers-list">
                <div className="top-row">
                    {teachers.slice(0, 2).map((teacher, index) => (
                        <TeacherCard key={index} teacher={teacher} />
                    ))}
                </div>
                <div className="second-row">
                    {teachers.slice(2, 8).map((teacher, index) => (
                        <TeacherCard key={index} teacher={teacher} />
                    ))}
                </div>
                <div className="third-row">
                    {teachers.slice(8).map((teacher, index) => (
                        <TeacherCard key={index} teacher={teacher} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Teachers;
