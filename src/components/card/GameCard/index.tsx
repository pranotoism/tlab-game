import React from 'react'

interface IGameCardProps {
  id: string;
  title: string;
  thumbnail: string;
  short_description: string;
  game_url: string;
  genre: string;
  platform: string;
  publisher: string;
  developer: string;
  release_date: string;
  freetogame_profile_url: string;
}

function GameCard({game}: {game: IGameCardProps}) {
  return (
    <div className='col-span-4 px-[12px] pt-[12px] pb-[24px] flex flex-col bg-white rounded-md'>
      {/* thumbnail */}
      <div className='w-full h-[184px] bg-red-300 relative rounded-md' style={{backgroundImage: `url(${game.thumbnail})`}}>
        {/* label */}
        <p
          className='text-[#0E385F] py-1 px-3 bg-[#C1E1FF] absolute left-2 bottom-[6px] rounded-full font-semibold'
        >
          {game.genre}
        </p>
      </div>

      {/* title */}
      <div className='flex flex-col gap-3 my-3'>
        <p className='text-[20px] leading-[151.023%] text-[#373B59]'>{game.title}</p>
        <p className='text-[16px] leading-[151.023%] text-[#373B59]'>{game.short_description}</p>
      </div>
      
      {/* details */}
      <div className='pt-4 border-t w-full'>
        <div className='flex flex-row gap-3 w-full'>
          <div className='w-full'>
            <p className='mb-1 text-[14px] leading-[151.023%] text-[#A0A7B9]'>Platform</p>
            <p className='text-[16px] leading-[151.023%] text-[#373B59]'>{game.platform}</p>
          </div>
          <div className='w-full'>
            <p className='mb-1 text-[14px] leading-[151.023%] text-[#A0A7B9]'>Release Date</p>
            <p className='text-[16px] leading-[151.023%] text-[#373B59]'>{game.release_date}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GameCard