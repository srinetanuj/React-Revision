
import './App.css';
import Avatar from './Components/Avatar';
import Button from './Components/Button';

const users = [
  {
    id: 1,
    name: "Rohit",
    src: "https://media.istockphoto.com/photos/smiling-indian-man-looking-at-camera-picture-id1270067126?s=612x612",
    rounded:true,
    hideName: false
  },
  {
    id: 2,
    name: "Rohan",
    src: "https://media.istockphoto.com/photos/young-handsome-man-with-beard-wearing-casual-sweater-standing-over-picture-id1212702108?k=20&m=1212702108&s=612x612&w=0&h=ZI4gKJi2d1dfi74yTljf4YhulA1nfhD3dcUFGH-NUkY=",
    rounded:false,
    hideName: true
  }
];

const Avatars = users.map((user)=>{
  return (
    <Avatar
   key={user.id}
   src={user.src}
   name={user.name}
   rounded={user.rounded}
   hideName={user.hideName}
  />
  )
})
  console.log(Avatars)

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React App</h1>
        {Avatars}
        <Button text="CLICK ME!" />
        <Button text="Masai" onClick={() => alert("You clicked Masai!")}/>
      </header>
    </div>
  );
}

export default App;
