import React, { useState } from 'react';

const Playlist = ({ tracks, onSelectTrack }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTracks = tracks.filter((track) =>
    track.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4 bg-zinc-800 rounded-lg shadow-lg w-[100%]">
      <h2 className="text-xl font-semibold text-white mb-4">Playlist</h2>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full mb-4 px-4 py-2 rounded-lg bg-gray-700 text-white"
      />
      <ul>
        {filteredTracks.map((track, index) => (
          <li
            key={index}
            className="flex items-center mb-2 p-2 bg-zinc-700 rounded-lg cursor-pointer hover:bg-gray-600"
            onClick={() => onSelectTrack(index)}
          >
            <img src={track.cover} alt="cover" className="w-12 h-12 rounded-full" />
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-white">{track.title}</h3>
              <p className="text-sm text-gray-400">{track.artist}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Playlist;
