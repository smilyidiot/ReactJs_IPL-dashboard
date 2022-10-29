// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestContent} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = latestContent

  return (
    <div className="latest-match-card">
      <div className="left">
        <p className="compete">{competingTeam}</p>
        <p className="date">{date}</p>
        <p className="venue">{venue}</p>
        <p className="result">{result}</p>
      </div>
      <img
        src={competingTeamLogo}
        className="latest-image"
        alt={`latest match ${competingTeam}`}
      />
      <div className="right">
        <h1 className="head">First Innings</h1>
        <p className="para">{firstInnings}</p>
        <h1 className="head">Second Innings</h1>
        <p className="para">{secondInnings}</p>
        <h1 className="head">Man Of The Match</h1>
        <p className="para">{manOfTheMatch}</p>
        <h1 className="head">Umpires</h1>
        <p className="para">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
