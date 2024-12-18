'use client'

import styles from './cv.module.css'
import Image from 'next/image';

import { Briefcase, User, FileBadge, BookType, GraduationCap,CircleUserRound , ClipboardCheck, Award, Book, BadgeIcon as Certificate, Globe2 } from 'lucide-react'

import logoInova from '@src/assets/images/logoInova.png';

import { Urbanist } from 'next/font/google';

const urbanist = Urbanist({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    style: ['normal', 'italic'],
  });

export default function CV({ data }) {
  return (
    <div className={styles.cv}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.profileArea}>
            <img
              src={data.header.photo}
              alt="Profile"
              className={styles.profilePhoto}
            />
            <div className={styles.profileInfo}>
              <h1>{data.header.name}</h1>
              <h2>{data.header.title}</h2>
            </div>
          </div>
          <div className={styles.logo}>
            <Image
                src={logoInova}
                alt="Inova Logo"
                className={styles.logoImage}
                priority={true} // Esta propiedad asegura que la imagen se cargue con alta prioridad
            />
            </div>
        </div>
        <div className={styles.headerBackground} />
      </header>

      <main className={styles.main}>
        {/* Personal Information */}
        <section className={styles.section}>
          <h3 className={styles.sectionTitle}>
            <CircleUserRound className={styles.sectionIcon} />
            Datos Personales
          </h3>
          <div className={styles.personalInfo}>
            <div className={styles.infoGrid}>
              <InfoItem label="Cédula" value={data.personalInfo.cedula} />
              <InfoItem label="Fecha de Nacimiento" value={data.personalInfo.fechaNacimiento} />
              <InfoItem label="Correo" value={data.personalInfo.correo} />
              <InfoItem label="Nacionalidad" value={data.personalInfo.nacionalidad} />
              <InfoItem label="Etnia" value={data.personalInfo.etnia} />
              <InfoItem label="Teléfono" value={data.personalInfo.telefono} />
              <InfoItem label="Dirección" value={data.personalInfo.direccion} />
              <InfoItem label="Estado Civil" value={data.personalInfo.estadoCivil} />
              <InfoItem label="Linkedin" value={data.personalInfo.linkedin} />
              <InfoItem label="Discapacidad" value={data.personalInfo.discapacidad} />
              <InfoItem label="Cantidad de Hijos" value={data.personalInfo.cantidadHijos} />
              <InfoItem label="Disponibilidad" value={data.personalInfo.disponibilidad} />
              <InfoItem label="Género" value={data.personalInfo.genero} />
              <InfoItem label={<span style={{ whiteSpace: 'pre-line' }}>Actividades en {"\n"} Tiempo Libre</span>} value={data.personalInfo.actividadesTiempoLibre}/>
              <InfoItem label="Aspiración Salarial" value={data.personalInfo.aspiracionSalarial} />
              <InfoItem label="Expectativas Laborales" value={data.personalInfo.expectativasLaborales} />
            </div>
          </div>
        </section>

        {/* Education */}
        <section className={styles.section}>
          <h3 className={styles.sectionTitle}>
            <GraduationCap className={styles.sectionIcon} />
            Educación
          </h3>
          <div className={styles.education}>
            <EducationItem
              title="Bachillerato"
              institution={data.education.bachillerato.institucion}
              degree={data.education.bachillerato.titulo} 
              yearStart={data.education.bachillerato.anioInicio}
              yearEnd={data.education.bachillerato.anioFin}
            />
            <EducationItem
              title="Educación Superior No Universitaria"
              institution={data.education.educacionSuperiorNoUniversitaria.institucion}
              degree={data.education.educacionSuperiorNoUniversitaria.titulo}
              yearStart={data.education.educacionSuperiorNoUniversitaria.anioInicio}
              yearEnd={data.education.educacionSuperiorNoUniversitaria.anioFin}
            />
            <EducationItem
              title="Educación Superior Universitaria"
              institution={data.education.educacionSuperiorUniversitaria.institucion}
              degree={data.education.educacionSuperiorUniversitaria.titulo}
              yearStart={data.education.educacionSuperiorUniversitaria.anioInicio}
              yearEnd={data.education.educacionSuperiorUniversitaria.anioFin}
            />
            <EducationItem
              title="Educación de Cuarto Nivel"
              institution={data.education.educacionCuartoNivel.institucion}
              degree={data.education.educacionCuartoNivel.titulo}
              yearStart={data.education.educacionCuartoNivel.anioInicio}
              yearEnd={data.education.educacionCuartoNivel.anioFin}
            />
          </div>
        </section>

        {/* Certifications */}
        <section className={styles.section}>
          <h3 className={styles.sectionTitle}>
            <FileBadge className={styles.sectionIcon} />
            Certificaciones
          </h3>
          <div className={styles.certifications}>
            {data.certifications.map((cert, index) => (
              <div key={index} className={styles.certificationItem}>
                <h4>{cert.name}</h4><span>({cert.year})</span>
                <p>{cert.institution}</p>
              </div>
            ))}
          </div>
        </section>

       {/* Experience */}
        <section className={styles.section}>
          <h3 className={styles.sectionTitle}>
            <Briefcase className={styles.sectionIcon} />
            Experiencia Laboral
          </h3>
          <div className={styles.experience}>
            {data.experience.map((exp, index) => (
              <div key={index} className={styles.experienceItem}>
                {/* Header */}
                <div className={styles.experienceHeader}>
                  <h4>
                    {exp.company} - {exp.position}
                  </h4>
                  <div className={styles.periodAndLocation}>
                    <span>{exp.period}</span>  | <span>{exp.location}</span>
                  </div>
                </div>

                {/* Two-column layout */}
                <div className={styles.experienceContent}>
                  {/* Left Column: Description and Benefits */}
                  <div className={styles.leftColumn}>
                    <h4>Descripción:</h4>
                    <ul className={styles.description}>
                      {exp.description.map((desc, i) => (
                        <li key={i}>{desc}</li>
                      ))}
                    </ul>

                    <h4>Beneficios:</h4>
                    <ul className={styles.benefits}>
                      {exp.benefits.map((benefit, i) => (
                        <li key={i}>{benefit}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Right Column: Reference and Salary */}
                  <div className={styles.rightColumn}>
                  <div className={styles.reference}>
                    <h4>Referencia Laboral:</h4>
                    <ul>
                      <li><strong>Nombre:</strong> {exp.reference.name}</li>
                      <li><strong>Cargo:</strong> {exp.reference.position}</li>
                      <li><strong>Teléfono:</strong> {exp.reference.phone}</li>
                    </ul>
                  </div>

                    <div className={styles.salary}>
                      <h4>Remuneración Económica:</h4>
                      <ul>
                        <li>${exp.salary}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>



        {/* Languages and Skills */}
        <section className={styles.section}>
          <h3 className={styles.sectionTitle}>
            <BookType className={styles.sectionIcon} />
            Idiomas y competencias
          </h3>
          <div className={styles.skillsContainer}>
            <div className={styles.languages}>
              <h4>Idiomas:</h4>
              {data.languages.map((lang, index) => (
                <div key={index} className={styles.languageItem}>
                  <span>{lang.name}</span>
                  <span>{lang.level}</span>
                </div>
              ))}
            </div>
            <div className={styles.skills}>
              <h4>Competencias:</h4>
              <ul>
                {data.skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className={styles.section}>
          <h3 className={styles.sectionTitle}>
            <Award className={styles.sectionIcon} />
            Logros Relevantes
          </h3>
          <ul className={styles.achievements}>
            {data.achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </section>


        {/* Projects */}
        <section className={styles.section}>
          <h3 className={styles.sectionTitle}>
            <ClipboardCheck className={styles.sectionIcon} />
            Proyectos Relevantes
          </h3>
          <div className={styles.projects}>
            {data.projects.map((project, index) => (
              <div key={index} className={styles.projectItem}>
                <h4>{project.name}</h4>
                <span>{project.period}</span>
                <p>{project.description}</p>
                <p><strong>Cargo:</strong> {project.cargo}</p> {/* Agregar el cargo en los proyectos */}
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

function InfoItem({ label, value, icon }) {
  return (
    <div className={styles.infoItem}>
      {icon && icon}
      {label && <span className={styles.infoLabel}>{label}:</span>}
      <span>{value}</span>
    </div>
  );
}

function EducationItem({ title, degree, institution, yearStart, yearEnd }) {
  return (
    <div className={styles.educationItem}>
      <h4>{title}</h4>
      <p>
        <strong>{degree}</strong> ({yearStart} - {yearEnd})
      </p>
      <p>{institution}</p>
    </div>
  );
}


