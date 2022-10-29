// Write your code here
import './index.css'

const MatchCard = props => {
  const {recentDetails} = props

  const {result, competingTeam, competingTeamLogo, matchStatus} = recentDetails

  //   const newLatestMatchDetails = {
  //       umpires: latestMatchDetails.umpires,
  //       result: latestMatchDetails.result,
  //       manOfTheMatch: latestMatchDetails.man_of_the_match,
  //       id: latestMatchDetails.id,
  //       date: latestMatchDetails.date,
  //       venue: latestMatchDetails.venue,
  //       competingTeam: latestMatchDetails.competing_team,
  //       competingTeamLogo: latestMatchDetails.competing_team_logo,
  //       firstInnings: latestMatchDetails.first_innings,
  //       secondInnings: latestMatchDetails.second_innings,
  //       matchStatus: latestMatchDetails.match_status,
  //     }
  const status = matchStatus === 'Won' ? 'won' : 'lost'

  return (
    <li className="recent-card">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="recent-logo"
      />
      <p className="recent-opp">{competingTeam}</p>
      <p className="result">{result}</p>
      <p className={status}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
