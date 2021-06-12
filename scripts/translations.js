const langEl = document.querySelector('.langWrap');
const link = document.querySelectorAll('.langWrap a');
const titleEl = document.querySelector('.title');
const descEl = document.querySelector('.description');
const techEl = document.querySelector('.technologies')

link.forEach(el => {
    el.addEventListener('click', () => {
        langEl.querySelector('.active').classList.remove('active');
        el.classList.add('active')

        const attr = el.getAttribute('language')

        titleEl.textContent = data[attr].title
        descEl.textContent = data[attr].description
        techEl.textContent = data[attr].technologies
    })
});
let data = {
    "english":
    {
        "title": "Web Developer",
        "description": "Hello! My name is Graziele Oliveira and I'm a brazilian Computer Engineering student who really likes Web Development :). Right now, I'm studying to increase my set of skills to become a Full Stack developer.",
        "technologies": "Technologies:"
    },
    "portuguese":
    {
        "title": "Desenvolvedora Web",
        "description": "Olá! Meu nome é Graziele Oliveira e sou uma estudante de Engenharia da Computação que gosta bastante do desenvolvimento Web :). No momento, estou estudando com o objetivo de aumentar meu leque de habilidades e me tornar uma desenvolvedora Full Stack",
        "technologies": "Tecnologias:"
    },
    "chinese":
    {
        "title": "Web开发者",
        "description": "大家好！我叫甘梦希，我是来自巴西的电脑工程师专业的学生，非常喜欢Web开发:). 目前，我正在学习软件开发，以便增强我的相关技能，实现成为全栈开发者的目标。",
        "technologies": "技术:"
    }
}