const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5001;

app.use(cors());

const candidates = [
        { name: 'Alex', skills: 'JavaScript, React', experience: 5 },
        { name: 'Smith', skills: 'Node.js, MongoDB', experience: 3 },
        { name: 'Johnson', skills: 'HTML, CSS, JavaScript', experience: 2 },
        { name: 'Roshan', skills: 'React, Node.js', experience: 4 },
        { name: 'Akram', skills: 'Angular, TypeScript', experience: 6 },
        { name: 'Sandeep', skills: 'Python, Django', experience: 3 },
        { name: 'Sudhanshu', skills: 'Java, Spring', experience: 4 },
        { name: 'Ankit', skills: 'C++, Python', experience: 2 },
        { name: 'Michael', skills: 'C#, .NET', experience: 5 },
        { name: 'Martinez', skills: 'Ruby, Rails', experience: 1 },
        { name: 'Messi', skills: 'Kotlin, Android', experience: 7 },
        { name: 'Ronaldo', skills: 'Swift, iOS', experience: 6 },
        { name: 'Mbappe', skills: 'Go, Kubernetes', experience: 4 },
        { name: 'Vinci Jr.', skills: 'PHP, Laravel', experience: 5 },
        { name: 'Rodrygo', skills: 'Vue.js, Vuex', experience: 3 },
        { name: 'Halland', skills: 'Scala, Akka', experience: 2 },
        { name: 'Rudiger', skills: 'JavaScript, Express', experience: 4 },
        { name: 'Rodri', skills: 'Perl, MySQL', experience: 5 },
        { name: 'Salah', skills: 'HTML, Tailwind CSS', experience: 2 },
        { name: 'Neymar', skills: 'Python, Flask', experience: 6 },
        { name: 'Lewandowski', skills: 'JavaScript, Svelte', experience: 3 },
        { name: 'Suarez', skills: 'C, Embedded Systems', experience: 7 },
        { name: 'Griezmann', skills: 'Objective-C, Cocoa', experience: 5 },
        { name: 'Lloris', skills: 'Python, Pandas', experience: 3 },
        { name: 'Kane', skills: 'Rust, WebAssembly', experience: 2 },
        { name: 'Sterling', skills: 'JavaScript, D3.js', experience: 4 },
        { name: 'Grealish', skills: 'Java, Hibernate', experience: 5 },
        { name: 'Mount', skills: 'JavaScript, Vue.js', experience: 2 },
        { name: 'Kroos', skills: 'SQL, PostgreSQL', experience: 6 },
        { name: 'Modric', skills: 'Python, TensorFlow', experience: 5 },
        { name: 'Valverde', skills: 'JavaScript, Next.js', experience: 3 },
        { name: 'Casemiro', skills: 'Go, Microservices', experience: 7 },
        { name: 'Alaba', skills: 'C#, WPF', experience: 4 },
        { name: 'Benzema', skills: 'PHP, Symfony', experience: 5 },
        { name: 'Haaland', skills: 'Python, FastAPI', experience: 3 },
        { name: 'Cancelo', skills: 'JavaScript, Nuxt.js', experience: 4 },
        { name: 'Dias', skills: 'C++, Unreal Engine', experience: 5 },
        { name: 'Walker', skills: 'JavaScript, Three.js', experience: 2 },
        { name: 'Silva', skills: 'Ruby, Sinatra', experience: 6 },
        { name: 'Foden', skills: 'C#, Xamarin', experience: 3 },
        { name: 'Mahrez', skills: 'JavaScript, Redux', experience: 4 },
        { name: 'De Bruyne', skills: 'Java, Spring Boot', experience: 5 },
        { name: 'Laporte', skills: 'Kotlin, Compose', experience: 4 },
        { name: 'Ederson', skills: 'JavaScript, Chart.js', experience: 2 },
        { name: 'Gundogan', skills: 'Python, OpenCV', experience: 6 },
        { name: 'Stones', skills: 'JavaScript, Ember.js', experience: 5 },
        { name: 'Zinchenko', skills: 'R, ggplot2', experience: 3 },
        { name: 'Jesus', skills: 'JavaScript, Electron', experience: 4 },
        { name: 'Aguero', skills: 'JavaScript, Socket.IO', experience: 5 }
      

];

app.get('/api/candidates', (req, res) => {
  res.json(candidates);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
