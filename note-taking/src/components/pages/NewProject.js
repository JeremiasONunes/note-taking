import { useHistory } from 'react-router-dom'

import ProjectForm from '../project/ProjectForm'

import styles from './NewProject.module.css'

function NewProject() {
  const history = useHistory()

  function createPost(project) {
    project.services = []

    fetch('http://localhost:5000/projects', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(project),
    })
      .then((resp) => resp.json())
      .then((data) => {
        history.push('/projects', { message: 'Anotação criado com sucesso!' })
      })
  }

  return (
    <div className={styles.newproject_container}>
      <h1>Criar Anotação</h1>
      <p>Crie seu projeto para depois adicionar suas notas</p>
      <ProjectForm handleSubmit={createPost} btnText="Criar Anotação" />
    </div>
  )
}

export default NewProject
