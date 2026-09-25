// `featured: true`  -> shown in the large showcase layout at the top of the
//                      Work section (keep this to your 2-3 strongest projects).
// `featured: false` -> shown in the compact "View All Projects" grid below.
//
// TODO: replace the placeholder entries at the bottom (marked "TODO") with
// your real projects — title, description, tags, links, and a screenshot
// dropped into /public/images. You can add as many as you like; the grid
// wraps automatically.

const projects = [
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
  {
    title: 'Smart Energy Monitoring',
    description:
      'A real-time energy dashboard that turns raw meter readings into forecasts households and small businesses can actually act on. Live data streams in from Google Sheets, gets cleaned and aggregated, then fed into Facebook Prophet to project voltage, power draw, and consumption trends days ahead. Plotly renders the results as interactive charts inside a Streamlit app, with thresholds tuned around typical Indian tariff structures so the forecasts translate directly into "this is what your next bill looks like."',
    tags: ['Python', 'Streamlit', 'Prophet', 'Plotly', 'Google Sheets API'],
    repoUrl: 'https://github.com/Javeed004/Smart_Energy_Monitoring',
    demoUrl: null,
    image: '/images/energy.png',
    reversed: true,
    featured: true,
  },
  {
    title: 'Cropy',
    description:
      'An ML-driven crop recommendation system built for farmers who need a fast, data-backed second opinion before planting. The model takes in soil composition, rainfall, temperature, and regional climate data, and returns a ranked list of crops best suited to that specific field rather than a generic regional guideline. The Flask backend serves predictions to a React front end designed to be usable with minimal technical background, since the people who need this tool most aren\'t data scientists.',
    tags: ['React JS', 'Flask', 'Python'],
    repoUrl: 'https://github.com/Javeed004/Cropy',
    demoUrl:
      'https://drive.google.com/file/d/19R2qQbSh8645B8hFhCL_8senob-prcJJ/view?usp=sharing',
    image: '/images/project-1.png',
    reversed: false,
    featured: true,
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

  // // ---- TODO: fill these in with your real projects ----
  // {
  //   title: 'TODO: Project Title',
  //   description:
  //     'TODO: A few sentences on what this project does, the problem it solves, how it works under the hood, and the impact or result.',
  //   tags: ['TODO: Tag'],
  //   repoUrl: '#',
  //   demoUrl: null,
  //   image: '/images/project-1.png',
  //   reversed: false,
  //   featured: false,
  // },
  // {
  //   title: 'TODO: Project Title',
  //   description:
  //     'TODO: A few sentences on what this project does, the problem it solves, how it works under the hood, and the impact or result.',
  //   tags: ['TODO: Tag'],
  //   repoUrl: '#',
  //   demoUrl: null,
  //   image: '/images/project-1.png',
  //   reversed: true,
  //   featured: false,
  // },
  // {
  //   title: 'TODO: Project Title',
  //   description:
  //     'TODO: A few sentences on what this project does, the problem it solves, how it works under the hood, and the impact or result.',
  //   tags: ['TODO: Tag'],
  //   repoUrl: '#',
  //   demoUrl: null,
  //   image: '/images/project-1.png',
  //   reversed: false,
  //   featured: false,
  // },
]

export default projects