import React from 'react'
import style from "./About.module.css";

function About() {
  return (
    <div className={style.conteiner}>
      <h1 className={style.title}>Sobre mí</h1>
        <p>¡Hola! Soy un apasionado desarrollador web con una insaciable curiosidad por las nuevas 
          tecnologías y un enfoque orientado a los resultados. Mi entusiasmo por el trabajo en equipo
           y la colaboración me motiva a llevar a cabo proyectos web emocionantes y exitosos.
        </p>
        <p>Con experiencia en una variedad de tecnologías, incluyendo React, Angular, Node.js y Express, 
          tengo la capacidad de crear aplicaciones web modernas y eficientes. Mi objetivo principal 
          es brindar soluciones innovadoras que satisfagan las necesidades de los usuarios.
        </p>
        <p>Siempre estoy dispuesto a asumir nuevos desafíos y aprender de cada experiencia. 
          Creo firmemente en la mejora continua y en mantenerme al tanto de las últimas tendencias 
          y mejores prácticas en el mundo del desarrollo web.
        </p>
        <p>Cuando no estoy frente a mi computadora, me gusta explorar nuevas tecnologías, compartir 
          conocimientos con la comunidad y disfrutar del aire libre. Estoy emocionado por lo que el 
          futuro tiene reservado y estoy listo para enfrentar cualquier desafío que se presente en mi camino.
        </p>
        <p>Gracias por visitar mi perfil y espero tener la oportunidad de trabajar contigo en emocionantes 
          proyectos web en el futuro. ¡Hablemos y hagamos realidad tus ideas!
        </p>
        <div className={style.bottom}></div>
    </div>
  )
}

export default About