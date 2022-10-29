// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {
    teamsList: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getIplData()
  }

  getIplData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const {teams} = data

    const convertedData = teams.map(each => ({
      id: each.id,
      name: each.name,
      teamImageUrl: each.team_image_url,
    }))

    this.setState({teamsList: convertedData, isLoading: false})

    console.log('data', data)
    console.log('converted', convertedData)
  }

  render() {
    const {teamsList, isLoading} = this.state

    return (
      <>
        <div className="main-container">
          {isLoading ? (
            <div testid="loader">
              <Loader type="Oval" color="#ffffff" height={50} width={50} />
            </div>
          ) : (
            <>
              <div className="head-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                  alt="ipl logo"
                  className="logo"
                />
                <h1 className="logo-name">IPL Dashboard</h1>
              </div>
              <ul className="dash-list">
                {teamsList.map(each => (
                  <TeamCard key={each.id} content={each} />
                ))}
              </ul>
            </>
          )}
        </div>
      </>
    )
  }
}

export default Home
