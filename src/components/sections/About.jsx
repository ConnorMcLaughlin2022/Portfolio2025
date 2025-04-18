export const About = () => {

    const frontendSkills = [
        "React", "CSS", "Typescript", "Tailwind", "HTML", "Javascript", "JQuery", "Bootstrap"
    ]
    const backendSkills = [
        "Node.js", "Javascript", "MongoDB", "GraphQL", "SQL", "MySQL", "Express.js"
    ]

    return <section id="about" className="min-h-screen flex items-center justify-center py-20">
        <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">About Me</h2>
            <div className="glass rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                <p className="text-grat-300 mb-6">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, consequuntur? Labore vitae veniam, expedita beatae quisquam nisi laudantium
                    consequuntur quas cum, at, ab officia ipsam excepturi repudiandae adipisci explicabo perferendis?
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">frontend</h3>
                        <div className="flex flex-wrap gap-2">
                            {frontendSkills.map((tech, key) => (
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]transition">
                                    {tech}

                                </span>
                            ))}

                        </div>
                    </div>
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Backend</h3>
                        <div className="flex flex-wrap gap-2">
                            {backendSkills.map((tech, key) => (
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]transition">
                                    {tech}

                                </span>
                            ))}

                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-col-1 md:grid-cols-2 gap-6 mt-8">
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all"> 
                <h3 className="text-lg font-bold mb-4">Education</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>
                        <strong>Full stack web development certificate</strong> - University of Washington continued education bootcamp
                    </li>
                    <li>
                        Relevant Coursework: full stack experience
                    </li>
                </ul>
                </div>
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all"> 
                <h3 className="text-xl font-bold mb-4">Work Experience</h3>
                <div className="space-y-4 text-gray-300">
                    <div>
                        <h4 className="font-semibold"> Sales and distrobution manager at Bow and Arrow Brewing
                        </h4>
                        <p>Overseeing and delivering all sales Santa Fe, Taos and Farmington</p>
                    </div>

                </div>
                </div>
            </div>
        </div>

    </section>;
};

