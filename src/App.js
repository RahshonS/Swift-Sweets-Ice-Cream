import './App.css';
import icecream from "./pictures/ice-cream2.jpg"

//Header component 
//{props.businessName} is a JSX expression 
function Header(props){
  return(
    <header>
      <h1>{props.businessName} Ice Cream Shop</h1>
    </header>
  )
}

function Main(props){
  return (
    <section>
      <p>Mix and Match to make your dream treat with over {props.toppingCount} Toppings and counting</p>

      <img src={icecream} height={150} alt="a cute cartoon ice cream cone"/>
      
      <ul>
        {props.ourToppings.map((topping) => (
          <li key={topping.id}>{topping.title}</li>))}
      </ul>
      
    </section>
  )
}

function Footer(props){
  return(
    <p>As of {props.currentYear} we've catered 765 events!</p>
  )
}

//display this list in our main component by mapping over it
//then makking the data available to the component
const toppings = [
  "Rainbow Sprinkles",
  "Chocoalate Sprinkles",
  "Brownie Chunks",
];

//This is building the object b4 we pass it to a component as a property 
const toppingObjects = toppings.map((topping, i) => ({id: i, title: topping}));console.log(toppingObjects);

//console log each topping
//This helps with mapping 
//but will reside in main


//App component
//<Header /> is the tag we created that allows us to call / render to header component
//businessName is the name of the property we wish to pass in to our header component 
//here is where we pass whatever we want to our components
function App() {
  return (
    <div className="App">
        <Header businessName="Swift Sweets"/>          
        <Main toppingCount = "forty-four" ourToppings={toppingObjects} />
        <Footer currentYear={new Date().getFullYear()}/>
    </div>
  );
}

export default App;
