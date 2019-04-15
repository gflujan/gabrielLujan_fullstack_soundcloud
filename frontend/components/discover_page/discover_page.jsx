import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
// import { playSongAC } from '';
import NavbarContainer from '../navbar/navbar_container';
import SidebarContainer from '../sidebar/sidebar_container';
import SongItem from '../splash_page/song_item';

class DiscoverPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      songs: null,
    };
  };

  componentDidMount() {
    // this.props.requestAllUsers();
    this.props.requestAllSongs();
  };

  render() {
    const { allSongs } = this.props;
    if (allSongs.length === 0) return (null);

    console.log('ALL USERS: ', this.props.allUsers);
    console.log('ALL SONGS:', allSongs);

    const formattedSongs = allSongs.map((song) => {
      return (
        <Link to={`/dethklok/${song.songTitle}`}>
          <li>
            <img src={song.albumImgUrl} alt={song.songTitle} />
            {song.songTitle}
          </li>
        </Link>
      );
    });

    return (
      <div className="content">
        <NavbarContainer />
        <div className="discover-content">
          <div className="index-wrapper">
            <ul>{formattedSongs}</ul>
          </div>
          <SidebarContainer />
        </div>
      </div>
    );
  };
};

export default DiscoverPage;
