import React, { useState, useEffect } from 'react';
import CardList from './CardList';
import Searchbox from './Searchbox';
import Scroll from './Scroll';
import ErrorBoundry from './ErrorBoundry';
import './App.css'

function App() {

    // constructor() {
    //     super();
    //     this.state = {
    //         robots: [],
    //         searchfield: ''
    //     }
    // }

    const [robots, setRobots] = useState([])
    const [searchfield, setSearchfield] = useState('')
    const [count, setCount] = useState(0)

    // componentDidMount() {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //         .then(response =>
    //             response.json())
    //         .then(users => { this.setState({ robots: users }) }
    //         );
    // }

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response =>
                response.json())
            .then(users => { setRobots(users) }
            );
    }, [])

    const onSearchChange = (event) => {
        setSearchfield(event.target.value)
    }


    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })

    return !robots.length ?
        (
            <div className="tc">
                <h1>Loading...</h1>
            </div>
        )
        :
        (
            <div className='tc'>
                <h1>RoboFriends</h1>
                <h4 style={{ display: 'none' }}>{count}</h4>
                <button style={{ display: 'none' }} onClick={() => setCount(count + 1)} >Click to Count</button>
                <Searchbox searchChange={onSearchChange} />
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={filteredRobots} />
                    </ErrorBoundry>
                </Scroll>

            </div>

        );



}

export default App;