// `featured: true`  -> shown in the large showcase layout at the top of the
//                      Work section (keep this to your 2-3 strongest projects).
// `featured: false` -> shown in the compact "View All Projects" grid below.
//
// Featured items alternate `reversed` (false, true, false...) so the image
// side flips down the page. `reversed` is ignored for the "More" grid.

const projects = [
  // ---------------- Featured ----------------
  {
    title: 'RAG Chatbot',
    description:
      'A retrieval-augmented chatbot that answers questions from your own documents and cites the sources behind every answer. A FastAPI backend rewrites each question for better recall, pulls candidates from a FAISS/Chroma vector store, and re-ranks them with a cross-encoder before handing the best context to an LLM (Groq, OpenAI, or a local Ollama model). Retrieval quality is tracked with RAGAS faithfulness and precision scores, and the whole stack — Streamlit front end, API, and vector store — runs from a single Docker Compose command with rate limiting and pytest coverage on the backend.',
    tags: ['Python', 'FastAPI', 'Streamlit', 'FAISS', 'Docker', 'RAGAS'],
    repoUrl: 'https://github.com/Javeed004/RAG',
    demoUrl: null,
    image: '/images/project-2.png',
    reversed: true,
    featured: true,
  },
  {
    title: 'Fine-Tuned Text-to-SQL Engine',
    description:
      'Fine-tuned a small open-weight model (Qwen2.5-Coder-3B) with QLoRA on the Spider benchmark, lifting execution accuracy from a 61.0% zero-shot baseline to 75.5% on a SQL-execution eval harness. The model was then merged, quantized to a 1.9 GB Q4_K_M GGUF, and served through a FastAPI layer that generates SQL from a schema and a question, runs it in a read-only in-memory SQLite sandbox with a timeout and row cap, and returns the results. Ships with a demo UI, a CLI, per-IP rate limiting, and a one-container Docker image that runs entirely on CPU.',
    tags: ['Python', 'QLoRA', 'Unsloth', 'llama.cpp', 'FastAPI', 'Docker'],
    repoUrl: 'https://github.com/Javeed004/text-to-sql',
    demoUrl: null,
    image: '/images/project-1.png',
    reversed: false,
    featured: true,
  },
  {
    title: 'Multi Model Based Authentication System',
    description:
      "AI-powered facial age verification integrated into a video platform to gate restricted content without manual review. A webcam feed is sampled in real time, run through a TensorFlow age-estimation model, and the result is combined with a secondary verification signal before access is granted or denied. Built the end-to-end pipeline — capture, inference, and the React front end that surfaces the verification state to the user — with an emphasis on keeping the check fast enough to feel instant rather than like a gate.",
    tags: ['React JS', 'Python', 'TensorFlow'],
    repoUrl: 'https://github.com/Javeed004/Multimodal_Authenticator',
    demoUrl: null,
    image: '/images/project-1.png',
    reversed: false,
    featured: true,
  },

  // ---------------- More Projects ----------------
  {
    title: 'Smart Energy Monitoring',
    description:
      'A real-time energy dashboard that turns raw meter readings into forecasts households and small businesses can actually act on. Live data streams in from Google Sheets, gets cleaned and aggregated, then fed into Facebook Prophet to project voltage, power draw, and consumption trends days ahead. Plotly renders the results as interactive charts inside a Streamlit app, with thresholds tuned around typical Indian tariff structures so the forecasts translate directly into "this is what your next bill looks like."',
    tags: ['Python', 'Streamlit', 'Prophet', 'Plotly', 'Google Sheets API'],
    repoUrl: 'https://github.com/Javeed004/Smart_Energy_Monitoring',
    demoUrl: null,
    image: '/images/energy.png',
    reversed: true,
    featured: false,
  },
  {
    title: 'Cropy',
    description:
      "An ML-driven crop recommendation system built for farmers who need a fast, data-backed second opinion before planting. The model takes in soil composition, rainfall, temperature, and regional climate data, and returns a ranked list of crops best suited to that specific field rather than a generic regional guideline. The Flask backend serves predictions to a React front end designed to be usable with minimal technical background, since the people who need this tool most aren't data scientists.",
    tags: ['React JS', 'Flask', 'Python'],
    repoUrl: 'https://github.com/Javeed004/Cropy',
    demoUrl:
      'https://drive.google.com/file/d/19R2qQbSh8645B8hFhCL_8senob-prcJJ/view?usp=sharing',
    image: '/images/project-1.png',
    reversed: false,
    featured: false,
  },
  {
    title: 'Bone Fracture Detection',
    description:
      'A deep learning model trained to detect and classify bone fractures directly from X-ray images, built to assist clinicians during the initial screening pass. A convolutional neural network trained with TensorFlow and scikit-learn processes each scan through an end-to-end image analysis pipeline, flagging likely fractures and their probable classification so radiologists can prioritize review rather than start from zero. Reached 96% accuracy on the held-out test set.',
    tags: ['Python'],
    repoUrl: 'https://github.com/Javeed004/Bone_fracture_detection',
    demoUrl: null,
    image: '/images/project-2.png',
    reversed: true,
    featured: false,
  },
]

export default projects