import StudentCard from './StudentCard';

function App() {
  return (
    <div>
      <StudentCard
        name="Taylor Brooks"
        major="Computer Science"
        bio="Taylor is passionate about UI/UX design and full-stack development. They love working on team projects."
        image="https://randomuser.me/api/portraits/men/43.jpg"
      />
    </div>
  );
}

export default App;
