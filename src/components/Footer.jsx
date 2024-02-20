import React from "react";
import Image from "./Image";

function Footer() {
    return (
        <footer className="flex w-full bg-gray-700 px-2 gap-6 justify-center items-center">
            <div>
                <h3 className="text-white text-sm">© 2024 - All rights reserved</h3>
            </div>
            <div className="flex p-2 gap-3">
                <Image src={"../../public/logo_facebook.png"} className="size-8"></Image>
                <Image src={"../../public/instagram.png"} className="size-8"></Image>
                <Image src={"../../public/whatsapp.png"} className="size-8"></Image>
            </div>
        </footer>
    )
}

export default Footer