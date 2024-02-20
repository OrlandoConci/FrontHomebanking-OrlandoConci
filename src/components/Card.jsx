import React, {useState, useEffect} from "react";

function Card({card}) {
    let style = ""
    switch (card.color) {
        case "GOLD":
            style ="w-80 h-56 m-auto bg-gradient-to-r from-orange-500 via-orange-300 to-orange-200 rounded-xl relative text-white shadow-2xl transition-transform transform hover:scale-110"
            break;
        case "TITANIUM":
            style = "w-80 h-56 m-auto bg-gradient-to-r from-slate-700 via-slate-500 to-slate-300 rounded-xl relative text-white shadow-2xl transition-transform transform hover:scale-110"
            break;
        case "SILVER":
            style = "w-80 h-56 m-auto bg-gradient-to-r from-black via-gray-900 to-gray-700 rounded-xl relative text-white shadow-2xl transition-transform transform hover:scale-110"
            break;
    }
        
    return (
        <div className={style}>
            
            <div className="w-full px-8 absolute top-3">
                <p className="font-medium tracking-widest text-center">{card.type} {card.color}</p>
                <div className="flex justify-between">
                    <div className="">
                        <p className="font-light">
                            Name
                        </p>
                        <p className="font-medium tracking-widest">
                            {card.cardHolder}
                        </p>
                    </div>
                    <img className="w-14 h-14" src="https://i.imgur.com/bbPHJVe.png"/>
                </div>
                <div className="pt-1">
                    <p className="font-light">
                        Card Number
                    </p>
                    <p className="font-medium tracking-more-wider">
                        {card.number}
                    </p>
                </div>
                <div className="pt-6 pr-6">
                    <div className="flex justify-between">
                        <div className="">
                            <p className="font-light text-xs">
                                Valid
                            </p>
                            <p className="font-medium tracking-wider text-sm">
                                {card.fromDate}
                            </p>
                        </div>
                        <div className="">
                            <p className="font-light text-xs text-xs">
                                Expiry
                            </p>
                            <p className="font-medium tracking-wider text-sm">
                                {card.thruDate}
                            </p>
                        </div>

                        <div className="">
                            <p className="font-light text-xs">
                                CVV
                            </p>
                            <p className="font-bold tracking-more-wider text-sm">
                                ···
                            </p>
                        </div>
                    </div>
                </div>
        
            </div>
        
        </div>
    )}

export default Card