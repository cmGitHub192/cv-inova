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
              <InfoItem label="Dirección" value={data.personalInfo.direccion} />
              <InfoItem label="Discapacidad" value={data.personalInfo.discapacidad} />
              <InfoItem label="Género" value={data.personalInfo.genero} />
              <InfoItem label="Estado Civil" value={data.personalInfo.estadoCivil} />
              <InfoItem label="Cantidad de Hijos" value={data.personalInfo.cantidadHijos} />
              <InfoItem label={<span style={{ whiteSpace: 'pre-line' }}>Actividades en {"\n"} Tiempo Libre</span>} value={data.personalInfo.actividadesTiempoLibre}/>
              <InfoItem label="Teléfono" value={data.personalInfo.telefono} />
              <InfoItem label="Linkedin" value={data.personalInfo.linkedin} />
              <InfoItem label="Disponibilidad" value={data.personalInfo.disponibilidad} />
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
                <h4>{cert.name}</h4>
                <p>{cert.institution}</p>
                <span>{cert.year}</span>
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
                <div className={styles.experienceHeader}>
                  <h4>{exp.company}</h4>
                  <span>{exp.period}</span>
                </div>
                <p className={styles.position}>{exp.position}</p>
                <p className={styles.location}>{exp.location}</p>
                <ul className={styles.description}>
                  {exp.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
                <div className={styles.benefits}>
                  <h5>Beneficios:</h5>
                  <ul>
                    {exp.benefits.map((benefit, i) => (
                      <li key={i}>{benefit}</li>
                    ))}
                  </ul>
                </div>
                <div className={styles.reference}>
                  <h5>Referencia Laboral:</h5>
                  <p>{exp.reference.name}</p>
                  <p>{exp.reference.position}</p>
                  <p>{exp.reference.phone}</p>
                </div>
              </div>
            ))}
          </div>
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

function EducationItem({ title, institution, degree, yearStart, yearEnd }) {
  return (
    <div className={styles.educationItem}>
      <h4>{title}</h4>
      <p>{institution}</p>
      <p>{degree}</p>
      <span>{yearStart} - {yearEnd}</span> {/* Añadir el rango de años */}
    </div>
  );
}
