import React from 'react'

function Card({channel, btnText}) { //function Card(props)
    
    console.log(channel,btnText); // console.log("props",props);
    
    return(
       <div className="flex flex-col rounded-xl  p-4"
        style={{
          border: '0.88px solid',
          backdropFilter: 'saturate(180%) blur(14px)',
          background: ' #ffffff0d',  
        }}
      >
        <div>
        {/* <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1> */}
          <img
            src="https://res.cloudinary.com/ddcg0rzlo/image/upload/v1652470298/9StaF0UBJfih_df0248.gif"
            alt="nft-gif"
            width="400"
            height="400"
            className="rounded-xl"
          />
        </div>
        <div className="flex flex-col  rounded-b-xl py-4 ">
          <div className="flex justify-between">
            <h1 className="font-RubikBold ">{btnText}</h1>
            <h1 className="font-bold font-RubikBold">{channel}</h1>
          </div>
          <div className="flex  justify-between font-mono">
            {/* <Card/> */}
          </div>
        </div>
      </div>

    )
    
}

export default Card