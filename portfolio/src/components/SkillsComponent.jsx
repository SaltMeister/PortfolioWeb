import styles from '../css/Skills.module.css';

export default function SkillsComponent() {
  return (
    <div id="Skills" class={styles.skillWrapper}>
      <h3>Skills</h3>
      <div class={styles.container}>
        <ul>
          <li class={styles.header}>Languages</li>
          <li>JavaScript</li>
          <li>Python</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>C#</li>
          <li>C++</li>
          <li>Swift</li>
        </ul>
        <ul>
          <li class={styles.header}>Frameworks</li>
          <li>React.js</li>
          <li>Next.js</li>
          <li>Flask</li>
          <li>Express.js</li>
          <li>Tailwind CSS</li>
          <li>Swift UI</li>
          <li>ASP .NET</li>
        </ul>
        <ul>
          <li class={styles.header}>Tools</li>
          <li>MongoDB</li>
          <li>Firebase</li>
          <li>Google Cloud</li>
          <li>MySQL</li>
          <li>Pinecone</li>
          <li>Open AI</li>
          <li>Git</li>
          <li>Docker</li>
        </ul>        
      </div>

    </div>
  )
}