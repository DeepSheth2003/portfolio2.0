import React from 'react';

export default function ({projectData}) {

    // ane ahiya apde kahiye chhiye ke jyare koi pan project uper click kre tyare aa projectData() function ma joke actual me setState() function chhe tem te projectDetails set KAri do... jethi ae data setState() ma avi jase ane... tyare bad tema vacho...

    const projectInfo = [
        {
            projectId: 1,
            name: 'Bookify.in E-Commerce',
            description: 'Bookify is a dynamic React-based online book store that simulates a real e-commerce experience. Users can browse a variety of books listed by genre, publish their own books, and also purchase them and places orders. Site uses Firebase for user login and signup, making it easy for anyone to register and sign in. It has a clean, responsive UI with React Router for easy navigation and smooth user experience. The project is built with reusable components and handles data efficiently.',
            link: 'https://ibookify.netlify.app',
            textColor: 'rgba(162,0,162,1)'
        },
        {
            projectId: 2,
            name: 'Personal Portfolio 1.0',
            description: 'This is my personal portfolio built with HTML, CSS, and JavaScript. It showcases my skills, projects, and achievements in web development. The website is fully responsive and optimized for cross-browser compatibility. I’ve designed it to provide a smooth and interactive experience with a modern, clean UI. The project demonstrates my ability to create a professional online presence and focus on user experience.',
            link: 'https://deepsheth2003.github.io/portfolio',
            textColor: 'rgba(29,35,132,1)'
        },
        {
            projectId: 3,
            name: 'Amazon Clone E-Commerce',
            description: 'This is an Amazon clone built using HTML, CSS, and JavaScript. The website mimics the e-commerce functionality of Amazon, allowing users to browse products, view detail. It is fully responsive and optimized for cross-browser compatibility. The project demonstrates my ability to create an interactive, dynamic e-commerce platform with a focus on user experience and front-end development.',
            link: 'https://deepsheth2003.github.io/deeppamazon',
            textColor: 'rgba(13,124,89,1)'
        },
        {
            projectId: 4,
            name: 'Currency converter',
            description: 'Currency converter is a web app built with HTML, CSS, and JavaScript that converts currencies using real-time exchange rates. It features a clean, responsive UI and uses external APIs for accurate data.',
            link: 'https://deepsheth2003.github.io/currencyConv',
            textColor: 'rgba(97,37,158,1)'
        },
        {
            projectId: 5,
            name: 'Tic tac toi',
            description: 'Tic Tac Toe is a two-player game built with React, featuring smooth turn-based gameplay and win/draw logic. The UI is interactive, clean, and fully responsive across all devices.',
            link: 'https://deepsheth2003.github.io/tictac',
            textColor: 'rgba(173,38,97,1)'
        },
    ]

  return (
    <div className='left-comp pro-comp'>
        <div className="firstProject proo" onClick={() => projectData(projectInfo[0])}>
            <p>{projectInfo[0].name}</p>
            <p>{projectInfo[0].link}</p>
        </div>
        <div className="secondProject proo" onClick={() => projectData(projectInfo[1])}>
            <p>{projectInfo[1].name}</p>
            <p>{projectInfo[1].link}</p>
        </div>
        <div className="thirdProject proo" onClick={() => projectData(projectInfo[2])}>
            <p>{projectInfo[2].name}</p>
            <p>{projectInfo[2].link}</p>
        </div>
        <div className="fourthProject proo" onClick={() => projectData(projectInfo[3])}>
            <p>{projectInfo[3].name}</p>
            <p>{projectInfo[3].link}</p>
        </div>
        <div className="fifthProject proo" onClick={() => projectData(projectInfo[4])}>
            <p>{projectInfo[4].name}</p>
            <p>{projectInfo[4].link}</p>
        </div>
    </div>
  )
}
