import { FaGithub, FaImages } from "react-icons/fa";


export const Projects = () => {

   

    return (
        <section id="projects" className="min-h-screen flex items-center justify-center py-20">

            <div className="max-w-5xl mx-auto px-4">
                <h2
                    className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                    Featured Projects
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)]transition-all">

                        <h3 className="text-xl font-bold mb-2">Jolly-Coop</h3>
                        <img src="" alt="" />
                        <p className="text-gray-400 mb-4"> The application allows friends to sign up and join game groups together, where they may pick new games they would like to play from an online database and vote on the games they would most like to play together. Users are able to save games to private lists, join and create multiple groups, and email friends messages when it is time to vote.
                        </p>
                        <div>
                            {["React", "css", "Typescript", "Tailwind"].map((tech, key) => (
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]transition">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <a href="https://github.com/CaldwellDerek/jolly-co-op-backend?tab=readme-ov-file"
                                className="text-blue-400 hover:text-blue-300 transition-colors mt-4">
                                <FaGithub />
                                View GitHub</a>
                         
                            <a href="https://jollycoop.netlify.app/" className="text-blue-400 hover:text-blue-300 transition-colors mt-4">View Project</a>

                        </div>
                    </div>



                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)]transition-all">
                        <h3 className="text-xl font-bold mb-2">"Thats the Move!"</h3>
                        <p className="text-gray-400 mb-4">
                        Built a web application that allows users to discover local events and popular breweries by entering a city name into a search modal. Upon search, the app fetches event data from the Ticketmaster API and brewery data from a public brewery API, displaying results side-by-side for easy browsing.                        </p>
                        <div>
                            {["React", "css", "Typescript", "Tailwind"].map((tech, key) => (
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]transition">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <a href="https://github.com/ConnorMcLaughlin2022/Project-1" className="text-blue-400 hover:text-blue-300 transition-colors mt-4"><FaGithub />View Github</a>
                            <a href="https://connormclaughlin2022.github.io/Project-1/" className="text-blue-400 hover:text-blue-300 transition-colors mt-4">View Project</a>

                        </div>
                    </div>

                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)]transition-all">
                        <h3 className="text-xl font-bold mb-2">Development Tracker</h3>
                        <p className="text-gray-400 mb-4">
                        Developed a RESTful API designed to streamline project and contract management for developers. The tool integrates easily into existing workflows, offering an intuitive interface for creating and organizing projects with attached contracts. It reduces administrative overhead, allowing developers to focus on core development tasks.
                        </p>
                        <div>
                            {["React", "css", "Typescript", "Tailwind"].map((tech, key) => (
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]transition">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <a href="https://github.com/Nhancoding/development-tracker?tab=readme-ov-file" className="text-blue-400 hover:text-blue-300 transition-colors mt-4"><FaGithub />View Github</a>
                            <a href="" className="text-blue-400 hover:text-red-300 transition-colors mt-4">Project Not Live</a>

                        </div>
                    </div>

                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)]transition-all">
                        <h3 className="text-xl font-bold mb-2">First React Portfolio</h3>
                        <p className="text-gray-400 mb-4">
                        Built a single-page React application featuring dynamic routing across four sections: About, Portfolio, Resume, and Contact. Implemented form validation, downloadable resume functionality, and responsive navigation. Highlights include project showcases, front-end/back-end skills list, and real-time input validation for contact forms.

                        </p>
                        <div>
                            {["React", "css", "Typescript", "Tailwind"].map((tech, key) => (
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]transition">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <a href="https://github.com/https://github.com/ConnorMcLaughlin2022/React-UW-Portfolio/Project-1" className="text-blue-400 hover:text-blue-300 transition-colors mt-4"><FaGithub />View Github</a>
                            <a href="https://connormclaughlin2022.github.io/REACT-Portfolio-2/" className="text-blue-400 hover:text-blue-300 transition-colors mt-4">View Project</a>

                        </div>
                    </div>

                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)]transition-all">
                        <h3 className="text-xl font-bold mb-2">ORM-13-BackEnd-E-Commerce</h3>
                        <p className="text-gray-400 mb-4">
                        Developed a functional Express.js API connected to a relational database using Sequelize. Configured secure database connections and implemented full CRUD operations (GET, POST, PUT, DELETE) through RESTful routes. Tested endpoints using Insomnia, with successful data seeding and manipulation via provided seed files.


                        </p>
                        <div>
                            {["React", "css", "Typescript", "Tailwind"].map((tech, key) => (
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]transition">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <a href="https://github.com/ConnorMcLaughlin2022/ORM-13-BackEnd-E-Commerce" className="text-blue-400 hover:text-blue-300 transition-colors mt-4"><FaGithub />View Github</a>
                            <a href="" className="text-blue-400 hover:text-red-300 transition-colors mt-4">No Site Available</a>

                        </div>
                    </div>

                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)]transition-all">
                        <h3 className="text-xl font-bold mb-2">Tech-Blog</h3>
                        <p className="text-gray-400 mb-4">
                        Developed a full-stack blog application with user authentication, session management, and dynamic content rendering. Built with Express.js, Sequelize (ORM), and MySQL on the backend, and Handlebars.js for the frontend templating. Users can sign up or log in to view blog posts, add comments, and see author attribution for all content. Secure credential storage enables persistent login sessions, and routes are protected to ensure only authenticated users can interact with posts and comments.

                        </p>
                        <div>
                            {["React", "css", "Typescript", "Tailwind"].map((tech, key) => (
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]transition">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <a href="https://github.com/ConnorMcLaughlin2022/Tech-Blog.git" className="text-blue-400 hover:text-blue-300 transition-colors mt-4"><FaGithub />View Github</a>
                            <a href="" className="text-blue-400 hover:text-red-300 transition-colors mt-4">Project not live</a>

                        </div>
                    </div>

                </div>


            </div>

        </section>
    );
} 