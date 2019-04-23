import React,{Component} from "react"
import ContactCard from "./Components/ContactCard";
import Conditional from "./Conditional";



class App extends Component {
    constructor() {
        super();
        this.state = {
            isLoading: true
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isLoading: false
            })
        }, 1500)
    }

    render() {
        return (
            <div>
                <Conditional isLoading={this.state.isLoading}/>
            </div>
        )
    }
}

export default App

// class App extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             count: 0
//         }
//     }
//
//     render() {
//         return (
//             <div>
//                 <h1>{this.state.count}</h1>
//                 <button onClick={this.handleClick}>Change!</button>
//                 {console.log(this.state.count)}
//             </div>
//         )
//     }
//
//
//     handleClick = () => this.setState({
//         count: this.state.count + 1
// })
//
// }
//
// export default App


// function App() {
//     return (
//         <div className="contacts">
//           <ContactCard
//               contact = {{
//                     name : 'Mr. Whiskerson',
//                     imgUrl : "http://placekitten.com/300/200",
//                     phone : '(212) 555-1234',
//                     email :  'mr.whiskaz@catnap.meow'
//           }}
//
//           />
//
//             <ContactCard
//                 contact={{
//                     name: "Fluffykins",
//                     imgUrl: "http://placekitten.com/400/200",
//                     phone: "(212) 555-2345",
//                     email: "fluff@me.com"
//                 }}
//             />
//
//             <ContactCard
//                 contact={{
//                     name: "Destroyer",
//                     imgUrl: "http://placekitten.com/400/300",
//                     phone: "(212) 555-3456",
//                     email: "ofworlds@yahoo.com"
//                 }}
//             />
//
//             <ContactCard
//                 contact={{
//                     name: "Felix",
//                     imgUrl: "http://placekitten.com/200/100",
//                     phone: "(212) 555-4567",
//                     email: "thecat@hotmail.com"
//                 }}
//             />
//         </div>
//     )
// }
//
// export default App