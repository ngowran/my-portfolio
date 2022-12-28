import { BsStarFill } from 'react-icons/bs';

const jobs = [
    {
        name: 'Programming Lab Tutor',
        company: 'Dublin City University',
        date: 'September 2022 - Present',
        description: ['Headhunted to hold this position due to my excellence in computer science at DCU.', 'Teaching the fundamentals of programming to students through Python.', 'Involves resolving complex algorithmic programming problems at a glance.']
    },

    {
        name: 'Intergration Support Engineer',
        company: 'Global Payments',
        date: 'June 2022 - September 2022',
        description: ['Integrating API and HPP ecommerce solutions with client platforms.', 'Providing real-time technical support and troubleshooting for various client projects.', 'Operating with production code, through Java, .NET, PHP.', 'Working in critical development environments.']
    },

    {
        name: 'Chairperson and Developer',
        company: 'Enactus DCU',
        date: 'July 2022 - Present',
        description: ['Full stack web development for digital products.', 'Head of research and development / business logic.', 'Leading fellow students to bring innovative social solutions to market.', 'Agile development, completing sprints as team lead.']
    },

    {
        name: 'FreeLance Web Developer',
        company: 'Self Employed',
        date: 'July 2022 - Present',
        description: ['Creating full stack web applications and static websites.', 'Strong technical foundation in fullstack technologies and CSS frameworks.', 'Agile development approach, involving regular review with stakeholders', 'Consistently exceeded the expectations of clients and delivered projects that meet their needs and goals']
    }
]

export default function Experiance() {
    return (
        <div className="" id="experiance">
            <h1 className="text-6xl text-center pt-16 font-bold">Experiance</h1>
            <br></br>
            <div className="grid md:grid-cols-2">
                {jobs.map((job, index) => (
                    <div key={index} className="p-6">
                        <div className=" bg-white rounded-lg shadow-sm h-60 p-3">
                            <div className="p-3">
                                <h2 className="text-4xl font-bold pb-2">{job.name}</h2>
                                <p className="py-2">
                                    <span className="font-bold">{job.company}</span><span>    <BsStarFill className='inline text-amber-400' />   </span> <span className="text-red-400 font-semibold ">{job.date}</span>
                                </p>

                                {job.description.map((des, i) => (
                                    <div key={i}>
                                        <ul><li><span className='inline'>-  </span>{des}</li></ul>
                                    </div>
                                ))}

                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
}