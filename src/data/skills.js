// Each group renders as its own card in the Skills section (3 per row on desktop).
// `icon` keys map to the icon components in components/Icons.jsx.
// `usedIn` (optional) renders a small "Used in" footer on the card — it ties
// the skills to real projects instead of leaving them as a bare list.
// Keep each group to ~8 items or fewer so the cards stay roughly the same height.

const skillGroups = [
  {
    title: 'Languages',
    icon: 'code',
    items: ['Python', 'R', 'C++', 'SQL', 'HTML', 'CSS', 'JavaScript'],
    usedIn: 'Every project, Python most of all',
  },
  {
    title: 'Generative AI & LLMs',
    icon: 'sparkles',
    items: [
      'LLM',
      'RAG',
      'Gen AI',
      'LLM Fine-Tuning (LoRA, QLoRA)',
      'Model Quantization (GGUF)',
      'Vector DBs (MongoDB, FAISS, Chroma)',
      'Re-ranking & Retrieval Evaluation',
      'Text-to-SQL',
    ],
    usedIn: 'RAG Chatbot · Text-to-SQL Engine',
  },
  {
    title: 'ML & Data Science',
    icon: 'chip',
    items: [
      'Machine Learning',
      'Deep Learning',
      'Computer Vision',
      'TensorFlow',
      'Time-Series Forecasting',
      'Statistics',
      'Exploratory Data Analysis',
      'Data Mining',
    ],
    usedIn: 'Bone Fracture Detection · Smart Energy Monitoring · Cropy',
  },
  {
    title: 'Backend & Deployment',
    icon: 'server',
    items: ['FastAPI', 'Flask API', 'REST API Design', 'Docker', 'pytest', 'Streamlit', 'Microsoft Azure'],
    usedIn: 'RAG Chatbot · Text-to-SQL Engine · Cropy',
  },
  {
    title: 'Web, BI & Design',
    icon: 'layers',
    items: ['MERN Stack', 'React JS', 'Node.js', 'Git', 'Figma', 'Excel', 'Power BI', 'RapidMiner'],
    usedIn: 'Multi Model Authentication · Cropy',
  },
  {
    title: 'Soft Skills',
    icon: 'users',
    items: [
      'Leadership',
      'Problem-Solving',
      'Decision-Making',
      'Teamwork',
      'Communication',
      'Design Thinking',
      'Adaptability',
    ],
  },
]

export default skillGroups