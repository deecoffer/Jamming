import React from 'react';
import './Playlist.css';
import Tracklist from '../Tracklist/Tracklist';
import { toHaveAccessibleDescription } from '@testing-library/jest-dom/dist/matchers';

class Playlist extends React.Component {
    constructor(props){
        super(props)

        this.handleNameChange = this.handleNameChange.bind(this)
    }

    handleNameChange (event) {
        this.props.onNameChange(event.target.value)
    }

    render () {
        return (
            <div className="Playlist">
                <input defaultValue={"New Playlist"} onChange={this.handleNameChange}/>
                <Tracklist tracks={this.props.playlistTracks}
                    isRemoval={true} onRemove={this.props.onRemove}/>
                <button className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</button>
            </div>
        )
    }
}

export default Playlist;