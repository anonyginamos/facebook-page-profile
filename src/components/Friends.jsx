import React from 'react';
import '../styles/Friends.css';

// Friends Component
// Displays a list of friends with their profile picture and name
const Friends = ({ friends }) => (
  <div className="friends-card">
    
    {/* Header with title and count */}
    <div className="friends-header">
      <h3 className="friends-title">Friends</h3>
      <span className="friends-count">{friends.length} friends</span>
    </div>

    {/* Friends Grid */}
    <div className="friends-grid">
      {friends.map(friend => (
        <div key={friend.id} className="friend-item">
          <img 
            src={friend.pic} 
            alt={friend.name} 
            className="friend-pic" 
          />
          <p className="friend-name">{friend.name}</p>
        </div>
      ))}
    </div>
    
  </div>
);

export default Friends;
