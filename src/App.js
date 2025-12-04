import React, { useState, useEffect } from "react";
import profileImage from "./profileimage.jpg";
import poster1 from "./assets/zionfluxposter10_copy.jpg";
import poster2 from "./assets/zionflux_poster22.jpg";
import poster3 from "./assets/vetposter_copy.jpg";
import poster4 from "./assets/sterlingposter2.jpg";
import poster5 from "./assets/oplaline_socialmedia3_copy.jpg";
import poster6 from "./assets/followers9k_copy.jpg";
import poster7 from "./assets/Opaline_poster1_copy.jpg";
import uiDesign from "./assets/Splash_screen_1.jpg";
import Home from "./assets/Home.jpg";
import Eldersreel from "./video/myVideo.mp4";
import screenshot from "./assets/Screenshot.jpeg";
import screenshot1 from "./assets/Screenshot_1png.jpg";
import Worshipnight from "./video/WorshipN.mp4";
import {
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  ChevronDown,
  Play,
  ImageIcon,
  Monitor,
  Film,
} from "lucide-react";

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [filterCategory, setFilterCategory] = useState("all");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const skills = [
    { name: "Photoshop", level: 95 },
    { name: "Illustrator", level: 80 },
    { name: "After Effects", level: 65 },
    { name: "Premiere Pro", level: 70 },
    { name: "Figma", level: 80 },
    { name: "React", level: 60 },
    { name: "Node.js", level: 65 },
    { name: "MongoDB", level: 70 },
    { name: "Express", level: 65 },
  ];

  // Sample projects - Replace these with your actual work
  const projects = [
    {
      id: 1,
      title: "linkdn Flyer Design",
      category: "graphic",
      type: "image",
      description: "Followers",
      tools: ["Photoshop"],
      // Replace this placeholder with your actual image URL
      thumbnail: poster6,
      fullImage: poster6,
    },
    {
      id: 2,
      title: "Worshipnight ",
      category: "video",
      type: "video",
      description: "Dynamic promotional video ",
      tools: ["After Effects", "Premiere Pro"],
      thumbnail: screenshot1,
      // Replace with your video URL (YouTube, Vimeo, or direct video file)
      videoUrl: Worshipnight,
    },
    {
      id: 3,
      title: " Internet Mobile App",
      category: "uiux",
      type: "image",
      description: "Complete UI/UX design for  Intrenet mobile  application",
      tools: ["Figma"],
      thumbnail: uiDesign,
      fullImage: uiDesign,

      link: "https://www.figma.com/design/2ufPf9LJluKgcrJ2IaMgW7/Internet-Billing-System?node-id=2-58&t=Xmoqq2nmbUEwzyos-1",
    },
    {
      id: 4,
      title: "New Month poster",
      category: "graphic",
      type: "image",
      description: "welcoming the new moth with joy",
      tools: ["Photoshop"],
      thumbnail: poster1,
      fullImage: poster1,
    },
    {
      id: 5,
      title: "Church Reel",
      category: "video",
      type: "video",
      description: "Church Reel",
      tools: ["After Effects", "Premiere Pro"],
      thumbnail: screenshot,
      videoUrl: Eldersreel,
    },
    {
      id: 6,
      title: "Job Connect",
      category: "uiux",
      type: "image",
      description: "Figma design for a job connect system",
      tools: ["Figma"],
      thumbnail: Home,
      fullImage: Home,
    },
    {
      id: 7,
      title: "VetCare POster",
      category: "graphic",
      type: "image",
      description: "Marketing what client does",
      tools: ["Photoshop"],
      thumbnail: poster3,
      fullImage: poster3,
    },
    // {
    //   id: 8,
    //   title: "Brand Story Video",
    //   category: "video",
    //   type: "video",
    //   description: "Cinematic brand story with testimonials",
    //   tools: ["Premiere Pro", "After Effects"],
    //   thumbnail: "https://via.placeholder.com/600x400/aaa/333?text=Brand+Video",
    //   videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    // },
    {
      id: 9,
      title: "Job Marketing",
      category: "graphic",
      type: "image",
      description: "Marketing Dubai Jobs",
      tools: ["Photoshop"],
      thumbnail: poster4,
      fullImage: poster4,
    },
    {
      id: 10,
      title: "Happy new moth",
      category: "graphic",
      type: "image",
      description: "Happy new month flyer design",
      tools: ["Illustrator", "Photoshop"],
      thumbnail: poster7,
      fullImage: poster7,
    },
    {
      id: 11,
      title: "Account  marketing",
      category: "graphic",
      type: "image",
      description: "followers poster",
      tools: ["Illustrator", "Photoshop"],
      thumbnail: poster5,
      fullImage: poster5,
    },
    {
      id: 12,
      title: "Marketing",
      category: "graphic",
      type: "image",
      description: "Elegant ",
      tools: ["Photoshop"],
      thumbnail: poster2,
      fullImage: poster2,
    },
  ];

  const categories = [
    { id: "all", name: "All Work", icon: Monitor },
    { id: "graphic", name: "Graphic Design", icon: ImageIcon },
    { id: "uiux", name: "UI/UX Design", icon: Monitor },
    { id: "video", name: "Video Editing", icon: Film },
  ];

  const filteredProjects =
    filterCategory === "all"
      ? projects
      : projects.filter((p) => p.category === filterCategory);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
    setActiveSection(id);
  };

  const openLightbox = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-white shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold">
              <span className="text-black">Faith</span>
              <span className="text-gray-500">Chebet</span>
            </div>

            <div className="hidden md:flex space-x-8">
              {["home", "about", "skills", "work", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors ${
                    activeSection === item
                      ? "text-black font-semibold"
                      : "text-gray-600 hover:text-black"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {["home", "about", "skills", "work", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left px-3 py-2 capitalize hover:bg-gray-100"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 pt-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6 animate-fadeIn">
            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="block text-gray-900">Creative Designer</span>
              <span className="block text-gray-600 mt-2">& Developer</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              Crafting beautiful designs and seamless digital experiences
              through graphic design, UI/UX, and video editing.
            </p>
            <div className="flex gap-4 justify-center pt-4">
              <button
                onClick={() => scrollToSection("work")}
                className="px-8 py-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-all transform hover:scale-105 shadow-lg"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="px-8 py-3 border-2 border-orange-500 text-orange-500 rounded-full hover:bg-orange-500 hover:text-white transition-all transform hover:scale-105"
              >
                Get In Touch
              </button>
            </div>
          </div>
          <button
            onClick={() => scrollToSection("about")}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
          >
            <ChevronDown size={32} className="text-gray-600" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-orange-500 shadow-2xl">
                  {/* Replace this URL with your actual profile image */}
                  <img
                    src={profileImage}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-orange-500 text-white px-6 py-3 rounded-full font-bold shadow-lg">
                  Available for Work
                </div>
              </div>
            </div>

            {/* About Text */}
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                I'm a multidisciplinary creative professional specializing in
                graphic design, UI/UX design, and video editing. With a passion
                for creating visually stunning and user-friendly experiences, I
                bring ideas to life through a combination of design expertise
                and technical skills.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                My approach combines aesthetic excellence with functional
                design, ensuring every project not only looks great but also
                serves its purpose effectively. Whether it's crafting brand
                identities, designing intuitive interfaces, or producing
                engaging video content, I'm committed to delivering exceptional
                results.
              </p>
              <div className="flex flex-wrap gap-3 pt-4">
                {[
                  "Graphic Design",
                  "UI/UX Design",
                  "Video Editing",
                  "Web Development",
                  "Brand Identity",
                  "Motion Graphics",
                ].map((service, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-orange-500 hover:text-white transition-all cursor-default"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Skills & Tools
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            My expertise across design and development
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="flex justify-between items-center mb-3">
                  <span className="font-semibold text-gray-800">
                    {skill.name}
                  </span>
                  <span className="text-orange-500 font-bold">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-orange-500 to-orange-600 h-full rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Gallery Section */}
      <section id="work" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            My Work
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Browse through my portfolio of designs and videos
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => setFilterCategory(cat.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all ${
                    filterCategory === cat.id
                      ? "bg-orange-500 text-white shadow-lg"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  <Icon size={18} />
                  {cat.name}
                </button>
              );
            })}
          </div>

          {/* Project Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => openLightbox(project)}
                className="group relative bg-gray-100 rounded-lg overflow-hidden cursor-pointer transform hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl"
              >
                <div className="aspect-[3/4] overflow-hidden bg-gray-200">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-300 flex items-center justify-center">
                  <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                    {project.type === "video" ? (
                      <Play size={48} className="mx-auto mb-2" />
                    ) : (
                      <ImageIcon size={48} className="mx-auto mb-2" />
                    )}
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-sm text-gray-300">Click to view</p>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-3 right-3 bg-white px-3 py-1 rounded-full text-xs font-semibold">
                  {project.category === "graphic"
                    ? "Graphic"
                    : project.category === "uiux"
                    ? "UI/UX"
                    : "Video"}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
          >
            <X size={32} />
          </button>

          <div
            className="max-w-6xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {selectedProject.type === "video" ? (
              <div className="aspect-video w-full bg-black rounded-lg overflow-hidden">
                <iframe
                  src={selectedProject.videoUrl}
                  className="w-full h-full"
                  allowFullScreen
                  title={selectedProject.title}
                />
              </div>
            ) : (
              <div className="bg-white rounded-lg overflow-hidden">
                <img
                  src={selectedProject.fullImage}
                  alt={selectedProject.title}
                  className="w-full h-auto max-h-[80vh] object-contain"
                />
              </div>
            )}

            <div className="bg-white rounded-lg mt-4 p-6">
              <h3 className="text-2xl font-bold mb-2">
                {selectedProject.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {selectedProject.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tools.map((tool, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-3 py-1 bg-black text-white rounded-full"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Have a project in mind? I'd love to hear about it. Let's create
            something amazing together.
          </p>
          <div className="flex justify-center gap-6 mb-12">
            <a
              href="faychebbyruto@gmail.com"
              className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full hover:bg-gray-200 transition-all transform hover:scale-105"
            >
              <Mail size={20} />
              Email Me
            </a>
            <a
              href="https://www.linkedin.com/in/faith-chebet-73a385256/"
              className="flex items-center gap-2 px-6 py-3 border-2 border-white rounded-full hover:bg-white hover:text-black transition-all transform hover:scale-105"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
          </div>
          <div className="flex justify-center gap-8 text-gray-400">
            <a
              href="https://github.com/Fay-chebby"
              className="hover:text-white transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/faith-chebet-73a385256/"
              className="hover:text-white transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="faychebbyruto@gmail.com"
              className="hover:text-white transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2025 Faith. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
