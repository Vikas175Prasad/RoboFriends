import React from 'react';
import CardList from './CardList';
import Searchbox from './Searchbox';
import Scroll from './Scroll';
import ErrorBoundry from './ErrorBoundry';
import './App.css'

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response =>
                response.json())
            .then(users => { this.setState({ robots: users }) }
            );
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })

        return !this.state.robots.length ?
            (
                <div className="tc">
                    <h1>Loading...</h1>
                </div>
            )
            :
            (
                <div className='tc'>
                    <h1>RoboFriends</h1>
                    <Searchbox searchChange={this.onSearchChange} />
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots={filteredRobots} />
                        </ErrorBoundry>
                    </Scroll>

                </div>

            );


    }
}

export default App;