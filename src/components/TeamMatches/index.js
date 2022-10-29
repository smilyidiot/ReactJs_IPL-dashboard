// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  state = {
    matchDetails: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getTeamMatchDetails()
  }

  getTeamMatchDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    console.log(data)

    const convertedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
    }

    const {latestMatchDetails, recentMatches} = convertedData

    const newLatestMatchDetails = {
      umpires: latestMatchDetails.umpires,
      result: latestMatchDetails.result,
      manOfTheMatch: latestMatchDetails.man_of_the_match,
      id: latestMatchDetails.id,
      date: latestMatchDetails.date,
      venue: latestMatchDetails.venue,
      competingTeam: latestMatchDetails.competing_team,
      competingTeamLogo: latestMatchDetails.competing_team_logo,
      firstInnings: latestMatchDetails.first_innings,
      secondInnings: latestMatchDetails.second_innings,
      matchStatus: latestMatchDetails.match_status,
    }

    const newRecentMatches = recentMatches.map(idea => ({
      umpires: idea.umpires,
      result: idea.result,
      manOfTheMatch: idea.man_of_the_match,
      id: idea.id,
      date: idea.date,
      venue: idea.venue,
      competingTeam: idea.competing_team,
      competingTeamLogo: idea.competing_team_logo,
      firstInnings: idea.first_innings,
      secondInnings: idea.second_innings,
      matchStatus: idea.match_status,
    }))

    convertedData.latestMatchDetails = newLatestMatchDetails
    convertedData.recentMatches = newRecentMatches

    this.setState({matchDetails: convertedData, isLoading: false})
  }

  render() {
    const {matchDetails, isLoading} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatches} = matchDetails

    const {match} = this.props
    const {params} = match
    const {id} = params

    return (
      <>
        {isLoading && (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        )}
        {!isLoading && (
          <div className={`bg-container ${id}`}>
            <img src={teamBannerUrl} alt="team banner" className="banner-img" />
            <p className="latest-heading">Latest Matches</p>
            <LatestMatch
              latestContent={latestMatchDetails}
              key={latestMatchDetails.id}
            />
            <ul className="recent-list">
              {recentMatches.map(eachMatch => (
                <MatchCard recentDetails={eachMatch} key={eachMatch.id} />
              ))}
            </ul>
          </div>
        )}
      </>
    )
  }
}

export default TeamMatches
