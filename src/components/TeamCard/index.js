// Write your code here

import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {content} = props
  const {id, name, teamImageUrl} = content

  return (
    <li className="team-card-container">
      <Link to={`/team-matches/${id}`} className="link">
        <div className="card">
          <img src={teamImageUrl} alt={name} className="team-logo" />
          <p className="team-name">{name}</p>
        </div>
      </Link>
    </li>
  )
}

export default TeamCard
