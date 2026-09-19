// Each group renders as its own card in the Skills section.
// `icon` keys map to the icon components in components/Icons.jsx.

const skillGroups = [
  {
    title: 'Languages & Tools',
    icon: 'code',
    items: ['Python', 'R', 'C++', 'SQL', 'Excel', 'Git', 'Figma', 'Web Development — MERN Stack'],
  },
  {
    title: 'AI, ML & Data',
    icon: 'chip',
    items: [
      'Machine Learning',
      'Deep Learning',
      'LLM',
      'RAG',
      'LLM Evaluation',
      'Gen AI',
      'TensorFlow',
      'Exploratory Data Analysis',
      'Data Mining',
      'Flask API',
    ],
  },
  {
    title: 'Soft Skills',
    icon: 'users',
    items: ['Problem-Solving', 'Teamwork', 'Communication', 'Design Thinking', 'Adaptability'],
  },
]

export default skillGroups